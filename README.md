# Projeto Automação Web

CodeceptJs + JS 

# Automatizando a página de login do Site  http://automationpratice.com.br/

# Cenários automatizados

Plano de Testes

Feature:  Login

Cenário  1: Login com sucesso

Dado que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

Quando informar os dados para logar

Então deve ser apresentado a tela de usuário logado

---

# Cenário  2: Tentando Logar digitando apenas o e-mail

Dado que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

Quando o usuário digitar apenas o E-mail para logar

Então deve ser apresentada a mensagem “Senha inválida.”

---

# Cenário  3: Tentando logar sem digitar e-mail e senha

Dado que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

Quando clicar em “Login” sem digitar usuário e senha

Então deve ser apresentada a mensagem “E-mail inválido.”

---

# Cenário  4:  Tentando Logar digitando apenas a senha

Dado que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

Quando o usuário digitar apenas a Senha para logar

Então deve ser apresentada a mensagem “E-mail inválido.”

# Uelton Gomes

