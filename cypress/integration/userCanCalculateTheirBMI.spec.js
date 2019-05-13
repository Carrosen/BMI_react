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

  describe('Metric method', () => {
    beforeEach(() => {
      cy.get('select[id="method"]').select('metric')
      cy.get('input[name="weight"]').type('95')
      cy.get('input[name="height"]').type('186')
    })

    it('displays assesment', () => {
      cy.contains('You are Overweight')
    })

    it('displays BMI value', () => {
      cy.contains('BMI of 27.46')
    })
  })

  describe('Imperial method', () => {
    beforeEach(() => {
      cy.get('select[id="method"]').select('imperial')
      cy.get('input[name="weight-in-lbs"]').type('200')
      cy.get('input[name="height-in-in"]').type('73')
    })

    // added in lbs and in in in the above

    it('displays assesment', () => {
      cy.contains('You are Overweight')
    })

    it('displays BMI value', () => {
      cy.contains('BMI of 26.38')
    })
  })
});