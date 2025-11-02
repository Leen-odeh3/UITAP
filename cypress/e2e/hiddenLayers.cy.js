describe("Hidden Layers Test", () => {
  it("duplicates the button click", () => {
    cy.visit("/hiddenlayers");
    cy.get("#greenButton").click();
    // cy.get("#blueButton").click();
  });
});