/// <reference types="cypress" />

it('Register ok', () => {
    cy.request('POST', 'http://localhost:3000/api/user/register')
        .then((response) => {
            expect(response.body).to.contain('Register');
        }) 
});

it('Register 200 OK', () => {
    cy.request('POST', 'http://localhost:3000/api/user/register')
        .then((response) => {
            expect(response.status).to.eq(200);
        }) 
})