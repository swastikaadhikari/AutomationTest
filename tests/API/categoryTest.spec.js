
import {test,expect} from 'playwright/test';

const BaseURL = process.env.baseURL;

test.describe.serial('Category API Test',()=>{
let categoryId;
let slugname;

test('POST-Create a new category',async({request})=>{
    const response = await request.post(`${BaseURL}/categories`,
        {
         data:{
                "name": "SHSummer Top Women category",
                "image": "https://placeimg.com/640/480/any"
            }           
        }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    categoryId = responsebody.id;
    console.log(categoryId);
    slugname = responsebody.slug;
    console.log(slugname);

    expect(response.status()).toBe(201);
});

test('POST-Create category with empty category name',async({request})=>{
    const response = await request.post(`${BaseURL}/categories`,
        {
        data:{
            "name": "",
            "image": "https://placeimg.com/640/480/any"
            }
        }
    )
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('name should not be empty');
});

test('POST-Create category with empty image URL',async({request})=>{
    const response = await request.post(`${BaseURL}/categories`,
        {
            data:{
            "name": "Mens Wear",
            "image": ""
            }
        }
    )
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('image should not be empty');
    expect(responsebody.message[1]).toBe('image must be a URL address');
});

test('POST- Create category with invalid image URl',async({request})=>{
    const response = await request.post(`${BaseURL}/categories`,
        {
        data:{
            "name": "Items",
            "image": "https:/placeimg.com/640/480/any"
        }
    })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('image must be a URL address');
});

test('POST- Create category with existing category name',async({request})=>{
    const response = await request.post(`${BaseURL}/categories`,
        {
        data:{
            "name": "HSummer Top Women category",
            "image": "https://placeimg.com/640/480/any"
        }
    })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message).toContain("SqliteError: UNIQUE constraint failed: category.slug");
});

test('GET- Fetch Categories',async({request})=>{
    const response = await request.get(`${BaseURL}/categories`);
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
});

test('GET-Fetch Categories with ID',async({request})=>{
   // expect(categoryId).toBeDefined();
    const response = await request.get(`${BaseURL}/categories/${categoryId}`);
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
});

test('GET - Fetch category using slug',async({request})=>{
    const response = await request.get(`${BaseURL}/categories/slug/${slugname}`);
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
    expect(responsebody.slug).toBe(slugname);
});

test('PUT- Update Category',async({request})=>{
     const response = await request.put(`${BaseURL}/categories/${categoryId}`,
        {
            data:{
                    "name": "Update Summer Women category", 
                    "image": "https://placeimg.com/640/480/any",
                }
            }
        );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
    expect(responsebody.name).toBe('Update Summer Women category');
    
});

test('PUT-Update category with empty name',async({request})=>{
    const response = await request.put(`${BaseURL}/categories/${categoryId}`,
        {
            data:{
                "name": "", 
                "image": "https://placeimg.com/640/480/any",
                }
            }
        );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
});

test('PUT-Update category with invalid image URL',async({request})=>{
    const response = await request.put(`${BaseURL}/categories/${categoryId}`,
        {
            data:{
                "name": "Updated Baby Items", 
                "image": "https:/placeimg.com/640/480/any",
                }
            }
        );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('image must be a URL address');

});

test('PUT-Update category with empty image URL',async({request})=>{
    const response = await request.put(`${BaseURL}/categories/${categoryId}`,
        {
            data:{
                "name": "Updated Baby Items", 
                "image": "",
                }
            }
        );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('image must be a URL address');

});

test('Delete- Existing category',async({request})=>{
    const response = await request.delete(`${BaseURL}/categories/${categoryId}`);
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
})

test('GET- All product by category',async({request})=>{
    const response = await request.get(`${BaseURL}/categories/${categoryId}/products`);
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
})

});
