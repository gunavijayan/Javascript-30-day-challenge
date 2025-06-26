var curry = function(fn) {
    let nums = []
    return function curried(...args) {
        nums = [...nums,...args]
        if(fn.length === nums.length) {
            const res = fn(...nums);
            nums = []
            console.log(res)
        } else {
            return curried;
        }

    };
};

function sum(a,b) { return a + b; }
const csum = curry(sum)
csum(1)(2) //3