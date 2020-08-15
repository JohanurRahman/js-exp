let a = window.prompt('Enter First String');
let b = window.prompt('Enter Second String');

compare(a , b);

function compare (a, b) {
    const y = a.split("").sort().join("");
    const z = b.split("").sort().join("");
    z === y
        ? console.log( a + " and " + b + " are anagrams")
        : console.log(a + " and " + b + " are not anagrams.")
}
