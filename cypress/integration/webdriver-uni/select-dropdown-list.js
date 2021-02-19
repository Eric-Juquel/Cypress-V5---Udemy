/// <reference types="Cypress" />

describe("Iteract with dropdown list via webdriveruni", () => {
  it("Select specific values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    cy.get("#dropdowm-menu-1").select("c#"); // select by value attr
    cy.get("#dropdowm-menu-2").select("testng").contains("TestNG");
    cy.get("#dropdowm-menu-3").select("jquery");
    cy.get("#dropdowm-menu-3")
      .select("JavaScript")
      .should("have.value", "javascript"); // select by text
  });
});
