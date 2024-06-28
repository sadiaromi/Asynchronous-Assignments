// ========================================== Q#3 =======================================

function fetchData (){
    Promise <string>
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("Data fetched successfully!")
        }, 1000);
    });
}
fetchData().then((result)=>{
    console.log(result);
})


