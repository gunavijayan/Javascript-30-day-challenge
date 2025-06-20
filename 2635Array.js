var map = function(arr, fn) {
    let out = [];
    for(const i in arr) {
        out.push(fn(arr[i],Number(i)));
        };
    console.log(out);
};

arr = [1,2,3];
fn = function plusone(n) {
    return n + 1;
};
fx = function plusI(n,i) {
    return n + i;
}
fy = function constant() {
    return 42;
}
newArray = map(arr,fx);
next = map(arr,fn);
newnext = map(arr,fy);
