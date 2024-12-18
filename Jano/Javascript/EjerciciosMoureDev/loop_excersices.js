// for(i = 1; i < 21; i++) {
//     console.log(i);
// }

// let j = 0;
// for(i = 0; i < 101; i++) {
//     j += i;
// }
// console.log(j);

// for (i = 1; i < 51; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// const names = [
//     "Alice",
//     "Bob",
//     "Charlie",
//     "David",
//     "Eve"
// ];

// for (i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

function DetectVowel (letter) {
    if (letter != "a" && letter != "e" && letter != "i" && letter != "o" && letter != "u") {
        return false
    }
    return true
}
let word = "Jaaava"
let count = 0
for (i = 0; i < word.length; i++) {
    if (DetectVowel(word.charAt(i).toLowerCase())) {
        count += 1
    }
}
console.log(count)