import { request } from 'node:http';
import {test,expect} from 'playwright/test';
import userCreateData from '../../test_data/userCreate.json'
const BaseURL = process.env.baseURL;

test.describe('Product API Test',()=>{
let productId;
let slugname;

    test('GET-View All the product listed',async({request})=>{
        const response = await request.get(`${BaseURL}/products`)
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
    });

        test('POST-Create Product',async({request})=>{
        //request.post(url,{request data})
        const response = await request.post(`${BaseURL}/products`,
            {
                //data:
                data:{
                    
                    "title": "Summer Women clothes",
                    "price": 100,
                    "description": "A description",
                    "categoryId": 1,
                    "images": ['https://placehold.co/600x400'],
                }
            }
        );
        const responsebody = await response.json();
        console.log(responsebody);
        productId = responsebody.id;
        console.log(productId);

        slugname = responsebody.slug;
        console.log(slugname);
        expect(response.status()).toBe(201);
    });

    test('PUT-Update Product',async({request})=>{
        const response = await request.put(`${BaseURL}/products/${productId}`,
            {
                data:{
                    "title": "Update Woman clothes",
                    "price": 1000,
                    "description": "Updated A description",
                    "categoryId": 1,
                    "images": ['https://placehold.co/600x400'],
                }
            }
        );
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
        
    });

    test('DELETE',async({request})=>{
        const response = await request.delete(`${BaseURL}/products/${productId}`,
          
    );
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
    });

    test('POST-Create product with same title',async({request})=>{
         const response = await request.post(`${BaseURL}/products`,
            {
                data:{
                    
                    "title": "Summer Women clothes",
                    "price": 1000,
                    "description": "A description",
                    "categoryId": 1,
                    "images": ['https://placehold.co/600x400'],
                }
            }
        );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message).toContain("SqliteError: UNIQUE constraint failed: product.slug");
    });

    test('POST-Create product with empty title',async({request})=>{
        const response = await request.post(`${BaseURL}/products`,{
            data:{
                "title": "",
                "price": 1000,
                "description": "A description",
                "categoryId": 1,
                "images": ['https://placehold.co/600x400'],
            }
        })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('title should not be empty');
    });

    test('POST-Create product with empty price field',async({request})=>{
        const response = await request.post(`${BaseURL}/products`,{
            data:{
                "title": "Summer Women clothes",
                "price": '',
                "description": "A description",
                "categoryId": 1,
                "images": ['https://placehold.co/600x400'],
            }
        })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    
    });

    test('POST-Create product with empty description',async({request})=>{
        const response = await request.post(`${BaseURL}/products`,{
            data:{
                "title": "Top",
                "price": 1000,
                "description": "",
                "categoryId": 1,
                "images": ['https://placehold.co/600x400'],
            }
        })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('description should not be empty');

   
    });

    test('POST-Create product with empty category ID',async({request})=>{
        const response = await request.post(`${BaseURL}/products`,{
            data:{
                "title": "Top",
                "price": 1000,
                "description": "A description",
                "categoryId": "",
                "images": ['https://placehold.co/600x400'],
            }
        })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.name).toContain("EntityNotFoundError");
    });

      test('POST-Create product with empty image URL',async({request})=>{
        const response = await request.post(`${BaseURL}/products`,{
            data:{
                "title": "Top",
                "price": 1000,
                "description": "A description",
                "categoryId": "1",
                "images": [''],
            }
        })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('each value in images must be a URL address');

    });

     test('POST-Create product with invalid category ID',async({request})=>{
        const response = await request.post(`${BaseURL}/products`,{
            data:{
                "title": "Top",
                "price": 1000,
                "description": "A description",
                "categoryId": "1000",
                "images": ['https://placehold.co/600x400'],
            }
        })
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400); 
    expect(responsebody).toHaveProperty('message');

     });

    test('GET-Fetch product by product ID',async({request})=>{

        const response = await request.get(`${BaseURL}/products/${productId}`);
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
    });

   test('GET-Fetch product by slug',async({request})=>{

        const response = await request.get(`${BaseURL}/products/slug/${slugname}`);
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
    });

    test('GET-Pagination',async({request})=>{
        const limit=10;
        let offset = 0;
        const response = await request.get(`${BaseURL}/products?offset=${offset}&limit=${limit}`);
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
        expect(products.length).toBeLessThanOrEqual(limit);
    })





});