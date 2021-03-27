// 1. As a user, I should see the timer increment every second once the page has
//    loaded.

document.addEventListener('DOMContentLoaded', () => {

    const timer = document.getElementById("counter")
    const heartButton = document.getElementById('heart')
    const likesList = document.querySelector('.likes')
    const likedNumbers = {};
    const pauseButton = document.getElementById('pause')
    const minusButton = document.querySelector('#minus')
    const plusButton = document.querySelector('#plus')

    // write a resuable function for the counter
    function incrementTimer() {
        let newTimer = parseInt(timer.innerText)
        newTimer += 1
        timer.innerText = newTimer
    }

    function automaticallyIncrement(){
        setInterval(incrementTimer, 1000)
    } 
    
    automaticallyIncrement()

    //2. As a user, I can manually increment and decrement the counter using the plus

    function manuallyIncrement () {
        plusButton.addEventListener('click', incrementTimer)
    }

    function deincrementTimer() {
        let newTimer = parseInt(timer.innerText)
        newTimer -= 1
        timer.innerText = newTimer
    }

    function manuallyDeincrement () {
        minusButton.addEventListener('click', deincrementTimer)
    }

    manuallyIncrement()
    manuallyDeincrement()

    // 3. As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.

    // grab the likes list
    // grab the clicks
    // grab the number from the clik
    // add innerHTML of li to the likesList that displays the number of times each number was liked

   heartButton.addEventListener('click', likeNumber)

   function likeNumber(){
    // let newTimer = parseInt(timer.innerText)  
    // count = 0
    // heartButton.onClick = function() {
        const number = timer.innerText;
        if (likedNumbers[number]) {
            likedNumbers[number] += 1;
            document.getElementById(number).innerText = `${number} has been liked ${likedNumbers[number]} times`;
        } else {
            likedNumbers[number] = 1; 
            likesList.innerHTML += `<li id="${number}">${number} has been liked ${likedNumbers[number]} times</li>`;
        }
       
    };

    // pause the counter
    // disable all buttons except the pause button
    // switch the label on the button from "pause" to "resume"

    pauseButton.addEventListener('click', pauseTimer)

    function pauseTimer() {
        heartButton.disabled = true;
        plusButton.disabled = true;
        minusButton.disabled = true;
        pauseButton.innerText = "resume";
        
    }


})
