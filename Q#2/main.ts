// ==================================== Q#2 ============================================

function simulateTask ():void{
    console.log ("Task started");
}

setTimeout(()=> {
    console.log("Task completed")
}, 1000);

simulateTask();