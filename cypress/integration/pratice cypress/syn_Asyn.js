
//   synchronus   &   Asynchronus



//---------------- Synchronus 
//in wich object runs by one by one according to their level


//import { Promise } from "cypress/types/bluebird";

// function div() {
//     console.log(20 - 15)
// }

// function mult() {
//     console.log(5 * 4)
// }

// mult()
// div()

// call = function () {
//     console.log("Hello nityanand")
// }

// call2 = function () {
//     console.log("good morning nityanand")
// }

// call()
// call2()

//---------------- Asynchronus ------------------
console.log("---------------- Asynchronus ------------------")


function div() {
    setTimeout(function () {
        console.log(45 / 5)
    }, 2000)
}

function div2() {
    console.log(50 / 5)
}

// div()
// div2()

//function---->id
//id------>user info
//user info---->email
//Asyn---->sync

// function id() {
//     setTimeout(function () {
//         console.log(" ID:-G236505")
//         setTimeout(function () {
//             console.log(" user info :- Nityanand Bhosale")
//             setTimeout(function () {
//                 console.log("email :- bhosalenityanand5@gmail.com")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// id()

//--- This is  called the call back hell of the function
// to resolve the problem of call back hell in cypress introduced the promises

//------------------ Promises ---------------
console.log("-------------------- Promises ----------------------")

//in promises
//State -----pending(resolve)(reject)functions

//------------- program 1 ------------------

// let prom = new Promise(function (resolve, reject) {
//     let A = 20
//     let B = 20
//     if (A == B) {
//         resolve("hello")
//     }
//     else {
//         reject("Bye")
//     }
// })


// prom.then(function (str) {
//     console.log(str)
// },
//     function (str) {
//         console.log(str)
//     })

// //------------------ program 2 ----------------------

// let even =new Promise(function(resolve,reject){
//     let num =[2,4,6,9]
//     let num2=2
//     let totl=num.reduce(function(acc,el){
//         return acc + el
//     },0)
//     if(totl % 2==0){
//         resolve("it is divisible by two")
//     }
//     else{
//         reject("it is not divisible by two")
//     }
// })

// even.then(function(str){
//     console.log(str)
// })

//     .catch(function(str){
//         console.log(str)
//     })

//------------- program 3 -------------

// let examp = new Promise(function(resolve,reject){
//     let pass = "G236505"
//     let enter ="G236505"

//     if(pass==enter){
//         resolve("correct")
//     }
//     else{
//         reject("Incorrect passward")
//     }
// })

// function enter(pass){
//     return new Promise(function(resolve,reject){
//         if(pass=="correct"){
//             resolve('bhosalenityanand5@gmail.com')
//         }
//         else{
//             reject("Invalid request")
//         }
//     })
// }

// examp.then(function(pass){
//     enter(pass)
//     .then(function(email){
//         return email
//     }).then(function(email){
//         console.log(email)
//     })
//  }).catch(function(str){
//     console.log(str)
// })

//---------------- program four-------------

let myexmp =new Promise(function(resolve,reject){
    let mark = [70,50,65,35,60]
    let total =mark.reduce(function(acc,el){
        return acc + el 
    },0)/500 *100

    if(total >35){
        resolve("pass")
    }
    else{
        reject("fail")
    }
})

function student(perct){
    return new Promise(function(resolve,reject){
        if(perct=="pass"){
            resolve(`congratulation you are pass and your percentages are ${this.total}`)
        }
        else{
            reject("you are not qualify the cutt off marks")
        }
    })
}

myexmp.then(function(perct){
    student(perct)
    .then(function(rusult){
        return rusult
    }).then(function(result){
        console.log(result)
    })
}).catch(function(str){
    console.log(str)
})


// let mymark = [70,75,85,60,55]
// let total = mymark.reduce(function(acc,el){
//     return acc + el
// },0)/500 * 100

// console.log(total)