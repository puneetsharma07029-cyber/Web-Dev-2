let pro = new Promise((resolve,reject)=>{
    let proposal="false"
    if(proposal==="true"){
        resolve()
    }
    else{
        reject()
    }
})
pro.then(() => {})
