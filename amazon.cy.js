describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#createAccountSubmit').click()

    cy.get('#ap_customer_name').type('jefferson silva')
    cy.get('#ap_email').type('jeff.automation1@gmail.com')
    cy.get('#ap_password').type('###########')
    cy.get('#ap_password_check').type('###########')
    cy.get('#continue').click()

    cy.get('#ap_email').type('jeff.automation1@gmail.com')
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type('###########')
    cy.get('#signInSubmit').click()

    cy.get('#ap-account-fixup-phone-skip-link').click()

    // Remove qualquer estilo que impeça a interação e realiza a busca por "Alexa"
cy.get('#searchDropdownBox')
.parent()
.invoke('removeAttr', 'style') 
.then(() => {
  cy.get('#searchDropdownBox')
    .wrap('Todas as categorias')

  cy.get('#twotabsearchtextbox')
    .type('montessori brinquedos')
    .should('have.value', 'montessori brinquedos')

  cy.get('#nav-search-submit-button') 
    .click()
})

cy.get('#a-autoid-1-announce').click()

// Limpa o campo de busca
cy.get('#twotabsearchtextbox') // Campo de busca
.clear() // Limpa o campo
.should('have.value', '') // Valida que o campo foi limpo

// Pesquisa por "carrinho"
cy.get('#twotabsearchtextbox') // Campo de busca
.type('carrinho') // Digita "carrinho"
.should('have.value', 'carrinho') // Valida que o texto foi inserido corretamente

cy.get('#nav-search-submit-button') // Botão de busca
.click() // Clica no botão de busca novamente

cy.get('#a-autoid-13-announce').click()

cy.get('#nav-cart').click({force: true})

cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()

cy.get('#address-ui-widgets-DetectLocationButton-text').click()

cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('16991880433')
cy.get('#address-ui-widgets-enterAddressPostalCode').type('14150000')
cy.wait(5000)
cy.get('#address-ui-widgets-streetName').type('Dirce morais Deza')
cy.get('#address-ui-widgets-buildingNumber').type('70')
cy.wait(5000)
cy.get('#address-ui-widgets-complement').type('casa')
cy.wait(5000)

cy.get('#address-ui-widgets-use-as-my-default').click()

cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input').click()


cy.get('#taxid-field').type('435.749.590-36')
cy.get('#taxid-continue-enabled > .a-button-inner > .a-button-input').click()
cy.get('[data-testid="Address_selectShipToThisAddress"]').click()
cy.get('#taxid-field').type('435.749.590-36')

cy.get('#pp-YDclRr-72').click()

cy.get('#pp-W36w5f-76 > .a-button-inner > .a-button-input').click()
cy.get('#pp-W36w5f-76 > .a-button-inner > .a-button-input').click()



  })

  

  
  })
