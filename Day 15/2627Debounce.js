var Debounce = function(fn,t) {
    let id;
    return function(...args) {
        clearTimeout(id);  // clearing the timeout before executing the next one
        id =setTimeout(() => fn(...args),t);
    }
}

const log = Debounce(console.log,100);
log('Hello')
log('Hello')