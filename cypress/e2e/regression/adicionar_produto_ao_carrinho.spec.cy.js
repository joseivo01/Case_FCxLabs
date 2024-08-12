const HomePage = require("../../pages/home_page")
const ItemPage = require("../../pages/item_page")
const CheckoutPage = require("../../pages/checkout_page")
const elements = require("../../support/elements")

const home_page = new HomePage
const item_page = new ItemPage
const checkout_page = new CheckoutPage

describe('Adicionar produto ao carrinho', () => {
    let item_titulo, item_preco_vista;
    beforeEach(() => {
        cy.acessar_pagina_limpa()
        item_titulo = "Smart TV LG 43"
        item_preco_vista = "1.709,05"
    });

    it('deve permitir a pesquisa de um produto na barra de pesquisa e retornar resultados relevantes', () => {
        home_page.pesquisar_por(item_titulo)
        
        cy.url().should('include','/pesquisa/Smart')
        home_page.selecionar_primeiro_item().should('contain',item_titulo)
    });

    it('deve carregar a página de detalhes do produto corretamente ao clicar em um item da listagem de resultados', () => {
        home_page.pesquisar_por(item_titulo)
        home_page.selecionar_primeiro_item().click()

        item_page.titulo_item().should('contain', item_titulo)
        cy.url().should('include','/produto/')
        
    });

    it('deve exibir o preço correto na página de detalhes do produto e verificar se não há mudanças inesperadas', () => {
        home_page.pesquisar_por(item_titulo)
        home_page.selecionar_primeiro_item().click()

        item_page.preco_do_item().should('be.visible')
    });

    it('deve adicionar o produto ao carrinho e confirmar que o processo não foi impactado por mudanças recentes', () => {
        home_page.pesquisar_por(item_titulo)
        home_page.selecionar_primeiro_item().click()

        item_page.adicionar_item()
        cy.url().should('include', '/checkout/meu-carrinho')
        item_page.numero_quantidade_itens_no_carrinho().should('have.text', '1')
    });

    it('deve acessar a página do carrinho de compras e verificar se todos os itens são exibidos corretamente', () => {
        home_page.pesquisar_por(item_titulo)
        home_page.selecionar_primeiro_item().click()

        item_page.adicionar_item()
        cy.url().should('include', '/checkout/meu-carrinho')
        
        item_page.numero_quantidade_itens_no_carrinho().should('have.text','1')
        checkout_page.lista_itens_no_carrinho()
            .first()
            .should('contain', item_titulo);
    });
  
    it('deve exibir o preço correto no carrinho, confirmando que não houve regressões nos cálculos de preço', () => {    
        home_page.pesquisar_por(item_titulo);
        home_page.selecionar_primeiro_item().click();

        item_page.preco_do_item().should('contain', item_preco_vista)
        item_page.adicionar_item()

        checkout_page.valor_total_a_vista().should('contain', item_preco_vista);
    });
});   
  