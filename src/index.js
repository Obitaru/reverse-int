module.exports = function reverse(n) {
    let a = String(n).split("");
    if (a[0] == "-") {
        a.splice(0, 1)
    }
    a = Number(a.reverse().join(""));
    return a
}
