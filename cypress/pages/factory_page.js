const elements = require("../support/elements")

// Padrão de projeto PageFactory, possuo conhecimento de outros
// Como pageObject puro e outros...
class FactoryPage{
    pesquisar_por(item_pesquisado){
        cy.get(elements.barrar_pesquisa).type(item_pesquisado,{delay:0})
        cy.get(elements.botao_pesquisar).click()
    }
    clicar_botao_logar_registrar(){
        cy.get(elements.botao_logar_ou_registrar).click()
    }
    clicar_lista_casamento(){
        cy.get(elements.lista_casamento).click()
    }

    numero_quantidade_itens_no_carrinho(){
        return cy.get(elements.contador_carrinho).should('be.visible')
    }

    // Este caso de teste só será ultilizado se adicionar fluxo de login e etc...
    fechar_pedido_de_qualquer_lugar(){
        if(cy.get(elements.contador_carrinho).should('exist')){
            cy.get()
        }
    }

    selecionar_regiao(regiao){
        cy.get(elements.seletor_de_localizacao).click()
        cy.get(elements.cep_localizacao_seletor).should('be.visible').type(regiao+"{ENTER}") // pressionar tecla ENTER
    }
    clicar_carrinho(){
        if(cy.get(elements.contador_carrinho).should('exist')){
            cy.get(elements.botao_carrinho).click()
        }else{
            cy.get(elements.botao_carrinho).click()
            cy.get(elements.ver_carrinho_btn).should('be.visible').click()
        }
    }
    acessar_home_page(){
        cy.get(elements.logo).click()
        cy.url().should('have.text','https://www.ferreiracosta.com/')
    }
    inserir_cep(){
        // sobre-escrever
    }
    selecionar_categoria_header(categoria){
        cy.get(elements.categoria_head).click()
        cy.get(elements.item_categoria_generico).contains(categoria).and('be.visible').click({force:true})
    }
    selecionar_categoria_atalho(categoria_rapida){
        cy.get(elements.item_categoria_atalho).contains(categoria_rapida).click()
    }
    
}

export default FactoryPage;
