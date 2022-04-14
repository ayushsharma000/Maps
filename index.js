let string = "abcadeecfb";

let newset = new Set();
for (let i = 0; i < string.length; i++) {
    newset.add(string[i]);
}
let str2 = "";
for (let val of newset.values()) {
    str2 += val;
}
console.log(str2);

let str1 = string.split("");
let mapOfString = new Map();

for (let i = 0; i < str1.length; i++) {
    let count = 1;
    for (let b = i + 1; b < str1.length; b++) {
        if (str1[i] === str1[b]) {
            count++;
            str1.splice(b, 1);
            b--;
        }
    }
    mapOfString.set(str1[i], count);
}
for (let [key, value] of mapOfString.entries()) {
    console.log(key + "=" + value);
}