// Function: sleepIn
function sleepIn(weekday, vacation) {
    if (!weekday || vacation) {
        return true;
    }
    return false;
}

// Function: monkeyTrouble
function monkeyTrouble(aSmile, bSmile) {
    if (aSmile === bSmile) {
        return true;
    }
    return false;
}

// Function: sumDouble
function sumDouble(a, b) {
    if (a === b) {
        return (a + b) * 2;
    } else {
        return a + b;
    }
}

// Function: diff21
function diff21(n) {
    if (n < 21) {
        return 21 - n;
    } else {
        return (n - 21) * 2;
    }
}

// Function: parrotTrouble
function parrotTrouble(talking, hour) {
    if (talking && (hour < 7 || hour > 20)) {
        return true;
    }
    return false;
}

// Function: makes10
function makes10(a, b) {
    if (a === 10 || b === 10 || (a + b === 10)) {
        return true;
    }
    return false;
}

// Function: nearHundred
function nearHundred(n) {
    if (Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10) {
        return true;
    }
    return false;
}

// Function: posNeg
function posNeg(a, b, negative) {
    if (negative) {
        if (a < 0 && b < 0) {
            return true;
        }
    } else {
        if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
            return true;
        }
    }
    return false;
}

// Function: notString
function notString(str) {
    if (str.startsWith("not")) {
        return str;
    } else {
        return "not " + str;
    }
}

// Function: missingChar
function missingChar(str, n) {
    return str.slice(0, n) + str.slice(n + 1);
}

// Function: frontBack
function frontBack(str) {
    if (str.length <= 1) {
        return str;
    }
    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    return lastChar + str.slice(1, -1) + firstChar;
}

// Function: front3
function front3(str) {
    let front = str.slice(0, 3);
    return front + front + front;
}

// Function: backAround
function backAround(str) {
    let lastChar = str[str.length - 1];
    return lastChar + str + lastChar;
}

// Function: multipleOf3Or5
function multipleOf3Or5(n) {
    if (n % 3 === 0 || n % 5 === 0) {
        return true;
    }
    return false;
}

// Function: front22
function front22(str) {
    let front = str.slice(0, 2);
    return front + str + front;
}

// Function: startWithHi
function startWithHi(str) {
    if (str.length >= 2 && str[0] === 'h' && str[1] === 'i') {
        return true;
    }
    return false;
}

// Function: icyHot
function icyHot(temp1, temp2) {
    if ((temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)) {
        return true;
    }
    return false;
}

// Function: in1020
function in1020(a, b) {
    if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
        return true;
    }
    return false;
}

// Function: hasTeen
function hasTeen(a, b, c) {
    const isTeen = num => num >= 13 && num <= 19;
    if (isTeen(a) || isTeen(b) || isTeen(c)) {
        return true;
    }
    return false;
}

// Function: notTeen
function notTeen(a, b) {
    const isTeen = num => num >= 13 && num <= 19;
    if (isTeen(a) !== isTeen(b)) {
        return true;
    }
    return false;
}

// Function: delDel
function delDel(str) {
    if (str.length >= 4 && str.slice(1, 4) === 'del') {
        return str[0] + str.slice(4);
    }
    return str;
}

// Function: mixStart
function mixStart(str) {
    if (str.length >= 3 && str[1] === 'i' && str[2] === 'x') {
        return true;
    }
    return false;
}

// Function: oz
function oz(str) {
    let result = '';
    if (str.length > 0 && str[0] === 'o') {
        result += str[0];
    }
    if (str.length > 1 && str[1] === 'z') {
        result += str[1];
    }
    return result;
}

// Function: maxOfThree
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// Function: nearestTo10
function nearestTo10(a, b) {
    let diffA = Math.abs(a - 10);
    let diffB = Math.abs(b - 10);
    if (diffA < diffB) {
        return a;
    } else if (diffB < diffA) {
        return b;
    } else {
        return 0;
    }
}

// Function: inRange
function inRange(a, b) {
    const inRange30to40 = n => n >= 30 && n <= 40;
    const inRange40to50 = n => n >= 40 && n <= 50;
    if ((inRange30to40(a) && inRange30to40(b)) || (inRange40to50(a) && inRange40to50(b))) {
        return true;
    }
    return false;
}

// Function: maxInRange
function maxInRange(a, b) {
    const inRange = n => n >= 10 && n <= 20;
    if (inRange(a) && inRange(b)) {
        return Math.max(a, b);
    } else if (inRange(a)) {
        return a;
    } else if (inRange(b)) {
        return b;
    }
    return 0;
}

// Function: eCount
function eCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            count++;
        }
    }
    if (count >= 1 && count <= 3) {
        return true;
    }
    return false;
}

// Function: sameLastDigit
function sameLastDigit(a, b) {
    if (a % 10 === b % 10) {
        return true;
    }
    return false;
}

// Function: endUp
function endUp(str) {
    if (str.length <= 3) {
        return str.toUpperCase();
    } else {
        let end = str.slice(-3).toUpperCase();
        let start = str.slice(0, -3);
        return start + end;
    }
}

// Function: everyNthChar
function everyNthChar(str, N) {
    let result = '';
    for (let i = 0; i < str.length; i += N) {
        result += str[i];
    }
    return result;
}
