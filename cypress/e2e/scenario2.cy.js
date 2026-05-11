import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { SidebarPage } from "../pageObjects/sidebarPage";
import { HistoryPage } from "../pageObjects/historyPage";

describe("Scenario 2 - Appointment history empty", () => {
  it("Validates empty history", () => {
    HomePage.visit();
    HomePage.makeAppointmentButton().click();

    LoginPage.login("John Doe", "ThisIsNotAPassword");

    SidebarPage.menuButton().click();
    SidebarPage.sidebar().should("have.class", "active");

    SidebarPage.historyLink().click();

    HistoryPage.noAppointmentMessage().should("be.visible");
  });
});