"use strict";
function fetchData() {
    Promise;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then((result) => {
    console.log(result);
});
