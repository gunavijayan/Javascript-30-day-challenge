var filter = function (arr,fn) {
    const out = []
    for (let i=0; i < arr.length; i++) {
        if(fn(arr[i],i)){
            out.push(arr[i]);
        }
    }
    console.log(out);
}

arr = [1,20,30]
fn = function plusOne(n) {
    return n > 10;
}

filter(arr,fn)