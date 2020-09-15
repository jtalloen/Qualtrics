// Useful qualtrics code

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


/// Assigning a variable to an embedded data field in qualtrics
// Notice that you have to parse the variable you pull from qualtrics into an integer

var choice = "${q://QID14/SelectedChoicesRecode}";
var choicep = parseInt(choice);
Qualtrics.SurveyEngine.setEmbeddedData('EndLoop', choicep);

var prob1 = "${e://Field/prob1}";

// Hiding the next button and automatically advancing a participant

this.hideNextButton();
var that = this;
(function(){that.clickNextButton();}).delay(.0001);

this.clickNextButton();


// Create a random number between min and max
// inlcusive:
var rand = Math.floor(Math.random() * (max - min + 1) ) + min;

// Randomly generate a binary outcome of 0 or 1

var HT = Math.round(Math.random());

// math operations and question responses in embedded data field 
// add a space between operations

$e{ q://QID1/SelectedChoicesRecode * 4 }
$e{e://Field/complete}

/// To get variables to communicate with unload in Qualtrics need to define them as global
/// ie
x = 13;

/// instead of 

var x = 13;

/// you will need to clearInterval(var); in unload in Qualtrics to make sure it actually clears

// loading jquery in CSS header
// add the below in CSS header using html view
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
/
document.getElementById("QR~1_QID8").value = text;


// trigger something on next button click
$('NextButton').on("click", function(){
	alert('hi');
});


// getting CSS property values
$('NextButton').on("click", function(){
	var elem = document.getElementById("NextButton");
	var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("opacity");
	alert('hi' + theCSSprop);

	console.log(theCSSprop);
});

// moving clock to center (notice there MUST be a space between the math operators and)
document.getElementById("QID35Timer").style.cssText= "margin-left: calc(50% - 107px);";


// word count tracker
field.oninput = function() {updateWordCount()};

function updateWordCount() {
	var str = field.value;
	var arr = str.match(/\S+/g);
	if (arr == null){
		arr = [];
	}
	document.getElementById("word").innerHTML = arr.length;
	Qualtrics.SurveyEngine.setEmbeddedData('wordcount', arr.length);
}

// changing width of text box
field.style.cssText = 'width:900px; height:450px;';


// changing width of page
<style>
.Skin .SkinInner {
width:60%;
}
.Skin .QuestionOuter.Matrix {
max-width: 100%!important;
}
</style>
