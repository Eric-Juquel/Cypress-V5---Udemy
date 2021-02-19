/// <reference types="Cypress" />

describe("Verify autocomplete dropdown list ", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield ")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Autocomplete-TextField");

    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list > * ")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Avacado";
        cy.log(prod);

        if (prod === productToSelect) {
          cy.wrap($el).click();

          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("g");

        cy.get("#myInputautocomplete-list > * ").each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = "Grapes";
          cy.log(prod);

          if (prod === productToSelect) {
            cy.wrap($el).click();

            cy.get("#submit-button").click();
            cy.url().should("contain", productToSelect);
          }
        });
      });
  });
});
