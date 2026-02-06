import test from '@playwright/test';

test.describe('',()=>{
     
    test('@sanity Group Test one',()=>{
        console.log('This is group one test one');
    });

    test('Group Test two',()=>{
        console.log('This is group two test two');
    });

     test('Group Test three',()=>{
        console.log('This is group two test three');
    });

     test('@sanity Group Test Four',()=>{
        console.log('This is group four test four');
    });
});;