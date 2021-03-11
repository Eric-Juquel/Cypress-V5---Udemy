/// <reference types="Cypress" />

describe("Test mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions ")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Actions");
  });

  it("I should be able to drag & drop a draggable item", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions ")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true })
      .should("contain", "Dropped!");
  });

  it("I should be able to perform a double mouse click", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions ")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#double-click")
      .should("have.css", "background-color", "rgb(254, 196, 45)")
      .dblclick()
      .should("have.css", "background-color", "rgb(147, 203, 90)")
      .dblclick()
      .should("have.css", "background-color", "rgb(254, 196, 45)");
  });

  it.only("I should be able to hold down the left mouse button on a given element", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions ")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
    cy.get("#click-box")
      .trigger("mouseup")
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(255, 99, 71)");
      });
  });
});
