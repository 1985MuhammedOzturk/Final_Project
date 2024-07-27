document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    var column1 = document.getElementById('column1');
    var column2 = document.getElementById('column2');

    // Get the value "1" and output should be "1"
    var value1 = column1.children[0].textContent.trim();
    console.log(value1); 

    // Get the value "3" and output should be "3"
    var value3 = column1.children[2].childNodes[0].nodeValue.trim();
    console.log(value3); 

    // Get the value "Three" and output should be "Three"
    var valueThree = column1.children[2].getElementsByTagName('span')[0].textContent.trim();
    console.log(valueThree); 

    // Get the value "6" and output should be "6"
    var value6 = column2.children[2].textContent.trim();
    console.log(value6); 

    // Get the value "7". The number 7 is 
    //a text node directly inside the container, so we need to look through childNodes to find it
    var textNodes = Array.from(container.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
    var value7 = textNodes[textNodes.length - 1].textContent.trim();
    console.log(value7); // Expected output should be  "7"
});
