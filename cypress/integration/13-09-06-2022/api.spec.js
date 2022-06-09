///<reference types="cypress" />

describe('verify the reqres api',()=>{

    it('verify the GET API',function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eqls(200)
        })

    })
    it('verify the POST api',function(){

        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }

        }).then(function(response){
            expect(response.status).to.eql(201)
        })



    })

    it('verify the PUT api ',function(){

        cy.request({
            method:'PUT',
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function({status,duration}){
            expect(status).to.eq(200)
            expect(duration).to.be.lessThan(200)
        })

    })


    it('verify the PUT api ',function(){
        cy.request({
            method:'PUT',
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function({body:{name}}){
           expect(name).to.eq('morpheus')
        })
    })

    it('verify the DELET api',function(){

        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2"
        }).then(function({status}){
            expect(status).to.eqls(204)
        })

    })

    it.only('verify the api with authentication create user POST',function(){

       
        cy.request({
            method:"POST",
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:"Bearer cd2ac6be51d3e141feb4928d0bc7da80d1a1ef57ecdd74bf517"
            },
            body:{
                "name":"Tenali Ramakrishna", 
                "gender":"male", 
                "email":`${Math.random()*12}tenali.ramakrishna@15ce.com`,
                 "status":"active"
                }

        }).then(function(response){
            expect(response.status).to.eql(201)
        })


    })

    it.only('List users',function(){





    })
    it.only('Update user',function(){

       

    })

    it.only('Delete user',function(){

        

    })

})


// Tomorrow PAY pal 
// Graph ql




// ----->


// let obj = {


//     info:"new",
//     skills:[2,3,4]

// }

// let {info,skills} = obj

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenali.ramakrishna@15ce.com", "status":"active"}'