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
        quote: "Here’s Johnny!",
        source: "-Jack Nicholson",
        citation: "The Shining",
        year: 1980,
    },
    {
        quote: "Warriors, come out to play",
        source: "-David Patrick Kelly",
        citation: "The Warriors",
        year: 1979,
    },
    {
        quote: "I wish I had a theater that was only open when it rained",
        source: "-Bill Murray",
        citation: "Tootsie",
        year: 1982,
    },
    {
        quote: "Want to hear the most annoying sound in the world?",
        source: "-Jim Carrey",
        citation: "Dumb And Dumber",
        year: 1994,
    },
    {
        quote: "Kelly Clarkson!",
        source: "-Steve Carell",
        citation: "The 40-Year-Old Virgin",
        year: 2005,
    },
];


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length) + 1];
    return randomQuote;
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

function printQuote() {
    var year = getRandomQuote().year;
    var quote = getRandomQuote().quote;
    var source = getRandomQuote().source;
    var citation = getRandomQuote().citation;

    var superText = <p>something to say</p>;

    document.getElementById('quote-box').innerHTML = superText;

    var superText = <p>something to say</p>;

    // var superQuote = <p class="quote"> quote </p>;
    // superQuote += <p class="source"> source;
    //   <span class="citation"> citation </span>
    //   <span class="year"> year </span>
    // </p>
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
