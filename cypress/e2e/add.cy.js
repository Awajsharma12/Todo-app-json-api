describe('Add TODO Form Test', () => {
    it('successfully adds a TODO', () => {
      // Visit the page where the component is rendered
      cy.visit('http://localhost:5173/add')
  
      // Fill the input field with a task
      cy.get('#task').type('Test Task')
  
      // Submit the form
      cy.get('#AddTodoForm').submit()
  
      // Assert that the task has been added
     
    })
  
    // Add more tests as needed
  })
  