describe('verify the pal api for genrate token', function () {


    it('verify the token api', function () {

        let token ;
        cy.request({
            method: "POST",
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers: {
                Authorization: 'Basic QVRYMkdFcFA2MUdnYh6dlQ4cXo0NE51TUZnUncxLTlnU04yN2h6ZktHOWNuN3h0dmplM3BhR0dBWEZVeFFhbC1yY1F1RUFiazk6RUZsUTVIZUpqZndFYmZ3OFZUSGJaM3ZKTkdUQmdIaFcxaml1RU14d2RqX1BtcUpIZ3c1SGRCWm5MNXV2ZFB6Yi0tZHo2NmlSZ2RCU1VCb3E=',
                content_Type: 'application/x-www-form-urlencoded',
            },
            body: {
                grant_type: 'client_credentials'
            },
            form: true
        }).then(function (response) {
            expect(response.status).to.equal(200)
            token = response.body.access_token
            
        }).then(function(){
            //cy.log(token)
            cy.request({

                method:"GET",
                url:"https://api-m.sandbox.paypal.com/v1/invoicing/invoices?page=3&page_size=4&total_count_required=true",
                headers:{
                    cotent_type:"application/json",
                    Authorization:`Bearer ${token}`
                }

            }).then(function(response){
                //cy.log(response)
                expect(response.status).to.eql(200)
            })
        })


    })



})