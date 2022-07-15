
// -----------------------------------------------------------------

// -----------------------------------------------------------------

// -----------------------------------------------------------------

a = 2
dsadsa = 23123

// -----------------------------------------------------------------

// showUserAvatar = async (userLogin)  => {
//     let gitHubResponse = await fetch('https://api.github.com/users/' + userLogin)
//     let gitHubUser = await gitHubResponse.json()
//
//     let img = document.createElement('img')
//     img.src = gitHubUser.avatar_url
//     document.body.append(img)
//
//     await new Promise(resolve => setTimeout(resolve, 3000))
//     img.remove()
// }
//
//
// showUserAvatar('venbergp')




// -----------------------------------------------------------------
// f2 = async () => {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ready')
//         }, 1000)
//     })
//
//
//     let result = await promise
//     alert(result)
// }
//
// f2()


// -----------------------------------------------------------------
// f = async () => {
//     return 1
// }
//
// f().then(alert)

// -----------------------------------------------------------------
// Promise.resolve()
//     .then(() => alert("1"))
//     .then(() => alert("2"))
// alert(3)

// -----------------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//
//     console.log('Началась загрузка')
//     setTimeout(()=> {
//         let a = true
//         if (a) {
//             console.log("загрузка прошла успешно")
//             resolve('Nice')
//         } else {
//             console.log("загрузка прошла не успешно")
//             reject('whoops')
//         }
//     }, 1000)
//
// })


// -----------------------------------------------------------------
// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(1), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(1), 2000))
// ]).then(alert)




// -----------------------------------------------------------------
// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(2), 4000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
// ]).then(alert)





// -----------------------------------------------------------------
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ];
//
// let requests = urls.map(url => fetch(url))
//
// Promise.all(requests)
//     .then(respones => {
//         respones.forEach(response => alert(`${response.url}: ${response.status}`))
//    })



// -----------------------------------------------------------------
// function delay(ms) {
//     promise = new Promise(resolve => setTimeout(resolve, ms))
//     return promise
// }
//



// -----------------------------------------------------------------
// fetch('https://api.github.com/users/venbergp')
//     .then(response => {return response.text()})
//     .then(text => {alert(text)})
//     .catch(err => {console.log(err)})



// -----------------------------------------------------------------
// new Promise(function(resolve, reject) {
//
//     setTimeout(() => resolve(1), 1000);
//
// }).then(function(result) {
//
//     alert(result); // 1
//
//     return new Promise((resolve, reject) => { // (*)
//         setTimeout(() => resolve(result * 2), 1000);
//     });
//
// }).then(function(result) { // (**)
//
//     alert(result); // 2
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
//
// }).then(function(result) {
//
//     alert(result); // 4
//
// });



// -----------------------------------------------------------------
// new Promise((resolve, reject) => {
//
//     setTimeout(() => resolve(3), 2000)
//
// }).then((result) => {
//     alert(result)
//     return new Promise((resolve, reject) => {
//         result *= 2
//         setTimeout(() => resolve(result), 2000)
//     })
// }).then((result) => {
//     alert(result)
//     return new Promise((resolve, reject) => {
//         result *= 2
//         setTimeout(() => {resolve(result)}, 2000)
//     })
//
// }).then((result) => {
//     alert(result)
// })


// -----------------------------------------------------------------
// promise.then(value => alert(1 + value))
// promise.then(value => alert(2 + value))




// -----------------------------------------------------------------
// delay(3000).then(() => {
//     alert("Прошло 3 секунды")
// }).then(() => { alert("Прошло еще 33 секунды")})


/*
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function(result) {

    alert(result); // 4
    return result * 2;

});

*/