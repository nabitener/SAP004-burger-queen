
# Burger Queen

## Índice

- [1. Resumo do projeto](#1-resumo-do-projeto)
- [2. Fluxograma da Aplicação](#2-fluxograma-da-aplicação)
- [3. Tecnologias usadas](#3-tecnologias-usadas)

---

## 1. Resumo do Projeto

O Burger Queen é um app desenvolvido para ser usado como organizador de toda a logística dos pedidos de uma hamburgueria, desde a criação do pedido, até o histórico de todos os pedidos realizados. Ele foi projetado para ser usado especificamente em tablets na horizontal, mas que também de adapta para telas maiores.

Cada funcionário é direcionado para a sua tela específica de trabalho, que pode ser a cozinha ou o salão:

![Tela do Login](https://user-images.githubusercontent.com/61169143/90082801-1d93c100-dce7-11ea-8bb7-0b275a52ede6.png)

Na tela do salão é onde fica o menu café da manhã/Almoço e jantar, uma aba com os pedidos prontos para serem entregues e o formulário para criação de pedido:

![Tela do Salão](https://user-images.githubusercontent.com/61169143/90082523-5aab8380-dce6-11ea-9278-7d8ff57bad3b.png)

Após clicar no botão de enviar na cozinha, o novo pedido é enviado para a cozinha para serem preparados, e quando o preparo foi finalizado e apertarem no botão de pronto, esse pedido volta para o salão para ser entregue ao cliente. Na tela da cozinha também encontramos um botão de histórico que mostrará todos os pedidos criados:

![Tela da Cozinha](https://user-images.githubusercontent.com/61169143/90082846-3bf9bc80-dce7-11ea-9d3c-c8735702b96f.png)

![Tela do Histórico](https://user-images.githubusercontent.com/61169143/90082902-5df33f00-dce7-11ea-9a18-52075cebc16f.png)


** Tanto na tela da cozinha quanto do salão é possível cancelar pedidos.


### 2. Fluxograma da Aplicação

Abaixo temos um fluxograma que ilustra todo o fluxo da aplicação:

- Fluxograma do login até a cozinha

![Fluxograma - Tela Login até Tela Cozinha ](https://user-images.githubusercontent.com/61169143/90082941-7b280d80-dce7-11ea-9309-6f7a61f535f9.png)


- Fluxograma da cozinha até o histórico

![Fluxograma - Tela Cozinha até Tela Histórico](https://user-images.githubusercontent.com/61169143/90082994-ac084280-dce7-11ea-8c00-8ca31cf18cbb.png)

### 3. Tecnologias usadas

Este projeto foi desenvolvido para ser uma *Single Page App*, além disso foram usadas as seguintes ferramentas:

- React
- React Hooks
- React Router
- Firebase
- SweetAlert2

Como também Javascript, CSS e HTML.

*** Projeto desenvolvido por [Ana Carolina Ramos](https://github.com/ana-ramos09) e [Nathalia Bitener](https://github.com/nabitener) ***