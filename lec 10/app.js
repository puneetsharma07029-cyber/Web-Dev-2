let myPromise = new Promise((res,rej)=>{
    let data="this is my data";
    if(data){
        res(data);
    }else{
        rej("error; no data found");
    }
});
myPromise.then((d)=>{
    console.log(d);
})
.catch((err)=>{
    console.log(err)
})
// console.log(myPromise); 
// myPromise.then(()=>{},()=>{});