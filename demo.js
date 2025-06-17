var createconstant(a,b) {
    console.log(a + b);
}
const a = createconstant(2,3);

var createHelloWorld = function() {
    return function(...args) {
        console.log("Hello World");
    }
}

const f = createHelloWorld();
f();