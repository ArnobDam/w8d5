function sum(firstArg) {
    let sum = firstArg;
    let otherArgs = Array.prototype.slice.call(arguments, 1);

    otherArgs.forEach((arg) => {
        sum += arg;
    });
    return sum;
}

function sum2(firstArg, ...otherArgs) {
    let sum = firstArg;

    otherArgs.forEach((arg) => {
        sum += arg;
    });
    return sum;
}


