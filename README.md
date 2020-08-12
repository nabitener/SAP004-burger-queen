
# Burger Queen

## Índice

- [1. Resumo do projeto](#1-resumo-do-projeto)
- [2. Fluxograma da Aplicação](#2-fluxograma-da-aplicação)
- [3. Tecnologias usadas](#3-tecnologias-usadas)

---

## 1. Resumo do Projeto

O Burger Queen é um app desenvolvido para ser usado como organizador de toda a logística dos pedidos de uma hamburgueria, desde a criação do pedido, até o histórico de todos os pedidos realizados. Ele foi projetado para ser usado especificamente em tablets na horizontal, mas que também de adapta para telas maiores.

Cada funcionário é direcionado para a sua tela específica de trabalho, que pode ser a cozinha ou o salão:

![Tela de login](src/image/login.png)

Na tela do salão é onde fica o menu café da manhã/Almoço e jantar, uma aba com os pedidos prontos para serem entregues e o formulário para criação de pedido:

![Tela do salão](src/image/hall.png)

Após clicar no botão de enviar na cozinha, o novo pedido é enviado para a cozinha para serem preparados, e quando o preparo foi finalizado e apertarem no botão de pronto, esse pedido volta para o salão para ser entregue ao cliente. Na tela da cozinha também encontramos um botão de histórico que mostrará todos os pedidos criados:

![Tela da cozinha](src/image/cozinha1.png)

![Tela do Histórico](src/image/historico.png)

** Tanto na tela da cozinha quanto do salão é possível cancelar pedidos.


### 2. Fluxograma da Aplicação

Abaixo temos um fluxograma que ilustra todo o fluxo da aplicação:

- Fluxograma do login até a cozinha

![Fluxograma do login até ao hall](src/image/Fluxograma_-_Burger_Queen_-_Login_-_Cozinha.png)

- Fluxograma da cozinha até o histórico

![Fluxograma da cozinha até o histórico](src/image/Fluxograma_-_Burger_Queen_-_Cozinha_-_Histórico.png)

### 3. Tecnologias usadas

Este projeto foi desenvolvido para ser uma *Single Page App*, além disso foram usadas as seguintes ferramentas:

- React
- React Hooks
- React Router
- Firebase
- SweetAlert2

Como também Javascript, CSS e HTML.

*** Projeto desenvolvido por [Ana Carolina Ramos](https://github.com/ana-ramos09) e [Nathalia Bitener](https://github.com/nabitener) ***