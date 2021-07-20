/// <reference types="cypress" />
describe('/user/register', () => {
    const registerEndpoint = 'http://localhost:3000/api/user/register';
    it('Register ok', () => {
        cy.request('POST', registerEndpoint)
            .then((response) => {
                expect(response.body).to.contain('Register');
            })
    });

    it('Register 400 Bad Request', () => {
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
        })
    })

    it('Returns 200 OK', () => {
        let body = {
            name: 'New Tester',
            email: "tester@test.com",
            password: "testing"
        }
        cy.request('POST', registerEndpoint, body)
            .then((response) => {
                expect(response.status).to.eq(200);
            })
    });

    it('Test beef up', () => {
        let body = {
            name: 'New Tester',
            email: "tester@test.com",
            password: "testing"
        }
        cy.request('POST', registerEndpoint, body)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq('New Tester');
                expect(response.body.email).to.eq('tester@test.com');
                expect(response.body.password).to.eq('testing');
            })
    })
})
