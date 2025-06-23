var compose = function(functions) {
    let rev = functions.reverse()
    return function(x) {
        for(const fn of rev){
            x = fn(x)     // assigning the output of the function to x again
        }
        console.log(x);
    }
};

const fn = compose([x => x + 1, x => 2 * x, x => x * x])
// 4 * 4 = 16, 2 * 16 = 32, 32 + 1 = 33
fn(4)



const fn1 = x => x + 1;
const fn2 = x => 2 * x;
console.log(fn1(fn2(4)))
