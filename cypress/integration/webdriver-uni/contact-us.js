/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successfull submition via contactUs form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    // cy.get("#contact-us").click({force:true});
    cy.get('[name="first_name"]').type("John");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("john@example.com");
    cy.get("textarea.feedback-input").type("Some comment");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successfull submitionvia contactUs form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get('[name="first_name"]').type("John");
    // cy.get('[name="last_name"]').type("Doe")
    cy.get('[name="email"]').type("john@example.com");
    cy.get("textarea.feedback-input").type("Some comment");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });

  it("Should not be able to submit a successfull submition via contactUs form as email should be valid", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("John");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("john@example");
    cy.get("textarea.feedback-input").type("Some comment");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: Invalid email address");
  });

  it("Should be able to reset the form  ", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us").click({force:true});
    cy.get('[name="first_name"]').type("John");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("john@example.com");
    cy.get("textarea.feedback-input").type("Some comment");
    cy.get('[type="reset"]').click();
    cy.get('[name="first_name"]').should("have.text", "");
    cy.get('[name="last_name"]').should("have.text", "");
    cy.get('[name="email"]').should("have.text", "");
    cy.get("textarea.feedback-input").should("have.text", "");
  });
});
