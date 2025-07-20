var jsonStringify = function(object) {
    // check for strings, array and object to convert it into JSON
    //if its null, we can return it as string
    if (object === null || object === undefined){
        return String(object);
    }
    // Array []
    if (Array.isArray(object)) {
        // if the object is an array, loop through the array and assign the key value pairs
        //another method where we can map the object
        const values = object.map((obj) => jsonStringify(obj))
        let str = values.join(",")
        return `[${str}]`;
    }
    //objects 
    if(typeof object === 'object') {
        const keys = Object.keys(object)
        const pair = keys.map((obj) => `"${obj}":${jsonStringify(object[obj])}`)
        console.log(`{${pair.join(",")}}`);
    }
    //strings
    if(typeof object === 'string') {
        return `"${String(object)}"`;
    }
    return String(object);
};

object = {"y":1,"x":2}
jsonStringify(object)