var reduce = function(nums,fn,init) {
    let out = init
    for (let n of nums) {
        out = fn(out,n)
    }
    console.log(out)
}


nums = [1,2,3,4]
fn = function sum(accum,curr) {
    return accum + curr;
}
init = 0
reduce(nums,fn,init)