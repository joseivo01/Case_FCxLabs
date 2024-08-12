const elements = require("../support/elements")
import FactoryPage from "./factory_page";


class CheckoutPage extends FactoryPage{
    checar_fechar_pedido(){
        cy.get(elements.fechar_pedido_btn).should('be.visible').and('not.be.disable')
    }
    clicar_fechar_pedido(){
        cy.get(elements.fechar_pedido_btn).should('be.visible')
        .click()
    }
    clicar_continuar_comprando(){
        cy.get(elements.continuar_comprando_btn).should('be.visible')
        .click()
    }
    valor_total_a_vista(){
        return cy.get(elements.preco_generico_a_vista).should('be.visible')
    }
    lista_itens_no_carrinho(){
        return cy.get(elements.titulo_dos_itens)
    }
    
    // Possiveis casos de testes que demandão mais tempo:
    // Verificar se é o mesmo item no carrinho
    // Excluir item do checkout
    // Adicionar +1 item pelo checkout
}

export default CheckoutPage;
