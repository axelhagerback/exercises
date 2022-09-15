console.log('I am ALIVE');

function exercise1() {
    console.log('first exercise');
    var textbox1value = document.getElementById('txt1').value;
    var textbox2value = document.getElementById('txt2').value;
    console.log(textbox1value + ', ' + textbox2value);
    console.log(`${textbox1value}, ${textbox2value} (${textbox1value.length})`);
}