/// <reference types="cypress" />
const conf = require('../../configure');
const apply = require('../coolStuff/Appy')
describe('LinkedIn bot', () => {

    it('test_1', () => {
        cy.visit(conf.baseURL)
        .then(() =>{
            apply.applyToJob();
        });
    })
})
