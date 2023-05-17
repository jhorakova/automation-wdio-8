import { username, password } from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('selectors', async () => {

        await browser.reloadSession();
        await browser.url('/prihlaseni');
//tag
        const formFieldPodleTagu = await $('form');
        console.log(await formFieldPodleTagu.getHTML());
        const inputFielPodleTagu = await $('input');
        console.log(await inputFielPodleTagu.getHTML());
        const buttonFieldPodleTagu = await $('button')
        console.log(await inputFielPodleTagu.getHTML())

//ID
const emailPodleId = await $('#email');
console.log(await emailPodleId.getHTML());
const passwordPodleId = await $('#password');
console.log(await passwordPodleId.getHTML())

//trida
const tlacitkoFormularPodleTridy = await $('.btn-primary');  // byla chyba
console.log(await tlacitkoFormularPodleTridy.getHTML());
const emailPodleTridy = await $('.form-control');
console.log(await emailPodleTridy.getHTML());

//atribut
const passwordPodleAtributu = await $('[type="password"]');
console.log(await passwordPodleAtributu.getHTML());
const assPodleAtribudu = await $ ('[type*="ass"]');
console.log(await assPodleAtribudu.getHTML());


    });

})




