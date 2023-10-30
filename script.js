var aText = [
    "Hello there internet surfer! 👋",
    "You want to know about the backbone of the web pages you surf on,",
    "which is hosted on web servers,",
    "on the World Wide Web,",
    "transferred via HTTPS,",
    "communicating via TCP/IP,",
    "on the Internet. 😮‍💨",
    "Now, let's start by writing 'Hello, World!' on a webpage.",
    "Open a code editor like Notepad, VSCode, or any other of your choice.",
    "Type 'Hello, World!', and save it with a .html extension.",
    "Open the saved file in a web browser, and voila! 🎉",
    "You've just put 'Hello, World!' on a webpage. 🙌",
    "Now markup and let the browser know what you're putting on the webpage.",
    "Aye, that's why we call it hyper text mark-up language!",
    "Try putting your cat image using the <img> tag",
    "Put the location of the image or URL in the src attribute.",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "Add a caption in paragraph <p>",
    "<p>Meet my tiny paw, Purr! 🐾😺</p>",
    "It also has a closing tag, unlike the <img> tag.",
    "Some more elements that have both opening and closing tags headings: <h1></h1>, <h2></h2>, <h3></h3>, lists: <ul></ul>, <ol></ol>, <li></li>, links: <a></a>, etc.",
    "With only opening tags: <br>, <hr>, <input>, <link>, etc.",
    "Also, you put attributes in the opening tag.",
    "<input type='tel' name='phone'>",
    "<button type='submit'>Send</button>",
    "Now, come back to where we left off.",
    "Add one more caption with a little more description.",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she's got soft paws and might be asking for milk.</p>",
    "<img> is an inline element, so we would put a line break between <img> and <p>, but <p> is not, it is a block element taking the whole block space, and we don't need a line break between <p>.",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "<br>",
    "<p>Meet my tiny paw, Purr! 🐾😺</p>",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she got soft paws and might be just asking for some milk.</p>",
    "Now, put everything in an HTML standard skeleton:",
    "<!DOCTYPE html> ",
    "<html lang='en'>",
    "<head>",
    "<meta charset='UTF-8'>",
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    "<title>Purr! 😺</title>",
    "</head>",
    "</head> ",
    "<main>",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "<br>",
    "<p>Meet my tiny paw, Purr! 🐾😺</p>",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she got soft paws and might be just asking for some milk.</p>",
    "</main>",
    "</body>",
    "</html>",
    "This standard structure begins with <!DOCTYPE html>, defining the document type. Within <html>, the content resides. The <head> includes the webpage title. The <body> contains the visible content, including the image and text",
    "Okay, now what more do you want to put",
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
    "Let's add a few more images and a 'View more' button to visit her Instagram:",
    "<img src='/images/purr-bath.jpg' alt='cat in a pool in sunlight'>",
    "<img src='images/purr-caught-red-dot.jpg' alt='cat trying to taste red dot'>",
    "<button href='https://www.instagram.com/FuriousPawFury'>View more of Purr</button>",
    "You could also allow people to add comments:",
    "<label for='comment'>Comment:</label>",
    "We added the 'for' attribute to the label for better accessibility,",
    "Sthe 'name' attribute to the input to identify where to save the input,",
    "and the 'href' attribute to the button for the address of the database.",
    "<input type='text' id='comment' name='comments'>",
    "<button type='submit' href='purr-inbox.php'>Send</button>",
    "Let's see:",
    "<!DOCTYPE html> ",
    "<html lang='en'>",
    "<head>",
    "<meta charset='UTF-8'>",
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    "<title>Purr! 😺</title>",
    "</head>",
    "</head> ",
    "<main>",
    "<img src='pictures/kitty-images/purr.jpg' alt='my green eye baby kito purr'>",
    "<img src='/images/purr-bath.jpg' alt='cat in a pool in sunlight'>",
    "<img src='images/purr-caught-red-dot.jpg' alt='cat trying to taste red dot'>",
    "<button href='https://www.instagram.com/FuriousPawFury'>View more of Purr</button>",
    "<br>",
    "<p>Meet my tiny paw, Purr! 🐾😺</p>",
    "<p>Be careful—she might try to scratch down your whole face, but worry not, she got soft paws and might be just asking for some milk.</p>",
    "Things she likes:",
    "<ol>",
    "<li>Milk</li>",
    "<li>Milk</li>",
    "<li>Milk</li>",
    "</ol>",
    "Things she doesn't like:",
    "<ul>",
    "<li>Kiss</li>",
    "<li>Tidy Table</li>",
    "<li>Laws of Gravity</li>",
    "</ul>",
    "<label for='comment'>Comment:</label>",
    "<input type='text' id='comment' name='comments'>",
    "<button type='submit' href='purr-inbox.php'>Send</button>",
    "</main>",
    "</body>",
    "</html>",
    "This much would be good, I think. Keep updating and adding more stuff so her fans wouldn't miss anything.",
    "Visit MDN docs (https://developer.mozilla.org/en-US/docs/Web/HTML) to know about more elements and their attributes and uses.",
    "We'll see styling the webpage with CSS another day.",
    "Now, go and stack some coffee cups! ☕☕☕"
];

// Time delay of typing
var specialLines = [2, 3, 4, 5, 6];
var specialSpeed = 20;
var normalSpeed = 100;


var iIndex = 0;
var iTextPos = 0;
var sContents = '';
var scrollCount = 0;

function typewriter() {
    var destination = document.getElementById("typedtext");

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
        } else {
            iSpeed = normalSpeed;
        }

        if (iTextPos < aText[iIndex].length) {
            iTextPos++;
        } else {
            iTextPos = 0;
            iIndex++;
        }


        setTimeout(typewriter, iSpeed);
    }
}

typewriter();

