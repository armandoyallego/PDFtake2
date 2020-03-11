//create variable that require the inquirer and axios packages
const inquirer = require('inquirer');
const axios = require('axios');
// creating variables that require the puppeteer package, as well as fs-extra to begin the code
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
//start with an async function
/*async functions(asynchronous function) is a function that returns an AsyncFunction object.
Asynchronous functions operate in a seperate order than the rest of the code via event loop,
returning an implicit Promise as its result.*/
(async function() {
    try{
        // await expressions pause the execution of the async function wo wait for the Promise's resolution
        // both variables are waiting on each other to commence
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent('<h1>hello</h1>');
        await page.emulateMedia('screen');
        await page.pdf


    } catch (e) {
        console.log('our error', e);
    }
})();

const questions = [
    {
        type: "name",
        

    }
    
]
