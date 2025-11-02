describe("Dynamic ID Test", () => {
  it("clicks on button with dynamic ID", () => {
    cy.visit("/dynamicid");
    cy.get("button.btn-primary").click();
    //   cy.contains('Button with Dynamic ID').click()
  });
});