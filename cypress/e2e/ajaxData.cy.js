describe("AJAX Data Test", () => {
  it("Presses the button and waits AJAX request to process, then clicks on text", () => {
    cy.visit("/ajax");
    cy.intercept("GET", "/ajaxdata").as("label");
    cy.get("#ajaxButton").click().wait("@label");
    cy.get(".bg-success").contains("Data loaded with AJAX get request.").click();
  });
});