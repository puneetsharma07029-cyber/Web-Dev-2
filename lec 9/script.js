document.getElementById("myInput").addEventListener("change",(event)=>{
    console.log(event.target.value);
    document.getElementById("output").textContent="change detected!";
})