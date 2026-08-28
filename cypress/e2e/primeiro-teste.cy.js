describe("Praticando Cypress", () => {
  it("abre o site do cypress", () => {
    cy.visit("https://example.cypress.io");
  });

  it("acessa a página de actions", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
  });

  it("preenche o campo de email", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-email").type("raquel@email.com");
    cy.get(".action-email").should("have.value", "raquel@email.com");
  });
});
