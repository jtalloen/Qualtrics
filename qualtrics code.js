// Usefull qualtrics code

// Not allowing text to be copy pasted.
// Add the following in Look & Feel custom CSS 
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}
// Then, for the the element or text you dont want to be highlightable/copy&paste-able 
<span class= "noselect" > /* Random text */</span>


// Assigning a variable to an embedded data field in qualtrics
// Notice that you have to parse the variable you pull from qualtrics into an integer

var choice = "${q://QID14/SelectedChoicesRecode}";
var choicep = parseInt(choice);
Qualtrics.SurveyEngine.setEmbeddedData('EndLoop', choicep);

// Hiding the next button and automatically advancing a participant

this.hideNextButton();
var that = this;
(function(){that.clickNextButton();}).delay(.0001);

// Create a random number between 0 and 100

var rand = Math.floor(Math.random()*(100-1+1)+1); 

// Randomly generate a binary outcome of 0 or 1

var HT = Math.round(Math.random());
