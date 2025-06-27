/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    function call(resolve,reject) {
        setTimeout(resolve,millis);
    }
    return new Promise(call);
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */