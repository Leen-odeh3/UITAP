describe("Visibility Test", () => {
  it("Clicks Hide button and determines that other buttons invisible", () => {
    cy.visit("/visibility");
    cy.get("#hideButton").click();

    cy.get("#removedButton").should("not.exist");

    cy.get("#zeroWidthButton")
      .invoke("css", "width")
      .then((str) => parseInt(str))
      .should("equal", 0);

    const isOverlapped = (rect1, rect2) => {
      if (
        rect1.right < rect2.right &&
        rect1.left < rect2.left &&
        rect1.bottom < rect2.bottom &&
        rect1.top < rect2.top
      ) {
        return false;
      }
      return true;
    };
    const getRectangle = ($el) => $el[0].getBoundingClientRect();

    cy.get("#overlappedButton")
      .then(getRectangle)
      .then((button) => {
        cy.get("#hidingLayer")
          .then(getRectangle)
          .then((overlap) => {
            expect(isOverlapped(button, overlap), "button is covered by a layer?").to.be.true;
          });
      });

    cy.get("#transparentButton")
      .invoke("css", "opacity")
      .then((str) => parseInt(str))
      .should("equal", 0);

    cy.get("#invisibleButton").should("be.hidden");

    cy.get("#notdisplayedButton").should("have.css", "display", "none");
    cy.get("#offscreenButton").then((els) => {
      const buttonBox = els[0].getBoundingClientRect();
      cy.get("#offscreenButton").invoke("css", "top").then(parseInt).should("lt", -buttonBox.height);
      cy.get("#offscreenButton").invoke("css", "left").then(parseInt).should("lt", -buttonBox.width);
    });
  });
});