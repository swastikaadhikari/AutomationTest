import { request } from 'node:http';
import {test,expect} from 'playwright/test';

const LoginURL = process.env.loginURL;

test.describe('User Login',()=>{

    test('Login User',async({request})=>{
        const response = await request.post(`${LoginURL}/login`,
            {
                data:{ 
                "email": "UpdateTest@gmail.com",
                "password": "123456"
                }
            }
        )
        const responsebody = await response.json();
        console.log(responsebody);
        expect(response.status()).toBe(201);

    })
});