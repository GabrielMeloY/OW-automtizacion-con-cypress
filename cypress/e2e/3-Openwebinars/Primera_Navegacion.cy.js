describe('Pruebas OPENWEBINARS NAVEGACION', () => {

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com")
    })

    context("Usuario correcto", ()=> {
        
        beforeEach(()=>{
            cy.loginSaucedemo("standard_user","secret_sauce")
        })
        
        it('PRIMER TEST DE LOGIN CORRECTO', () => {
            cy.get(".inventory_list button").each(($el,index,$list)=>{
                cy.wrap($el).click()
            })
        })
    
    
        it('SEGUNDO TEST DE LOGIN CORRECTO', () => {
            cy.get(".inventory_list").find("button").eq(1).click()
        })    
    })

    context("Usuario Incorrecto", ()=> {
        
        beforeEach(()=>{
            cy.loginSaucedemo("locked_out_user","secret_sauce")
        })
        
        it('PRIMER TEST DE LOGIN INCORRECTO', () => {
            cy.log("PRIMER TEST DE LOGIN INCORRECTO")
        })
    
        it('SEGUNDO TEST DE LOGIN INCORRECTO', () => {
            cy.log("SEGUNDO TEST DE LOGIN INCORRECTO")
        })    
    })
})