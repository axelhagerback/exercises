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





