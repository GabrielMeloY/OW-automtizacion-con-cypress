describe('Pruebas OPENWEBINARS ASERCIONES', () => {

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com")
    })

    context("Login tests", () => {

        it('Login correcto', () => {
            cy.get("#user-name").type("standard_user").should('have.value','standard_user')
            cy.get("#password").type("secret_sauce").should('have.value','secret_sauce')
            cy.get("#login-button").click()
        })
    
        it('Login incorrecto', () => {
            cy.get("#user-name").type("standard_user").should('have.value','standard_user')
            cy.get("#user-name").clear()
            cy.get("#user-name").type("locked_out_user").should('have.value','locked_out_user')
            cy.get("#password").type("secret_sauce").should('have.value','secret_sauce')
            cy.get("#login-button").click()
        })

        it('Login correcto - Asercion PRODUCTS', () => {   
            cy.get("#user-name").type("standard_user").should('have.value',"standard_user")
            cy.get("*[data-test='password']").type("secret_sauce").should('have.value',"secret_sauce")
            cy.get("input[name='login-button']").click()
            cy.get(".title").should('have.text',"Products")
        })  
    
        it('Login incorrecto - Asercion erronea', () => {
            cy.get("#user-name").type("locked_out_user").should('have.value',"locked_out_user")
            cy.get("*[data-test='password']").type("secret_sauce").should('have.value',"secret_sauce")
            cy.get("input[name='login-button']").click()
            cy.get("[data-test='error']").should('contain.text',"locked out..")
        })  
    
    })

    

})