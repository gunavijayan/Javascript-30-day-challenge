var counter = function (n) {
    let count = n

    return function() {
        console.log(n++);
    };
};

const a = counter(1092)
a()
a()
a()
a()

