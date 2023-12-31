var aText = [
    "Hello there internet surfer! 👋",
    "You want to know about the backbone of the web pages you surf on,",
    "which is hosted on web servers,",
    "on the World Wide Web,",
    "transferred via HTTPS,",
    "communicating via TCP/IP,",
    "on the Internet. 😮‍💨",
    "",
    "Let's start by writing 'Hello, World!' on a webpage.",
    "Open a code editor like Notepad, VSCode, or any other of your choice.",
    "Type 'Hello, World!', and save it with a .html extension.",
    "Open the saved file in a web browser, and voila! 🎉",
    "You've just put 'Hello, World!' on a webpage. 🙌",
    "",
    "Now markup and let the browser know what you're putting on the webpage.",
    "Aye, that's why we call it hyper text mark-up language!",
    "Try putting your cat image using the <img> tag.",
    "Put the location of the image or URL in the src attribute.",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "Add a caption in paragraph <p>.",
    "<p>Meet my tiny paw, Purr! 🐾😺</p>",
    "It also has a closing tag, unlike the <img> tag.",
    "Some more elements that have both opening and closing tags headings: <h1></h1>, <h2></h2>, <h3></h3>, lists: <ul></ul>, <ol></ol>, <li></li>, links: <a></a>, etc.",
    "With only opening tags: <br>, <hr>, <input>, <link>, etc.",
    "Also, you put attributes in the opening tag.",
    "<input type='tel' name='phone'>",
    "<button type='submit'>Send</button>",
    "",
    "Now, come back to where we left off,",
    "Add one more caption with a little more description.",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she got soft paws and might be just asking for milk.</p>",
    "<img> is an inline element, so we would put a line break between <img> and <p>, but <p> is not, it is a block element taking the whole block space, and we don't need a line break between <p>.",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "<br>",
    "<p>Meet my tiny paw, Purr! 🐾😺</p>",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she got soft paws and might be just asking for some milk.</p>",
    "",
    "Now, put everything in an HTML standard skeleton:",
    "<!DOCTYPE html> ",
    "<html lang='en'>",
    "<head>",
    "<meta charset='UTF-8'>",
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    "<title>Purr! 😺</title>",
    "</head>",
    "<main>",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "<br>",
    "<h1>Meet my tiny paw, Purr! 🐾😺</h1>",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she got soft paws and might be just asking for some milk.</p>",
    "</main>",
    "</body>",
    "</html>",
    "This standard structure begins with <!DOCTYPE html>, defining the document type. Within <html>, the content resides. The <head> includes the webpage title. The <body> contains the visible content, including the image and text.",
    "",
    "Okay, now what more do you want to put.",
    "Let's make an organized list of things she likes:",
    "<ol>",
    "<li>Milk</li>",
    "<li>Milk</li>",
    "<li>Milk</li>",
    "</ol>",
    "and things she doesn't like:",
    "<ul>",
    "<li>Kiss</li>",
    "<li>Tidy Table</li>",
    "<li>Laws of Gravity</li>",
    "</ul>",
    "",
    "Let's add a few more images and a link to visit her Instagram.",
    "<img src='/images/purr-bath.jpg' alt='cat in a pool in sunlight'>",
    "<img src='images/purr-caught-red-dot.jpg' alt='cat trying to taste red dot'>",
    "<a href='https://www.instagram.com/FuriousPawFury'>View more of Purr</a>",
    "",
    "You could also allow people to add comments:",
    "<label for='comment'>Comment:</label>",
    "We added the 'for' attribute to the label for better accessibility,",
    "the 'name' attribute to the input to identify where to save the input,",
    "and the 'formaction' attribute to the button for the address of the database.",
    "<textarea id='comment' name='comments' rows='2' cols='10'></textarea>",
    "<button type='submit' formaction='purr-inbox.php'>Send</button>",
    "Although making a form would be good practice, so we can change to that.",
    "",
    "Let's see:",
    "<!DOCTYPE html> ",
    "<html lang='en'>",
    "<meta charset='UTF-8'>",
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    "<title>Purr! 😺</title>",
    "</head>",
    "<main>",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "<img src='/images/purr-bath.jpg' alt='cat in a pool in sunlight'>",
    "<img src='images/purr-caught-red-dot.jpg' alt='cat trying to taste red dot'>",
    "<a href='https://www.instagram.com/FuriousPawFury'>View more of Purr</a>",
    "<br>",
    "<h1>Meet my tiny paw, Purr! 🐾😺</h1>",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she got soft paws and might be just asking for some milk.</p>",
    "<section>",
    "<h2>Things she likes:</h2>",
    "<ol>",
    "<li>Milk</li>",
    "<li>Milk</li>",
    "<li>Milk</li>",
    "</ol>",
    "<h2>Things she doesn't like:</h2>",
    "<ul>",
    "<li>Kiss</li>",
    "<li>Tidy Table</li>",
    "<li>Laws of Gravity</li>",
    "</ul>",
    "</section>",
    "<form action='purr-inbox.php' method='post'>",
    "<label for='comment'>Comment:</label>",
    "<textarea id='comment' name='comments' rows='2' cols='10'></textarea>",
    "<button type='submit'>Send</button>",
    "</form>",
    "</main>",
    "</body>",
    "</html>",
    "",
    "This much would be good, I think. Keep updating and adding more stuff so her fans won't miss anything. 👀😸",
    "Visit MDN docs (https://developer.mozilla.org/en-US/docs/Web/HTML) to know about more elements and their attributes and uses.",
    "We'll see styling the webpage with CSS another day.",
    "Now, go and stack some coffee cups! ☕☕☕"
];


var iIndex = 0;
var iTextPos = 0;
var sContents = '';
var scrollCount = 0;
var typingTimeout;

// Time delay of typing
var specialLines = [2, 3, 4, 5, 6];
var specialSpeed = 5;
var normalSpeed = 50;

function typewriter() {
    var destination = document.getElementById("typedtext");
    var iSpeed = normalSpeed;

    if (iIndex < aText.length) {
        sContents = '';
        for (var i = 0; i <= iIndex; i++) {
            var textToDisplay = aText[i].substring(0, i === iIndex ? iTextPos : aText[i].length);
            if (i === iIndex) {
                sContents += textToDisplay + "_";
            } else {
                sContents += textToDisplay.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
            }
            sContents += '<br>';
        }

        destination.innerHTML = sContents;

        if (iTextPos === 1 && iIndex > 4 && scrollCount < iIndex) {
            window.scrollTo(0, window.scrollY + window.innerHeight);
            scrollCount = iIndex;
        }

        if (specialLines.includes(iIndex)) {
            iSpeed = specialSpeed;
        }

        if (iTextPos < aText[iIndex].length) {
            iTextPos++;
        } else {
            iTextPos = 0;
            iIndex++;
        }

        typingTimeout = setTimeout(typewriter, iSpeed);
    }
}

typewriter();

// Skip typing and display all text immediately
function skipTyping() {
    clearTimeout(typingTimeout);
    var destination = document.getElementById("typedtext");
    var allText = aText.map(function (text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }).join('<br>');
    destination.innerHTML = allText;
}

// Event listener for the skip button
document.getElementById('skipButton').addEventListener('click', function () {
    skipTyping();
});
