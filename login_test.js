Feature("login");

Scenario("Login com sucesso", ({ I }) => {
  
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user', 'testando@testando.com.br')
    I.fillField('#password', 'testando@123')
    I.click('#btnLogin')
    I.waitForText('Login realizado',3)

}).tag('@loginsucesso')


Scenario("Tentando Logar digitando apenas o e-mail", ({ I }) => {
  
    I.amOnPage("http://automationpratice.com.br/")
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user', 'testando@testando.com.br')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',3)
}).tag('@apenasemail')


Scenario("Tentando logar sem digitar e-mail e senha", ({ I }) => {
  
    I.amOnPage("http://automationpratice.com.br/")
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user', '')
    I.fillField('#password', '')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',3)
}).tag('@sememailsenha')


Scenario("Tentando Logar digitando apenas a senha", ({ I }) => {
  
    I.amOnPage("http://automationpratice.com.br/")
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#password', 'testando@123')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',3)
}).tag('@apenassenha')
