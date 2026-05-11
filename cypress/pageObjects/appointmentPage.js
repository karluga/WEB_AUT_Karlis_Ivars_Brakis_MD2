export class AppointmentPage {
  static facilitySelect() {
    return cy.get("#combo_facility");
  }

  static readmissionCheckbox() {
    return cy.get("#chk_hospotal_readmission");
  }

  static medicaidRadio() {
    return cy.get("#radio_program_medicaid");
  }

  static dateField() {
    return cy.get("#txt_visit_date");
  }

  static commentField() {
    return cy.get("#txt_comment");
  }

  static bookButton() {
    return cy.get("#btn-book-appointment");
  }

  static setDate(day) {
    this.dateField().click();
    cy.contains(".day", day).click();
  }
}