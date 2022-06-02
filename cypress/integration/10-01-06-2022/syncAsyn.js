// // synchronus 


// // function add(){
// //     console.log(9+9)
// // }

// // function add2(){
// //     console.log(7+7)
// // }

// // add2()
// // add()

// // Asyn

// // API ----> 

// // Asynchrouns

// // function add3(){
// //     setTimeout(function(){
// //         console.log(9+9)
// //     },2000)
// // }

// // function add4(){
// //     console.log(16 + 16)
// // }

// // add3()
// // add4()

// // Asyn ===> asyn 


// // function ---- id 
// // id ----- user info 
// // userinfo  ----- email
// // call Async =====> sync

// // function add6() {
// //     setTimeout(function () {
// //         console.log('Getting ID')
// //         setTimeout(function () {
// //             console.log('Getting user Info')
// //             setTimeout(function () {
// //                 console.log('Getting email')
// //             }, 2000)
// //         }, 3000)

// //     }, 200)
// // }
// // add6()

// // This is called as call back hell

// // Promises 

// // state --- pending (resolve) (reject)  functions 


// // let pro = new Promise(function (resolve, reject) {
// //     let a = 10
// //     let b = 10
// //     if (a == b) {
// //         resolve("hello")
// //     }
// //     else {
// //         reject('Bye')
// //     }
// // })

// // // consuming pro

// // pro.then(function (str) {
// //     console.log(str)
// // }, function (str) {
// //     console.log(str)

// // })



// let pro2 = new Promise(function (resolve, reject) {

//     let a = 10
//     let b = 100

//     if (a == b) {
//         resolve([1, 3, 4, 5])
//     }
//     else {
//         reject([12, 33, 44])
//     }


// })

// pro2.then(function (a) {
//     console.log(a[0])
// })
//     .catch(function (b) {
//         console.log(b[0])
//     })



// let pro3 = new Promise(function (resolve, reject) {
//     let a = 100
//     let b = 100
//     if (a == b) {
//         resolve(1)
//     }
//     else {
//         reject('Cretation fail')
//     }

// })


// function Getinfo(id) {
//     return new Promise(function (resolve, reject) {
//         if (id == 1) {
//             resolve('chinmaydespande010@gmail.com')
//         }
//         else {
//             reject('unable to get ifo ')
//         }

//     })
// }

// pro3.then(function (id) {
//     Getinfo(id)
//     .then(function (email) {
//         return email
//     }).then(function (email) {
//         console.log(email)
//     })
// }).catch(function(str){
//     console.log(str)
// })


// let aa = ["1",2,3,4,'four',0]

// let r = aa.filter(function(el){
//     return Number(el)  || el == 0
// })

// console.log(r)


// function countV(word){
//     word = word.toLowerCase()
//     let count = 0

//     for(let i = 0 ; i < word.length ; i++){
//         if(word[i] == "a" ||  word[i] == "e" ||  word[i] == "i" || word[i] == "o" || word[i] == "e"){
//             count = count + 1
//         }

//     }

//     return count 
// }

// countV("chinmay")

// Promise

//  var and let 

// get element 


// fixture

// [0,0,1,-1,1,0,1,-1]
// [-1,-1,0,0,1,1,1]  // Array


// sync and async 


// program one
function two() {
    console.log('two')
}

function one() {
    console.log('one')
}

one()
two()


// asyn 


// function onee(){
//     setTimeout(function(){
//         console.log('I will be running after 2 seconds')
//     },2000)

// }

// function twoo(){
//     console.log('I will run first')
// }

// onee()
// twoo()

// multiple asyn call 

// function info() {
//     setTimeout(function () {
//         console.log('user will be created')
//     }, 3000)

//     setTimeout(function () {
//         console.log('getting id')
//     }, 2000)

//     setTimeout(function () {
//         console.log('getting user info')
//     }, 1000)

// }
// info()

// usercreate =====> id =======> userinfo


// every asyn call is executed synchronously
// call back

// function info2() {
//     setTimeout(function () {
//         console.log('user will be created')
//         setTimeout(function () {
//             console.log('getting id')
//             setTimeout(function () {
//                 console.log('getting user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)

// }
// info2()

// every cypress command is async in nature 
// execution sync 

// es6 promises

let pro = new Promise(function (resolve, reject) {
    let a = b = 10
    if (a == b) {
        resolve(['user will be created', 1])
    }
    else {
        reject('user not created')
    }
})

function getId(id) {
    return pro2 = new Promise(function (resolve, reject) {
        if (id == 1) {
            resolve('getting id')
        }
        else {
            reject('unable to get id')
        }
    })
}

pro.then(function (arr) {
    console.log(arr[0])
    return arr[1]
})
    .then(function (id) {
        getId(id)
        .then(function (str) {
            console.log(str)
        }).then(function () {
            console.log('getting user info')
        })
    }).catch(function(str){
        console.log(str)
    })



