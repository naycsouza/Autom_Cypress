
class ConsultaOLX{
    open(){
        cy.visit('https://www.olx.com.br/');
    }   

    get inserir(){
        return cy.get('[data-testid="searchtext-input"]');
    }

    get print(){
        return cy.screenshot();
    }
}

export default new ConsultaOLX;