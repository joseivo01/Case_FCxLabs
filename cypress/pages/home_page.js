import FactoryPage from "./factory_page";
const elements = require("../support/elements")


class HomePage extends FactoryPage{
    selecionar_uma_secao(categoria_da_sessao){
        cy.get(elements.sessao_generica).contains(categoria_da_sessao).click()
    }
    selecionar_primeiro_item(){
        return cy.get(elements.lista_de_itens).first()
    }
    // Possiveis casos de testes que demandão mais tempo:
    // Selecionar categoria na barra lateral e verificar se corresponde aos itens listados(quantidade).
    // Selecionar um filtro e verificar se realmente foi filtrado(tag do cupom...e etc).
    // clicar no BreadCrumb e verificar se retorna a home
  }
  
  export default HomePage;
  