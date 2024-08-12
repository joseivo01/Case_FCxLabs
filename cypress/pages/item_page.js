const elements = require("../support/elements")
import FactoryPage from "./factory_page";


class InventoryPage extends FactoryPage{
    adicionar_item() {
        cy.get(elements.add_item_to_cart).should('be.visible').click()
    }
    verificar_preco(){
        //
    }

    // Possiveis casos de testes que demandão mais tempo:
    // Selecionar mais de 2 unidades de uma so vez
}

export default InventoryPage;
  