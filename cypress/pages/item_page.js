const elements = require("../support/elements")
import FactoryPage from "./factory_page";


class InventoryPage extends FactoryPage{
    adicionar_item() {
        cy.get(elements.adicionar_carrinho_btn).should('be.visible').click()
    }
    preco_do_item(){
        return cy.get(elements.item_preco_a_vista)
    }
    inserir_cep(CEP){
        cy.get(elements.cep_campo).should('be.visible').type(CEP+'{ENTER}',{delay:0})
    }
    titulo_item(){
        return cy.get(elements.titulo_do_item).should('be.visible')
    }
    // Possiveis casos de testes que demandão mais tempo:
    // Selecionar mais de 2 unidades de uma so vez
}

export default InventoryPage;
  