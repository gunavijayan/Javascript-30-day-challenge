var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    // creating an if condition to check if the key is already exists
    const alreadyExists = this.cache.get(key);
    if(alreadyExists) {
        // clear the time duration to avoid the subsequent time duration
        clearTimeout(alreadyExists.timeoutID); // clearTimeout is a predefined
    }
    const timeoutID = setTimeout(() => {
        // remove the Key
        this.cache.delete(key);
    }, duration);
    // this.cache.set(key,value); changing the value into an object to get the timeoutID of the multiple keys
    this.cache.set(key, {
        'value': value,
        timeoutID : timeoutID
    });
    return Boolean(alreadyExists);
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        return this.cache.get(key).value; // we need to return the value of the key
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};


const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1
