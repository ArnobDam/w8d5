function sum1(firstArg) {
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

Function.prototype.myBind2 = function (obj) {
    let that = this;

    let args = Array.prototype.slice.call(arguments, 1);

    return function (args2) {
        args = args.concat(Array.prototype.slice.call(arguments));
        return that.apply(obj, args);
    }
}


Function.prototype.myBind = function (obj, ...args) {
    let that = this;

    // let args = Array.prototype.slice.call(arguments, 1);

    return function (...args2) {
        // args = args.concat(Array.prototype.slice.call(arguments));
        args = args.concat(args2);
        return that.apply(obj, args);
    }
}

//EXAMPLES

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // tru

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true

function curriedSum(numArgs) {
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach((num) => sum += num )
            console.log(sum);
            return sum;
        } else {
            return _curriedSum
        }
    }
}


Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;
    
    return function curriedSum(num) {
         args.push(num);
         let sum = 0;
         args.forEach(ele => sum += ele);
        //  console.log(sum);
         if (args.length === numArgs) {
            console.log(sum);
            return that(...args)
         } else {
            return curriedSum;
         }
    }
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  sumThree(4, 20, 6); // == 30
  
  // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
  // or more briefly:
  sumThree.curry(3)(4)(20)(6); // == 30