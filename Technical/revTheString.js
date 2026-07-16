
function reverseTheString(s) {
    // output: "s'teL ekat edoCteeL tsetnoC"

    if (s.length === 0) return "can't work with empty string"
    let currentWord = '';
    let words = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char !== ' ') {
            currentWord += char;
        }
        else {
            words.push(currentWord)
            currentWord = '';
        }
    }
    words.push(currentWord)

    let reversedWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let arr = word.split('');
        let left = 0;
        let right = word.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--
        }
        reversedWords.push(arr.join(''));
    }

    return reversedWords.join(' ');;
}

let s = "Let's take LeetCode contest"
console.log(reverseTheString(s))
