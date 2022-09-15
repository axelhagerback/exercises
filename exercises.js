function exercise1() {
    var textboxValue = document.getElementById('txt').value;
    const words = textboxValue.split(' ');
    
    console.log(words.length);
    let i = 0;


    while(i < words.length) {
        console.log(`${words[i]} (${words[i].length})`);
        i++;
    }

    
}


function exercise2() {
    var textboxValue = document.getElementById('txt').value;
    words = textboxValue.split(' ');


    
    const sortedWords = words.sort((a, b) => a.length - b.length);
    
    
    let i = 0;
    
    while(i < sortedWords.length) {
        console.log(`${sortedWords[i]}`);
        i++;
    }

    reversedWords = words.reverse();
    let x = 0;
    while(x < reversedWords.length) {
        console.log(`${reversedWords[x]}`);
        x++;
    }
}


function exercise3() {
    var textboxValue = document.getElementById('txt').value;
    words = textboxValue.split(' ');
}


