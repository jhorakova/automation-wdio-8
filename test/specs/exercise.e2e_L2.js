import { username, password } from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('selectors', async () => {

        await browser.reloadSession();
        await browser.url('/prihlaseni');
/*tag
podle tagu
form element podle tagu
input element podle tagu
button element podle tagu*/

        const formFieldPodleTagu = await $('form');
        console.log(await formFieldPodleTagu.getHTML());
        const inputFielPodleTagu = await $('input');
        console.log(await inputFielPodleTagu.getHTML());
        const buttonFieldPodleTagu = await $('button')
        console.log(await inputFielPodleTagu.getHTML())

/*ID
podle ID
políčko email podle ID
políčko password podle ID*/

const emailPodleId = await $('#email');
console.log(await emailPodleId.getHTML());
const passwordPodleId = await $('#password');
console.log(await passwordPodleId.getHTML())

/*trida
podle třídy
talčítko na odeslání formuláře pomocí třídy
políčko email podle atributu name*/

const tlacitkoFormularPodleTridy = await $('.btn-primary');  // byla chyba
console.log(await tlacitkoFormularPodleTridy.getHTML());
const emailPodleAtributuName = await $('[name="email"]');
console.log(await emailPodleAtributuName.getHTML());

/*atribut
podle atributu
políčko password podle attributu type
políčko podle atributu jehož honota obsahuje “ass”
políčko podle atributu jehož honota končí na na “word”
políčko podle atributu jehož honota začíná na “pass”*/

/*const passwordPodleAtributu = await $('[type="password"]');
console.log(await passwordPodleAtributu.getHTML());
const assPodleAtribudu = await $ ('[type*="ass"]');
console.log(await assPodleAtribudu.getHTML());*/


    });

})




