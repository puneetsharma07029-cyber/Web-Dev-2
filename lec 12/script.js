// function print(num){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//             res();
//         },1000)
//     })
// }

// print(1)
// .then(()=>print(2))
// .then(()=>print(3))
// .then(()=>print(4))
// .then(()=>print(5))


const pro = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise Resolved");

    },1000)
})


// async function:

// async function getData(){
//     pro.then((res)=>console.log(res))
//     console.log("After Promise");
// }

// why async ans await exist ?

// 1.To avoid promise chaining
// 2.TO EXECUTE the asynchronous code properly without confusion
// 3. to handle the promise ina better way

// Important:
// async function always return a Promise

// async function demo(){
//     return"Async intro"
// }
// console.log(demo());

// await :
// it will pause the async function until the promise returns a result.

async function getData(){
    const value = await pro;
    console.log(value);
    // logic of async function code 
    console.log("After promise");
}
getData();