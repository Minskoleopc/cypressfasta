import data from '../../fixtures/contactusmultiple.json'

describe('Verify the contact us form with multiple testcase', function () {
    data.forEach(function (info, index) {
        it(`verify the contact us with data set - ${index + 1}`, function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstname)
            cy.get('input[name="last_name"]').type(info.lastname)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.message)
            cy.get('input[value="SUBMIT"]').click()
        })

    })

})



