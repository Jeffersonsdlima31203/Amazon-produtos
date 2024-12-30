describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-link-accountList-nav-line-1').click()
    //cy.get('#createAccountSubmit').click()

    // cy.get('#ap_customer_name').type('jefferson silva')
    // cy.get('#ap_email').type('jeff.automation1@gmail.com')
    // cy.get('#ap_password').type('Kjp131417!')
    // cy.get('#ap_password_check').type('Kjp131417!')
    // cy.get('#continue').click()

    cy.get('#ap_email').type('teste@gmail.com')
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type('########')
    cy.get('#signInSubmit').click()

    //cy.get('#ap-account-fixup-phone-skip-link').click()

    // Remove qualquer estilo que impeça a interação e realiza a busca por "Alexa"
cy.get('#searchDropdownBox')
.parent()
.invoke('removeAttr', 'style') 
.then(() => {
  cy.get('#searchDropdownBox')
    .wrap('Todas as categorias')

  cy.get('#twotabsearchtextbox')
    .type('Alexa')
    .should('have.value', 'Alexa')

  cy.get('#nav-search-submit-button') 
    .click()
})

cy.get('#a-autoid-1-announce').click()

// Limpa o campo de busca
cy.get('#twotabsearchtextbox') // Campo de busca
.clear() // Limpa o campo
.should('have.value', ''); // Valida que o campo foi limpo

// Pesquisa por "carrinho"
cy.get('#twotabsearchtextbox') // Campo de busca
.type('carrinho') // Digita "carrinho"
.should('have.value', 'carrinho'); // Valida que o texto foi inserido corretamente

cy.get('#nav-search-submit-button') // Botão de busca
.click(); // Clica no botão de busca novamente

cy.get('#a-autoid-13-announce').click()

cy.get('.nav-cart-count').click({force: true})


  })

  

  
  })
