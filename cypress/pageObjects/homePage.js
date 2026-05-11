export class HomePage {
  static visit() {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
  }

  static makeAppointmentButton() {
    return cy.contains("Make Appointment");
  }
}
