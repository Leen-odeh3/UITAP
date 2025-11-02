describe("Mouse Over Test", () => {
  it("clicks on link 2 times and checks number of clicks on label", () => {
    cy.visit("/mouseover");
    cy.get("[onmouseenter]").contains("Click me").click();
    cy.get("[onmouseenter]").contains("Click me").click();
    cy.get("#clickCount").should("contain", "2");
  });
});