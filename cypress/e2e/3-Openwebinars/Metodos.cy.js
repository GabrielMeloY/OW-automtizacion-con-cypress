describe('Pruebas OPENWEBINARS METODOS UTILES', () => {


    it('ALIAS', () => {
        cy.visit("./index_completo.html")
        
        cy.get("#resultado").as("mensaje")

        cy.get("input[name='bebida'][value='cafe']").check()

        cy.get("#enviaRadiobutton").click().then(()=>{
            cy.get("@mensaje")
            .should('contain.text',"cafe")
        })

        cy.get("input[name='listaCompra'][value='verdura']").check()
        .should('be.checked')
        cy.get("input[name='listaCompra'][value='pescado']")
        .should('be.not.checked')
        cy.get("input[name='listaCompra'][value='carne']").check()
        .should('be.checked')
        cy.get("input[name='listaCompra'][value='kleenex']")
        .should('be.not.checked')

        cy.get("#enviaCheckboxes").click().then(()=>{
            cy.get("@mensaje")
            .should('contain.text',"verdura")
            .and('contain.text','carne')
        })
    });


    it('WAITS/ESPERAS', () => {
        cy.visit("./index_completo.html")

        cy.wait(4000).then(()=>{
            console.log("YO sí aparezco tras 4 segundos")
        })

        console.log("aparezco tras 4 segundos - MENTIRA")
    })


    it('WRAP', () => {
        cy.visit("https://www.saucedemo.com")

        cy.loginSaucedemo("standard_user","secret_sauce")

        cy.get(".inventory_list button").each(($boton,index,$listado) =>{
            cy.wrap($boton).click();
        })
    })

    it('WITHIN', () => {
        cy.visit("https://www.saucedemo.com")

        cy.loginSaucedemo("standard_user","secret_sauce")

        cy.get(".inventory_list").within(()=>{

            cy.get("button")
        })

    })

    it('ROOT', () => {
        cy.visit("https://www.saucedemo.com")

        cy.loginSaucedemo("standard_user","secret_sauce")

        cy.get(".inventory_list").within(()=>{

            cy.get("button").eq(2).click().then(($boton)=>{

                //cy.wrap($boton).should('have.text',"Remove")
                cy.root().get("button").eq(2).should('have.text',"Remove")
            })
        })

    })

    it('DEBUGGER', () => {
        cy.visit("https://www.saucedemo.com")

        cy.loginSaucedemo("standard_user","secret_sauce")

        cy.get(".inventory_list button").each(($boton,index,$listado) =>{
            debugger;
        })

    })

})