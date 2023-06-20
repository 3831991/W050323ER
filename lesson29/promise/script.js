new Promise((resolve, reject) => {
    const isValid = true;

    if (isValid) {
        setTimeout(() => {
            resolve("valid");
        }, 1500);
    } else {
        setTimeout(() => {
            reject("invalid");
        }, 2000);
    }
})
.then(value => {
    console.log(value);
})
.catch(err => {
    console.log(err);
})
.finally(() => console.log("done"));
