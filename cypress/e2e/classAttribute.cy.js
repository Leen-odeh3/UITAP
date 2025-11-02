describe("Class Atribute Test", () => {
  it("identifies the blue button and clicks on it", () => {
    cy.visit("/classattr");
    cy.get("button.btn-warning").click();
  });
});