import { isTSAnyKeyword } from "@babel/types";

describe('BMI Converter', () => {
  before(function() {
    cy.visit('http://localhost:3000');
  });

  beforeEach(function() {
    cy.reload();
  });

  it ('should display "BMI Converter" text on page', () => {
    cy.contains('BMI Converter');
  });
})