import ConsultaOLX from "../integration/page-objects/Consulta";

describe('PesquisaValida', ()=>{
    it('Pesquisa deve retornar produto solicitado', ()=>{
        ConsultaOLX.open()
        ConsultaOLX.inserir.type('celular{enter}')
        cy.get('h1[class="sc-1mi5vq6-2 bpRZWP sc-bdVaJa guwgRM"]').should('have.text','"celular" em São Paulo')
        ConsultaOLX.print

    })
    
})

