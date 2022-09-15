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

    let obj = {};

    for(var i = 0; i < words.length; i++) {
        if (obj[words[i]] === undefined) {
            obj[words[i]] = 1;
        } else {
            obj[words[i]]++;
        }
    };

    
        
    Object.values(obj).forEach((frequency, word) => console.log(`${words[word]} ${frequency}`));
   //Object.values(obj).forEach((freqSort))
}
