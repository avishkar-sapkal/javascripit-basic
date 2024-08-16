
//---------------1--------------------------------------------
// const promiseOne = new Promise(function(reslove , reject){
//     //Do an async task
//     // DB calls , network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         reslove();
//     })
// })
// promiseOne.then(function(){
//     console.log('Promised consumed');
// })

//-------------------2---------------------------------
const promise = () => {

    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            console.log("Async 2 completed");
            //reslove('Data done')
            reject('found error')
        },1000)
    }).then( (result)=> {
        console.log('asyn 2 consumed',result);
    }).catch( (error) =>{
        console.log('failed',error);
    })
}
promise();

//------------------3---------------------------
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Done!'), 1000);
// });

// promise.then(result => console.log(result));

//-------------------4---------------------------
// function fetch() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 reslove("Data Reached successfully");            // to call this reslove we use .then method i.e (line number 71)
//                 console.log("done");
//             } else {
//                 reject("Error:");
//             }
//         }, 1000)
//     });
// }

// fetch()
//     .then((d) => {
//         console.log(d);
//     })
//     .catch((err) => {
//         console.log(err);
//     })