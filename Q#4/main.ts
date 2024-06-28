// ===================================== Q#4 ====================================

async function fetchWithError(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5){
                resolve("Data Fetched Successfully!");
            }else{
                reject("Data fetch failed");
            }
        }, 1000);
    });
}
fetchWithError().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});