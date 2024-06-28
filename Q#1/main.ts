// ================================= Q#1 ====================================

async function fetchingGreeting (): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve ("Hello Everyone!");
        }, 2000);
    });
};
fetchingGreeting().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})