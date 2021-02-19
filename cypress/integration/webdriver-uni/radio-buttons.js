/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {
  it("Check specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    cy.get("#radio-buttons").find("[type = radio]").as("radioBtn");

    cy.get("@radioBtn").first().check();
    cy.get("@radioBtn").eq(1).check();
  });

  it("Validate the states of specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Dropdown-Checkboxes-RadioButtons");

    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='cabbage']").should("be.disabled");
    cy.get("[value='pumpkin']").should("be.checked");

    cy.get("[value='lettuce']").check().should("be.checked");
    cy.get("[value='pumpkin']").should("not.be.checked");
  });
});
