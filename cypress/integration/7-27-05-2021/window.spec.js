///<reference types="cypress" />

describe('verify the window command in cypress',function(){

    it('verify the various windom command for reload page , forward , back via javascript',function(){

        cy.login('Admin','admin123')
        cy.window().then(function(win){
            win.location.reload()
        })
        //cy.contains('About').click()
        cy.window().then(function(win){
            win.history.forward()
            win.history.back()
        })

        cy.window().then(function(win){
            expect(win.location.href).to.eqls('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        })


    })

    it('verify the various windom command for reload page , forward , back via cypress',function(){

        cy.login('Admin','admin123')
        cy.reload()
        cy.go(1)
        cy.go(-1)
        cy.url().should('contain','open')

    })



})

// title ===>

// let info = {

//     firstName:"chinmay",
//     lastName:"deshpande",
//     parent:{
//         father:"Shirish Deshpande",
//         mother:"Kanchan Deshpande",
//         display:function(){
//             console.log("Hello")
//         }
//     },
//     grandParent:{
//         gfather:"manohar deshpande",
//         gmother:"malti deshpande",
//         display2:function(){
//             console.log('hello 2')
//         }
//     }

// }

// info.parent.display()










