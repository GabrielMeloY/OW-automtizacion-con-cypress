describe('Pruebas OPENWEBINARS FORMULARIOS', () => {

    it('COMBOBOX', () => {
        
        cy.visit("./index_completo.html")

        cy.get("#combobox1").select(3)
        .invoke('prop',"selectedIndex")
        .then($valor =>{
            cy.get("#combobox1").find('option').eq($valor).should("have.text","Carne")
        })

        cy.get("#combobox2").select([1,3])
        .invoke('val')
        .should('deep.equal',['pera','granada'])

        cy.get("#enviaComboboxes").click().then(()=>{
            cy.get("#resultado")
            .should('contain.text',"carne")
            .and('contain.text',"pera")
            .and('contain.text','granada')
        })

    })  


    it('CHECKBOX Y RADIOBUTTON', () => {
        
        cy.visit("./index_completo.html")
        
        cy.get("input[name='bebida'][value='cafe']").check()

        cy.get("#enviaRadiobutton").click().then(()=>{
            cy.get("#resultado")
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
            cy.get("#resultado")
            .should('contain.text',"verdura")
            .and('contain.text','carne')
        })

    })  

    it('CALENDARIO/DATEPICKER', () => {
        
        cy.visit("./index_completo.html")
      
        cy.get("input[name='fecha']").type("2021-10-30T14:34")
        .invoke('val').then($fecha =>{
            expect($fecha).to.equal("2021-10-30T14:34")
        })
    })


    it(("ALERT SIMPLE"), ()=>{
        cy.visit("./index_completo.html");
        cy.get("#buttonAlertSimple").click();       
        cy.on("window:alert", (str) => {
            return true;
        }); 
    })


    it(("ALERT CONFIRM"), ()=>{
        cy.visit("./index_completo.html");
        cy.get("#buttonAlertConfirm").click();       
        cy.on("window:confirm", (str) => {
            return false;
        }); 
     })


    //NO OLVIDAR ACTIVAR EL TIMEOUT PARA QUE APAREZCA EL PROMPT EN INDEX_COMPLETO.HTML
    it('ALERTS PROMPT', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        })

        cy.visit("./index_completo.html")
      
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns("Hola a todos!")
        })
    })

})