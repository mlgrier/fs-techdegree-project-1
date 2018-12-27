/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

var quotes = [
    {
        quote: "It always seems impossible until it's done.",
        source: "-Nelson Mandela",
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        source: "-Confucius",
    },
    {
        quote: "All our dreams can come true, if we have the courage to pursue them.",
        source: "-Walt Disney",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "-Confucius",
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        source: "-George Addair",
    },
    {
        quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
        source: "-Paulo Coelho",
    },
    {
        quote: "Too many of us are not living our dreams because we are living our fears.",
        source: "-Les Brown",
    },
    {
        quote: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.",
        source: "-Wayne Dyer",
    },
    {
        quote: "Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life.",
        source: "-Tony Robbins",
    },
];


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote() {
    var randomNumber = quotes[Math.floor(Math.random() * quotes.length) + 1];
}



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

// <p class="quote"> [quote here] </p>
// <p class="source"> [source here]
//   <span class="citation"> [citation here] </span>
//   <span class="year"> [year here] </span>
// </p>


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
