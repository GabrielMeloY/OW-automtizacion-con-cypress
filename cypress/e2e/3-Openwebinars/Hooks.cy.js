describe('Pruebas OPENWEBINARS HOOKS', () => {

/* ORDEN DE EJECUCIÓN

    Before
        BeforeEach (GLOBAL)
            Primer Test
        AfterEach (GLOBAL)

        BeforeEach (GLOBAL)
            Segundo Test
        AfterEach (GLOBAL)

        BeforeEach (GLOBAL)        
            BeforeEach (CONTEXTO)
                Primer Test CONTEXTO
            AfterEach (CONTEXTO)
        AfterEach (GLOBAL)
        
        BeforeEach (GLOBAL)        
            BeforeEach (CONTEXTO)
                Segundo Test CONTEXTO
            AfterEach (CONTEXTO)
        AfterEach (GLOBAL)
    After
*/


    before(()=>{
        console.log("SOY BEFORE ALL")
    })

    after(()=>{
        console.log("SOY AFTER ALL")
    })

    beforeEach(()=>{
        console.log("   SOY BEFORE EACH GLOBAL")
    })

    afterEach(()=>{
        console.log("   SOY AFTER EACH GLOBAL")
    })

    it('Primer test', () => {
        console.log("       SOY EL PRIMER TEST GLOBAL")
    })

    it('Segundo test', () => {
        console.log("       SOY EL SEGUNDO TEST GLOBAL")
    })

    context('Pruebas OPENWEBINARS CONTEXTO', () => {

        beforeEach(()=>{
            console.log("       SOY BEFORE EACH CONTEXTO")
        })
    
        afterEach(()=>{
            console.log("       SOY AFTER EACH CONTEXTO")
        })
    
        it('Primer test CONTEXTO', () => {
            console.log("               SOY EL PRIMER TEST CONTEXTO")
        })
    
        it('Segundo test CONTEXTO', () => {
            console.log("               SOY EL SEGUNDO TEST CONTEXTO")
        })

    })


})