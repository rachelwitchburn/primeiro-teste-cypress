describe("Teste de actions", () => {
  it("Deve preencher o email", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-email").type("teste@email.com");
    cy.get(".action-email").should("have-value", "teste@email.com");
  });
});
