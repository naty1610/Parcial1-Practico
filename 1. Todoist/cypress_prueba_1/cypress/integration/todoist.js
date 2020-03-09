describe('Todoist  login', function() {
    it('Visits Todoist  and fails at login', function() {
        cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
        cy.wait(2000)
        cy.get('form').find('input[name="email"]').click().type("wrongemail@example.com")
        cy.get('form').find('input[name="password"]').click().type("1234")
        cy.get('form').contains('Log in').click()
        cy.contains('Wrong email or password.')
    })
    
})