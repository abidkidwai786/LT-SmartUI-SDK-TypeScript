import { expect, browser, $ } from '@wdio/globals'
const { smartuiSnapshot } = require('@lambdatest/wdio-driver');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
        await smartuiSnapshot(browser, "SS-1");        
    })
})

