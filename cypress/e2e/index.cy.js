describe("Load", () => {
	it("should navigate to home page and load header content", () => {
		cy.visit("/");
		cy.get("h1").should("contain", "Heyo, I'm Noël Cserépy.");
		cy.get("h2").should("contain", "I build stuff for the web.");
		cy.get("nav").should("be.visible");
		cy.get("svg").should("be.visible");
		cy.findByText("Menu").click();
		cy.findByRole("menu").should("be.visible");
		cy.findByRole("menu").children("ul").children().should("have.length", 3);
	});
});
