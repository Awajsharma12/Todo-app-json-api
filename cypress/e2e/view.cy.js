describe('TODO View', () => {
    it('displays TODO correctly', () => {
      // Mock data for testing
      const todoData = {
        id: 1,
        task: 'Eat banana'
      }
  
      // Visit the page where the component is rendered
      cy.visit('http://localhost:5173/view/136d')
  
      // Stub the todoData object to simulate its presence
      cy.window().then((window) => {
        window.todoData = todoData
      })
  
      // Assert that the table headers are displayed
      cy.contains('th', 'ID').should('exist')
      cy.contains('th', 'Todo').should('exist')
  
      // Assert that the table body contains the correct data
      cy.contains('td', todoData.id).should('exist')
      cy.contains('td', todoData.task).should('exist')
  
      // Assert that the "Back to Home" button exists and is functional
      cy.get('.bg-emerald-700').should('exist')
      cy.contains('.bg-emerald-700', 'Back to Home').click()
  
      // Assert that navigation to the home page is successful
      cy.url("").should('include', 'http://localhost:5173/')
    })
  
    // Add more tests as needed
  })
  