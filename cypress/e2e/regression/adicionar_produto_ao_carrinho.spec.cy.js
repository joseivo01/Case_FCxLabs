const produtos = require("../../fixtures/produtos_descricao")
const HomePage = require("../../pages/home_page")
const ItemPage = require("../../pages/item_page")
const CheckoutPage = require("../../pages/checkout_page")

const home_page = new HomePage
const item_page = new ItemPage
const checkout_page = new CheckoutPage

describe('Adicionar produto ao carrinho', () => {

    beforeEach(() => {
        cy.acessar_pagina_limpa()
    });

    it('deve acessar a página inicial do e-commerce sem erros', () => {});

    it('deve permitir a pesquisa de um produto na barra de pesquisa e retornar resultados relevantes', () => {});

    it('deve exibir a página de resultados de pesquisa com o produto correto e sem regressões na funcionalidade', () => {});

    it('deve carregar a página de detalhes do produto corretamente ao clicar em um item da listagem de resultados', () => {});

    it('deve exibir o preço correto na página de detalhes do produto e verificar se não há mudanças inesperadas', () => {});

    it('deve adicionar o produto ao carrinho e confirmar que o processo não foi impactado por mudanças recentes', () => {});

    it('deve exibir uma confirmação de adição ao carrinho, garantindo que o feedback visual permanece intacto', () => {});

    it('deve acessar a página do carrinho de compras e verificar se todos os itens são exibidos corretamente', () => {});

    it('deve listar o produto no carrinho e validar que os detalhes do produto não foram alterados inadvertidamente', () => {});

    it('deve exibir o preço correto no carrinho, confirmando que não houve regressões nos cálculos de preço', () => {});

    
});
  