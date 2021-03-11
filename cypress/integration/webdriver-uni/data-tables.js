/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });

    it("Calculate and assert the total age of all users", () => {
        cy.get('#thumbnail-1 td')
    });
  
  });
  