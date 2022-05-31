describe('verify the contact us with mutiple data', function () {

    it('verify the contact us with different set of data', function () {
        cy.fixture('contactusmultiple').then(function (data) {

            data.forEach(info => {
                cy.log(info)
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name="first_name"]').type(info.firstname)
                cy.get('input[name="last_name"]').type(info.lastname)
                cy.get('input[name="email"]').type(info.email)
                cy.get('textarea[name="message"]').type(info.message)
                cy.get('input[value="SUBMIT"]').click()
            })


        });

    })

})
