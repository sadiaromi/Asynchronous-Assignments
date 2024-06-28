// ========================================== Q#5 ===============================================

let fetchData = new Promise ((resolve, reject) =>{
    resolve("Data fetched");
})
let processData = new Promise ((resolve, reject) =>{
    resolve("Processed Data");
})
async function executeSequentially(){
    let fetch = await fetchData;
    let process = await processData;
    console.log(fetch);
    console.log(processData);
};
executeSequentially();