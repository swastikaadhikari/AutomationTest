import test from '@playwright/test';

test.describe('',()=>{
     
    test('@sanity Test Group one',()=>{
        console.log('This is test one');
    });

    test('@regression Test Group two',()=>{
        console.log('This is test two');
    });

     test('@regression Test Group three',()=>{
        console.log('This is test three');
    });

     test('@sanity Test Group Four',()=>{
        console.log('This is test four');
    });
});;