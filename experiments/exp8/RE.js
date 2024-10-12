const inputString = "Agrim aaaa  aaaaaaa  aaaaaaaa";
const regex = /a{2,3}/g;
const replacedString = inputString.replace(regex, 'b');

console.log("Original string:", inputString);
console.log("Modified string:", replacedString);
