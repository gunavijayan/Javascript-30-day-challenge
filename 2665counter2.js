var createCounter = function(init) {
    let a = init;
    function increment() {
        console.log(++a);
    };
    function decrement() {
        console.log(--a);
    };
    function reset() {
        let count = init;
        console.log(count);
    };
    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    }
}

const count = createCounter(5)
count.increment()
count.increment()
count.decrement()
count.reset()