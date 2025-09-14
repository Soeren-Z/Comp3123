'use strict';

/*// Exercise 1
function CapitalizeFirstLetters(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(' ');
}

console.log("\n Exercise 1");
console.log(CapitalizeFirstLetters("the quick brown fox"));*/

// Exercise 2
function LargestInteger(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log("\n Exercise 2");
console.log(LargestInteger([1, 0, 1]));
console.log(LargestInteger([0, -10, -20]));
console.log(LargestInteger([1000, 510, 440]));

// Exercise 3
function MoveLastThreeChar(str) {
    if (str.length < 4) {
        return str;
    }
    return str.slice(str.length - 3) + str.slice(0, str.length - 3);
}

console.log("\n Exercise 3");
console.log(MoveLastThreeChar("Python"));
console.log(MoveLastThreeChar("JavaScript"));
console.log(MoveLastThreeChar("Hi"));

// Exercise 4
function AngleType(int) {
    if (int < 90 && int > 0) {
        return "Acute Angle";
    }
    else if (int == 90) {
        return "Right Angle";
    }
    else if (int > 90 && int < 180) {
        return "Obtuse Angle";
    }
    else if (int == 180) {
        return "Straight Angle";
    }
    else {
        return "Invalid Angle";
    }
}

console.log("\n Exercise 4");
console.log(AngleType(47));
console.log(AngleType(90));
console.log(AngleType(145));
console.log(AngleType(180));

// Exercise 5
function MaxSum(arr, k) {
    let maxSum = 0;
    for (let i = 0; i <= arr.length - k; i++) {
        let currSum = 0;
        for (let j = 0; j < k; j++) {
            currSum += arr[i + j];
        }
        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum;
}

console.log("\n Exercise 5");
console.log(MaxSum([1, 2, 3, 14, 5], 2));
console.log(MaxSum([2, 3, 5, 1, 6], 3));
console.log(MaxSum([9, 3, 5, 1, 7], 2));