function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function asc(c) {
    return c.charCodeAt(0);
}

function parse(s) {
    n = 0
    decimal = 0;
    fraction = 0.1
    for (i = 0; i < s.length; i++) {
        if (s[i] == ".") {
            decimal = 1
            continue;
        }
        if (decimal == 0) {
            n = n * 10 + asc(s[i]) - asc("0");
        }
        else {
            n = n + (asc(s[i]) - asc("0")) * fraction;
            fraction = fraction * 0.1;
        }

    }

    return n;
}

function test_single_digits() {
    assert(parse("0") == 0, "Parsing '0' didn't work.")
    assert(parse("9") == 9, "Parsing '9' didn't work.")
}

function test_multiple_digits() {
    assert(parse("00") == 0, "Parsing '00' didn't work.")
    assert(parse("10") == 10, "Parsing '10' didn't work.")
    assert(parse("99") == 99, "Parsing '99' didn't work.")
    assert(parse("1234") == 1234, "Parsing '1234' didn't work.")
}

function test_fractional_digits() {
    assert(parse("0.0") == 0, "Parsing '0.0' didn't work.")
    assert(parse("10.01") == 10.01, "Parsing '10.01' didn't work.")
    assert(parse("99.9") == 99.9, "Parsing '99.9' didn't work.")
    assert(parse("1234.0") == 1234.0, "Parsing '1234.0' didn't work.")
}

test_single_digits();
test_multiple_digits();
test_fractional_digits();
console.log("done.")
