describe('App', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    const defaultInputValue = "Quentin Tarantino";

    it('change movies list to NoItems if search result is empty', () => {
        cy.get('.js-search-input')
            .type('asdasdad')
            .type('{enter}')
            .get('.js-movie-item')
            .should('have.length', 0);
    });
    it('show movies list if search result is Quentin Tarantino', () => {
        cy.get('.js-search-input')
            .clear()
            .type(defaultInputValue)
            .type('{enter}')
            .get('.js-movie-item')
            .should('have.length', 7);
    });
    it('show one movie detailes and hide search when item from movie list is clicked', () => {
        cy.get('.js-movie-item a')
            .first()
            .click()
            .get('.js-movie-details')
            .should('have.length', 1)
            .get('.js-search-input')
            .should('have.length', 0);
    });
});