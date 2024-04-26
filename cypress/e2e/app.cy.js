// describe('Home Page ', () => {
//   it('Opening Page', () => {
//     cy.visit('http://localhost:5173/')
//   })
// })

describe('Vue Router View Test', () => {
  it('renders the Vue Router View component', () => {
    // Visit the page where the component is rendered
    cy.visit('http://localhost:5173/')

    // Assert that the Vue Router View component exists
    cy.get('.bg-green-600').should('exist')
    cy.get('h1').should('exist')
    
  })

  // Add more tests as needed
})
