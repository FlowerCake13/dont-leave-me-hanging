# Don't Leave Me Hanging

You will be creating a variation of the popular Hangman game!

### Objective
Create an application using DOM manipulation, JavaScript event listeners, key codes, arrays, For loops, and a few JavaScript methods.

### Prerequesites
- HTML structures
- Intermediate understanding of JavaScript and DOM
- Basic understanding of conditional statements
- Basic understanding of For Loops

### Requirements
- Sublime Text
- Chrome Dev Tools

### Desired Outcomes
Upon completing this project, students should understand:
- JavaScript Event Listeners/Handlers
- For Loops
- JavaScript methods: splice, push, Math.random()

### Your Challenge:
Get started:
1. Fork and Clone this repository
2. Create the following files: index.html, app.js, and styles.css
3. Link the app.js and styles.css in the index.html

## Part 1: 
### Step 1 - HTML
1. Create the skeleton of the page using "!Tab"
2. Change the title of the page to an appropriate title
3. Add a header tag in between the head elements
4. Create three div elements inside the body of the page
5. Assign an id to each element so they are labeled: "word-container", "letters-container", "guesses-container"
 Ste
### Step 2 - CSS
1. Create a border for each created element on the page
2. Style the page!

### Step 3 - JavaScript
1. Declare a global variable and set it's value as an array that contains all the letters of the alphabet.
2. Declare a global variable and set it's value to an array that contains two surprise words, these are the words the player would have to guess.
3. Declare a global variable and set its values as an empty strings. These will contain the randomized word we would have to guess.
4. Declare an global variable and set it's value to an empty array. This will be used to modify the contents of the array.
5. Create a function called startGame that:
- Declare a variable with a randomized value using `Math.floor` and `Math.random()`. Use this variable to randomly select a surprise word and set the value from this as a new global variable *wordToGuess*.
- Populates the innerHTML of the element with the id 'letters-container' using a **for** loop
- Randomly selects a word from our word bank and populates the innerHTML of the element with the id 'word-container' with "-" using a **for** loop.
- Push the content of the innerHTML into the empty array with an `array.push()` method outside of the **for** loop
- Call the function after it has been created.

## Part 1: End! 
Once everyone in the classroom has reached this point, you may continue.

## Part 2

### Step 1 - JavaScript
1. Set an `event listener` for the page calls the function *createLetters* on `keydown`
2. Create a function called *createLetters* that:
- Has the parameter e and prints this value to the console.
- Creates a local variable called index and set it's value to 0.
- Create a **for** loop that iterates through the array containing the letters of the alphabet
- Inside this loop, have a conditional that checks if the iterated letter of the alphabet is the same as `e.key`, which is the fired key from the page
- If the `e.key` is the same as `letters[i]`, then print to the console "They match".
3. Create a function called *checkForWord* with parameter "letter" that:
- Iterates through the letters in the *wordToGuess* and has a conditional that checks if the parameter letter is the same as *wordToGuess[i]*.
- If the letter is the same, change the placement of the variable at the empty array to the letter.
- Populate the innerHTML of the element with id `word-container` with the array

### Step 2 - Check for Errors
- Let the instructor know if you have any errors!

### Step 3 - CSS
- On incorrect input from the user, see if you can change an image on the page!
