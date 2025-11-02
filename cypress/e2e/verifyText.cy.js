describe("Verify Text Test", () => {
  it("finds an element with Welcome... text.", () => {
    cy.visit("/verifytext");
    cy.get(".bg-primary").contains("Welcome");
  });
});