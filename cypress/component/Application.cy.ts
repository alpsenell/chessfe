import App from '../../src/App.vue'

describe('Application.cy.ts', () => {
  it('should show the UI', () => {
    cy.mount(App)
    cy.get('.chess-board').should('exist')
    cy.get('.sidebar').should('exist')
  })

  it('should render correct classes and texts on click of the square', () => {
    cy.mount(App)
    cy.get('.chess-square:eq(0)').click()
    cy.get('.chess-square:eq(0).chess-square--highlighted').should('exist')
    cy.get('.sidebar__movement').should('contain', 'h1')
    cy.get('.sidebar__reset').should('exist')

    cy.get('.chess-square:eq(0)').click()
    cy.get('.chess-square:eq(0).chess-square--highlighted').should('not.exist')
    cy.get('.sidebar__movement').should('not.exist')
    cy.get('.sidebar__reset').should('not.exist')
  })
})
