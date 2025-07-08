var throttle = function(fn,t) {
    let isThrottled = false;
    let nextArgs = null;
    
    return function(...args) {
        if(isThrottled) {
            nextArgs = args;    // checking the argument 
        }
        else { 
            fn(...args);         // if the argument present, wer're calling it
            isThrottled = true;
            setTimeout(helper,t);  // callback function to call the next argument 
        }

        function helper() {
            if(nextArgs) {          // if the next argument is scheduled, we need to call the argument 
                fn(...nextArgs);
                isThrottled = true;
                nextArgs = null;
                setTimeout(helper,t);
            }
            else {
                isThrottled = false;
            }
        }
    }

}

const throttled = throttle(console.log, 100);
throttled("log");  // logged immediately
throttled("log");
throttled("log2"); // logged at t=100ms