/// <reference types="Cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".thumbnail").as("productThumbnail");

    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".thumbnail").as("productThumbnail");

    // cy.get("@productThumbnail").find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text())
    // });

    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let itemPriceTotal = 0;
      let itemPrice = $linkText.split("$");
      let i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log("Non sale price items total: " + itemPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let itemPriceTotal = 0;
        let itemPrice = $linkText.split("$");
        let i;
        for (i = 0; i < itemPrice.length; i++) {
          cy.log(itemPrice[i]);
          itemPriceTotal += Number(itemPrice[i]);
        }
        itemsTotal += itemPriceTotal;
        cy.log("Sale price items total: " + itemPriceTotal);
      })
      .then(() => {
        cy.log(`Total of all products is : ${itemsTotal}`);
        expect(itemsTotal).to.equal(663.6);
      });
  });
});
