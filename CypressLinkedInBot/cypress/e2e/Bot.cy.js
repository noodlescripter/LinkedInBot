/// <reference types="cypress" />
const conf = require('../../configure');
const apply = require('../coolStuff/Appy')
const cookies = require(
  '../../cookies'
)


describe('LinkedIn bot', () => {
  beforeEach(() =>{
    cy.log("Ok my lord told me to me to run this program realy good");
    cy.viewport(1920, 1080);
  })

  it('should work', () => {
    cy.visit('https://www.linkedin.com');
    //setting the cookie
    for (var cookieName in cookies) {
      if (Object.prototype.hasOwnProperty.call(cookies, cookieName)) {
        var cookieValue = cookies[cookieName];
        cy.setCookie(cookieName, cookieValue);
        console.log(`Cookie Name: ${cookieName}, Cookie Value: ${cookieValue}`);
      }
    }
    cy.visit(conf.baseURL)
      .then(() =>{
        apply.applyToJob();
      });
  });
})
