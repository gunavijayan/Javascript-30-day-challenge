var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called) {
            called = true;
            console.log(fn.apply(this, args));
        }
    }
};

let fn = (a,b,c) => (a + b + c)
const onceFn = once(fn)
onceFn(1,2,3)
onceFn(2,3,4)

