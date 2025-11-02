describe("Non-Breaking Space Test", () => {
  it("scrolls to the input 'name' and enters text in it", () => {
    cy.visit("/overlapped");
    cy.get("#name").scrollIntoView().type("LazyBlob").should("have.value", "LazyBlob");
  });
});
