function exercise1() {
    var textboxValue = document.getElementById('txt').value;
    const words = textboxValue.split(' ');
    
    console.log(words.length);

    words.forEach(word => console.log(`${word} (${word.length})`));
}


function exercise2() {
    var textboxValue = document.getElementById('txt').value;
    words = textboxValue.split(' ');


    const sortedWords = words.sort((a, b) => a.length - b.length);
    sortedWords.forEach(wordSort => console.log(`${wordSort}`));
   
    reversedWords = words.reverse();
    reversedWords.forEach(wordReverse => console.log(`${wordReverse}`));

}


function exercise3() {
    var textboxValue = document.getElementById('txt').value;
    const words = textboxValue.split(' ');


    let obj = [];

    words.forEach((word) => {
        if (obj[word] === undefined) {
            obj[word] = 1;
        } else {
            obj[word]++;
        }
    });
    
    for(const frequency in obj){console.log(`${frequency} ${obj[frequency]}`)};


    const freqArray = Array.from(Object.keys(obj));
    freqArray.sort((a, b) => obj[a] - obj[b]);

    freqReverse = freqArray.reverse();

    freqReverse.forEach(freq => console.log(`${freq}`))

}

function exercise4() {
    var textboxValue = document.getElementById('txt').value;
    const noWhitespace = textboxValue.replace(/\s/g, '');
    const letters = noWhitespace.split('');

    let freq = [];

    letters.forEach((letter) => {
        if(freq[letter] === undefined) {
            freq[letter] = 1;
        } else {
            freq[letter]++;
        }
    });

    for(const frequency in freq){console.log(`${frequency} ${freq[frequency]}`)};

}