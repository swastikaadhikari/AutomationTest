
import {test,expect} from 'playwright/test';

const BaseURL = process.env.baseURL;

test.describe.serial('USER API Test',()=>{
    let userId;

    test('GET',async({request})=>{
        //URL
        //request send
        //server response
        //response assert
        //await request.get(nURL)
        const response = await request.get(`${BaseURL}/users`);
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
    });

    //Create new user
    test('POST- Create a new user',async({request})=>{
        //request.post(url,{request data})
        const response = await request.post(`${BaseURL}/users`,
            {
                data:{
                    "name": "Test",
                    "email": "Test@gmail.com",
                    "password": "123456",
                    "avatar": "https://picsum.photos/800"
                }
            }
        );
        const responsebody = await response.json();
        console.log(responsebody);
        userId = responsebody.id;
        console.log("Created userID:",userId);

        expect(response.status()).toBe(201);
        expect(responsebody.name).toBe('Test');
        expect(responsebody.email).toBe('Test@gmail.com');
        expect(responsebody.password).toBe('123456');
    });

    //Update the user
    test('PUT- Update the user',async({request})=>{
        const response = await request.put(`${BaseURL}/users/${userId}`,
            {
                data:{
                    "name": "Update Test",
                    "email": "UpdateTest@gmail.com",
                }
            }
        );
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
        expect(responsebody.name).toBe('Update Test');
        expect(responsebody.email).toBe('UpdateTest@gmail.com')

    });

    //Delete the user
    test('Delete',async({request})=>{
        const response = await request.delete(`${BaseURL}/users/${userId}`);
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
    });

    
    test('GET-Fetch single user',async({request})=>{
        const response = await request.get(`${BaseURL}/users/${userId}`);
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(200);
    });


    test('POST-Create user with already existing email',async({request})=>{
        const response = await request.post(`${BaseURL}/users`,{
            data:{
                "name": "Test",
                "email": "Test@gmail.com",
                "password": "123456",
                "avatar": "https://picsum.photos/800"
            }
        }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(201);
    });

    test('POST-Create user with invalid password',async({request})=>{
        const response = await request.post(`${BaseURL}/users`,{
            data:{
                "name": "Test",
                "email": "Test@gmail.com",
                "password": "test@1234",
                "avatar": "https://picsum.photos/800"
            }
        }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('password must contain only letters and numbers');
    });

    test('POST-Invalid Email Format',async({request})=>{
        const response = await request.post(`${BaseURL}/users`,{
            data:{
                "name": "Test",
                "email": "Testgmail.com",
                "password": "123456",
                "avatar": "https://picsum.photos/800"
               
             }   
        }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe("email must be an email");
    });

    test('POST-Create user with empty username',async({request})=>{
        const response = await request.post(`${BaseURL}/users`,{
            data:{
                "name": "",
                "email": "swastika@gmail.com",
                "password": "123456",
                "avatar": "https://picsum.photos/800"
            }
        }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('name should not be empty');
    });
    
    test('POST- Create user with empty email',async({request})=>{
        const response = await request.post(`${BaseURL}/users`,{
            data:{
                "name": "swastika",
                "email": "",
                "password": "123456",
                "avatar": "https://picsum.photos/800"
            }
        }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('email should not be empty');
    expect(responsebody.message[1]).toBe('email must be an email');
    });

    test('POST- Create user with empty password',async({request})=>{
        const response = await request.post(`${BaseURL}/users`,{
             data:{
                "name": "swastika",
                "email": "swastika@gmail.com",
                "password": "",
                "avatar": "https://picsum.photos/800"
        }
    }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe('password must be longer than or equal to 4 characters');
    expect(responsebody.message[1]).toBe('password should not be empty');
    expect(responsebody.message[2]).toBe('password must contain only letters and numbers');
    });

    test('POST- Create user with short password',async({request})=>{
        const response = await request.post(`${BaseURL}/users`,{
            data:{
                "name": "swastika",
                "email": "swastika@gmail.com",
                "password": "123",
                "avatar": "https://picsum.photos/800"

                }
            }
        )
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(400);
    expect(responsebody.message[0]).toBe("password must be longer than or equal to 4 characters"); 
    });

    test('POST- Check Email Availability',async({request})=>{
        const response = await request.post(`${BaseURL}/users//is-available`,{
            data:{
                 "email":"UpdateTest@gmail.com",
            }
        }
    );
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(201);

    });
});



//fetch single user
//invalid id
//already existing email //postman ma vako garne users ko lagi
