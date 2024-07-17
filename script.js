document.addEventListener('DOMContentLoaded', function () {
    var heading = document.getElementById('randomColorText'); // Get the element
    var text = heading.innerText; // Store the original text
    var newHtml = ''; // Variable to hold the new HTML

    // Loop through each character in the original text
    for (var i = 0; i < text.length; i++) {
        var color = Math.random() > 0.5 ? 'black' : 'white'; // Randomly choose black or white
        newHtml += '<span style="color:' + color + ';">' + text[i] + '</span>'; // Wrap each character in a span with a style
    }

    heading.innerHTML = newHtml; // Replace the original text with the new HTML
});
