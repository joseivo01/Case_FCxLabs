module.exports = {
    logo: '#logo-wapper',
    barrar_pesquisa: '#searchProduct',
    botao_pesquisar: 'span[data-testid="search-product-hyperlink"]',
    lista_casamento: 'div[data-testid="wedding-gift-list-container"]',
    botao_logar_ou_registrar: 'div[data-testid="user-unaunthenticated-container"]',
    botao_carrinho: 'span[data-testid="cart-hyper-link"]',
    ver_carrinho_btn: 'header[data-testid="header-modal-cart"]',
    fechar_pedido_btn_janela: 'button[data-testid="button-close-order"]',
    seletor_de_localizacao: 'div[data-testid="select-location-container-header"]',

    cep_localizacao_seletor:'input[data-testid="input-zip-code-modal-branch-location"]',
    categoria_head: 'strong[data-testid="category-title-section"]',
    item_categoria_generico: 'ul>li>div>div',

    item_categoria_atalho:'section[data-testid="custom-styled-link-"] > a',

    lista_de_itens: 'h3[data-testid="product-card-title"]', // acessar via [0],[1]
    contador_carrinho: 'span[data-testid="counter-itens"]',
    sessao_generica: 'header[data-testid="product-list-header"] > a',

    // Item Page - Dica para validar seletores: document.querySelectorAll('h1[data-testid="box-price-product-price-value"]')
    item_preco_a_vista: 'h1[data-testid="box-price-product-price-value"]:last',
    titulo_do_item:'h1[data-testid="box-product-title"]',
    adicionar_carrinho_btn: 'button[data-testid="button-cart"]:last',
    cep_campo: 'input[data-testid="form-input-mask-desktop-zipcode-input"]',
    modal_tipo_frete: 'div[data-testid="view-zipcode-search-box-info"]',
    modal_retirada: 'div[data-testid="view-zipcode-search-box-info-shipping"]', //duplicado, mas não faz diferença no momento

    // Checkout Page.
    fechar_pedido_btn: 'button[data-testid="box-details-info-button-success"]',
    continuar_comprando_btn: 'button[data-testid="box-details-info-button-line"]',
    titulo_dos_itens: 'h3[data-testid="title-product-card-container"]',
    preco_generico_a_vista: 'h3[data-testid="text-price-type-sale-card-container"]',
    preco_generico_a_prazo: 'h3[data-testid="text-price-condition-card-container"]'
}