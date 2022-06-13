// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('loginSauce', (email, password) => { ... })
Cypress.Commands.add('loginSaucedemo', (usuario, password) =>{
    cy.get("#user-name").type(usuario)
    cy.get("*[data-test='password']").type(password)
    cy.get("input[name='login-button']").click()
})

Cypress.Commands.add('checkout',(datos)=>{
    cy.get("#checkout").click()
    cy.get("@titulo").should('have.text',"Checkout: Your Information")

    cy.fixture(datos).then(numPersonas => {
        cy.get("#first-name").type(numPersonas.nombre)
        cy.get("#last-name").type(numPersonas.apellido)
        cy.get("#postal-code").type(numPersonas.zip)
    })

    cy.get("#continue").click()
    cy.get("@titulo").should('have.text',"Checkout: Overview")

    cy.get("#finish").click()
    cy.get("@titulo").should('have.text',"Checkout: Complete!")
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })