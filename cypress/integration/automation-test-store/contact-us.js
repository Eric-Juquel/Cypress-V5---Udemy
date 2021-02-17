/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successfull submition via contactUs form", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href$='contact']")
      .click()
      .then((linkText) => {
        cy.log("Clicked on link using text: " + linkText.text());
      });
    // cy.xpath("//a[contains(@href,'contact')]").click()
    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("john@example.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("Some Enquiry");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test has completed");
  });

  it("Click on Contact Us button and log the button text", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".info_links_footer li")
      .contains("Contact Us")
      .click()
      .then((linkText) => {
        cy.log("Clicked on link using text: " + linkText.text());
      });
  });
});
