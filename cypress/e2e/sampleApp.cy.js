describe("Sample App Test", () => {
  it("logs in and checks that status contains proper text", () => {
    cy.visit("/sampleapp");
    cy.get(".form-control[name=UserName]").type("leen odeh");
    cy.get(".form-control[name=Password]").type("pass@123");
    cy.get("#login").click();
    cy.get("div").should("contain", "Invalid username/password");
  });
});


//

// describe("Sample App Test", () => {
//   it("logs in and checks that status contains proper text", () => {
//     cy.visit("http://uitestingplayground.com/sampleapp");
//     cy.get(".form-control[name=UserName]").type("leen");
//     cy.get(".form-control[name=Password]").type("pwd");
//     cy.get("#login").click();
//     cy.get("#loginstatus").should("contain", "Welcome, leen!");
//   });
// });