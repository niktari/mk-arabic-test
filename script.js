// Import the library
import ArabicReshaper from 'arabic-reshaper';

let element = document.getElementById('effect');
let unicodeVal = document.getElementById('unicode-value');
let originalString = element.innerText;

console.log(originalString);

// This can be a plain string. I just want to make sure I am feeding
// it the "plain" letter, not the initial/middle/end forms
// const originalString = String.fromCharCode(0x0636, 0x0636); // ضض

// This will convert it to the 'shaped' letters. That means the letters
// will be transformed into the 'initial/middle/end' forms in the string
// (not just when it draws to the screen).
const arabicString = ArabicReshaper.convertArabic(originalString);

// And get the values. These will be the specific initial/middle/end values, not the generic ones
console.log(
    arabicString.codePointAt(0).toString(16), // outputs fe8d
    arabicString.codePointAt(1).toString(16)  // outputs fedf
);

// Wrap each Arabic character in a span
let spanWrapper = '';

// Loop through each character and wrap it in a span
for (let i = 0; i < arabicString.length; i++) {
    if(arabicString[i] !== ' ') {
    spanWrapper += `<span class="effect--span">${arabicString.charAt(i)}</span>`;
    } else {
        // If it's a space, then don't wrap it in a span and add a space as-is
        spanWrapper += ' ';
    }

    // Replace the text container with the new HTML structure
    element.innerHTML = spanWrapper;
 }

let spanEffect = document.querySelectorAll('.effect--span');

const isolatedUnicodes = ['fe8d', 'fe95', 'fe99', 'fe9d', 'fea1', 'fea5', 'fea9', 'feab', 'fead', 'feaf', 'feb1', 'feb5', 'feb9', 'febd', 'fec1', 'fec5', 'fec9', 'fecd', 'fed1', 'fed5', 'fed9', 'fedb', 'fee1', 'fee5', 'fee9', 'feed', 'fef1', 'fe81', 'fe93', 'feef']

spanEffect.forEach((span) => {
    let character = span.innerText;
    let unicode = character.codePointAt(0).toString(16);

    if(isolatedUnicodes.includes(unicode)) {
        span.style.color = 'red';
    }

span.onmousemove = function() {


    if(isolatedUnicodes.includes(unicode)) {
        span.innerHTML += '';
    } else {
        span.innerHTML += 'ـ'
    }

    unicodeVal.innerHTML = unicode;
}
})