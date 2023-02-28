// in thid we will se the how front end developer call the api 
//and represent the data in html format

//*********** Steps ********************

//first end ===> request
//data====>json()
//json()=====>object
//object iterate ====>html

 let div = document.querySelector('#container')
 let buttonA = document.querySelector('#button')


 function renderHTML(data){
     console.log(data)
      //id email first_name , last_name , avatar
     let html =`<div>
    <h1>firstname: ${data.first_name}</h1>
    <h2>lastname: ${data.last_name}</h2>
    <p> id: ${data.id}<p>
    <p>email: ${data.email}<p>
    <img src ="${data.avatar}">
     </div>`
     container.insertAdjacentHTML('beforeEnd',html)
 }





//XHR
function getData(){
    fetch('https://reqres.in/api/users?page=2')
    .then(function(response){
        // cy.log(response)
        return response.json()
 }).then(function(data){
    // console.log(data.data[0].first_name)
    data.data.forEach(element => {
        renderHTML(element)
    });
 })
}

let reqs = new XMLHttpRequest()

reqs.open('GET','https://reqres.in/api/users?page=2')
reqs.send()








// getData()

// if you have get this data on button click then

buttonA.addEventListener('click',function(){
    getData()
})