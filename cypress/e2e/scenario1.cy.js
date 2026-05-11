import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";

describe("Scenario 1 - Make an Appointment", () => {
  it("Books an appointment and validates values", () => {
    HomePage.visit();
    HomePage.makeAppointmentButton().click();

    LoginPage.login("John Doe", "ThisIsNotAPassword");

    AppointmentPage.facilitySelect().select("Seoul CURA Healthcare Center");
    AppointmentPage.readmissionCheckbox().check();
    AppointmentPage.medicaidRadio().check();
    AppointmentPage.setDate("30");
    AppointmentPage.commentField().type("CURA Healthcare Service");
    AppointmentPage.bookButton().click();

    // Validation
    cy.contains("Seoul CURA Healthcare Center").should("be.visible");
    cy.contains("Yes").should("be.visible");
    cy.contains("Medicaid").should("be.visible");
    cy.contains("30").should("be.visible");
    cy.contains("CURA Healthcare Service").should("be.visible");
  });
});