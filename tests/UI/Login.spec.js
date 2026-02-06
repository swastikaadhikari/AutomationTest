import { test, expect } from '@playwright/test';

test.describe('Login Test',() => {
    test.beforeAll(() => {
    console.log('This is before all')
  });

  test.beforeEach(() => {
    console.log('This is before each')
  });

  test.afterEach(() => {
    console.log('This is after each')
  });

  test.afterAll(() => {
    console.log('This is before all')
  });

    test('Verify that user can login with valid credentials',() =>{
        console.log('This is test one')
    });

     test('Verify that user cannot login with invalid credentials',() =>{
        console.log('This is test two')
    });

      test('Verify that user cannot login with valid email and invalid password',() =>{
        console.log('This is test three')
    });

      test('Verify that user cannot login with short password',() =>{
        console.log('This is test four')
    });
    
})