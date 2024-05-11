var ord_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ord_numbers.length; i++) {
    var suffix = void 0;
    if (ord_numbers[i] === 1) {
        suffix = "st";
    }
    else if (ord_numbers[i] === 2) {
        suffix = "nd";
    }
    else if (ord_numbers[i] === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log("".concat(ord_numbers[i]).concat(suffix));
}
