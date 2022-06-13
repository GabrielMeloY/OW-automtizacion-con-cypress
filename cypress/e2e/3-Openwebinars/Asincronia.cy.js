describe('Pruebas OPENWEBINARS ASINCRONIA', () => {

    it('ASINCRONIA', () => {
        
        cy.visit("https://www.saucedemo.com")
        cy.get("#user-name").type("standard_user")
        cy.get("*[data-test='password']").type("secret_sauce")
        cy.get("input[name='login-button']").click().then(()=>{                
            let botones = Cypress.$(".inventory_list button")

            if(botones.length>0){
                cy.log("Hay más de 0 botones")
            } else {
                cy.log("No hay botones")
            }
        })

    })  

})