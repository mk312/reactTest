describe('Search', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    let defaultInputValue = null;

    it('update search value in the input', () => {
        const newInputValue = "asd";
        cy.get('.js-search-input')
            .invoke('val')
            .then(text => {
                defaultInputValue = text;
            });
        cy.get('.js-search-input')
            .type(newInputValue)
            .should('have.value', defaultInputValue ? newInputValue + defaultInputValue : newInputValue);
    })
});