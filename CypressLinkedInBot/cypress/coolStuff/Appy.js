/// <reference types="cypress" />
const conf = require('../../configure');
const userInformation = require('../../UserInfo');
const searchKey = [];
const _ = {
  username: "#username",
  password: "#password",
  login: ".btn__primary--large",
  verification: "#captcha-internal",
  filters: '//button[text() = "All filters"]',
  easySearchOn: '//span[text()="Toggle Easy Apply filter"]/parent::label/following-sibling::input[@aria-checked="false"]',
  showResult: 'button[data-test-reusables-filters-modal-show-results-button]'
}

var Apply = {
  tryCatch: function (func1, func2) {
    if (typeof func1 === 'function' && typeof func2 === 'function') {
      return new Promise((resolve, reject) => {
        try {
          const result = func1();
          resolve(result);
        } catch (error) {
          func2(error);
          reject(error);
        }
      });
    } else {
      return Promise.reject(new Error('Try Catch Lag Gayeeeeeeeee'));
    }
  },

  applyToJob: function () {
    const jobKeys = userInformation.jobNames.split(';');
    jobKeys.map((key) => {
      const replaceKey = key.replace(' ', '%20');
      searchKey.push(replaceKey);
    });
    cy.wait(2000);
    cy.get(_.username).type(userInformation.information.username);
    cy.get(_.password).type(userInformation.information.password);
    cy.get(_.login).click().then(() => {
      cy.get(_.verification)
        .then(($ele) => {
          if ($ele.length >= 1) {
            cy.log("Looks like human verification needed!!!!!")
            cy.wait(60000)
          } else {
            cy.log('We are done!!!!!!');
          }
        })
      searchKey.map((key) => {
        cy.visit(`https://www.linkedin.com/jobs/search/?keywords=${key}&location=New%20York%2C%20United%20States`);
        cy.wait(5000);
        cy.xpath(_.filters).click();
        cy.xpath(_.easySearchOn)
          .then(($ele) => {
            if ($ele.length >= 1) {
              cy.log("Easy Apply On");
              $ele.click();
            } else {
              cy.log("It was already on...")
            }
          });
        cy.get(_.showResult).click();
        cy.wait(4000);
        cy.log('Only One page!!!!');
        cy.xpath('//ul[@class=\'scaffold-layout__list-container\']/li//a')
          .each(($ele) => {
            $ele.click()
              .then(() => {
                cy.xpath("//div[@class='jobs-search__job-details--wrapper']//div[@class='job-details-jobs-unified-top-card__content--two-pane']//span[text()='Easy Apply']")
                  .then(($ele) =>{
                    if($ele.length >= 1){
                      $ele.click();
                    }

                  })
              })
          })
      });
    })
  }
}

module.exports = Apply;
