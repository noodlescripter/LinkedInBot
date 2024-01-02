/// <reference types="cypress" />
const conf = require('../../configure');
const apply = require('../coolStuff/Apply')
const cookies = require(
  '../../cookies'
)

describe('LinkedIn BOT Runner', () => {
  beforeEach(() =>{
    cy.log("Ok my lord told me to me to run this program realy good");
    cy.viewport(1920, 1080);
  })

  it('Runner Engine..............', () => {
    cy.visit(conf.baseURL);
    //setting the cookie
    for (let cookieName in cookies) {
      if (Object.prototype.hasOwnProperty.call(cookies, cookieName)) {
        let cookieValue = cookies[cookieName];
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
