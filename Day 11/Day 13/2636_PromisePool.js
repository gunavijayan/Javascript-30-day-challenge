var promisePool = async function(functions,n) {
    let i =0

    //recursive function callback to evaluate the function
    async function callback() {
        if ( i === functions.length ) {
            return;         // undefined since it was out of bounds
        }
        await functions[i++]();  // using await keyword to go through all the promises and increment by itself
        await callback();        // calling callback again till it completes
    }

    const nPromises = []
    while (i < n) {
        nPromises.push(callback());
    }
    await Promise.all(nPromises)          // n Promises
};

const sleep = (t) => new Promise(res => setTimeout(res,t));
promisePool([() => sleep(500), () => sleep(400)],1)
    .then(console.log) // After 900ms