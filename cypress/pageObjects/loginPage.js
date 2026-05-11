export class LoginPage {
  static usernameField() {
    return cy.get("#txt-username");
  }

  static passwordField() {
    return cy.get("#txt-password");
  }

  static loginButton() {
    return cy.get("#btn-login");
  }

  static login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.loginButton().click();
  }
}