import ConsultaOLX from "../integration/page-objects/Consulta";

describe('PesquisaInvalida', ()=>{
    it('Pesquisa deve retornar nenhum resultado', ()=>{
        ConsultaOLX.open()
        ConsultaOLX.inserir.type('asgrhs{enter}')
        cy.get('h3[class="sc-145t6x-0 cxrWpf"]').should('have.text','Ops! Nenhum anúncio foi encontrado.')
        ConsultaOLX.print
    })

})