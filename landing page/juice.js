// Track the state of each card
let cardStates = {
    food1: false,
    food2: false,
    food3: false,
    food4: false,
};

// Get the button element
let button = document.querySelector('.buy');

// Function to check if any card is selected
function updateButtonState() {
    // Check if any card is selected
    const anyCardSelected = Object.values(cardStates).includes(true);
    //update the card
    button.disabled = !anyCardSelected;
    button.textContent = anyCardSelected ? 'Buy' : 'No Thanks';
    button.style.textDecoration = anyCardSelected ? 'none' : 'underline';
    button.style.color = anyCardSelected ? 'white' : 'black';
    button.style.width = anyCardSelected ? '17pc' : '31pc';
    document.querySelector('.b').style.left = anyCardSelected ? '55pc' : '48pc';
    button.style.backgroundColor = anyCardSelected ? 'orangered' : 'transparent';  // Change button text based on card selection
}

// Function to handle card click
function handleCardClick(cardId, cardElement, textElement, toggleClass) {
    cardElement.classList.toggle(toggleClass);
    if (textElement.style.color === "white") {
        textElement.style.color = 'black';
        cardStates[cardId] = false;
    } else {
        textElement.style.color = 'white';
        cardStates[cardId] = true;
    }
    updateButtonState();  // Update the button state after each card click
}

// Setup event listeners for cards
let one = document.querySelector('#food1');
let onet = document.querySelector('#tail1');
one.addEventListener('click', () => {
    handleCardClick('food1', one, onet, 'toggle1');
});

let two = document.querySelector('#food2');
let twot = document.querySelector('#tail2');
two.addEventListener('click', () => {
    handleCardClick('food2', two, twot, 'toggle2');
});

let three = document.querySelector('#food3');
let threet = document.querySelector('#tail3');
three.addEventListener('click', () => {
    handleCardClick('food3', three, threet, 'toggle3');
});

let four = document.querySelector('#food4');
let fourt = document.querySelector('#tail4');
four.addEventListener('click', () => {
    handleCardClick('food4', four, fourt, 'toggle4');
});

// Initial update of button state
updateButtonState();

var tl = gsap.timeline({scrollTrigger:{
    trigger:".card2",
    start: "0% 95%",
    end: "28% 50%",
    scrub: 2,
   
}})

tl.to(".juice",{
    end:"50% -40%",
    top: "25%",
    left: "-10%"
})

var tl1 = gsap.timeline({scrollTrigger:{
    trigger:".card3",
    start:"0% 90%",
    end: "15% 0%",
    scrub: 2,
}})

tl1.to(".juice",{
    start: "0% 85%",
    top:"88%",
    left:"11.5%",
})

tl1.to(".juice #mocktail1",{
    height:"368px",
    width:"321px",
})

let max= 1450;
window.addEventListener('scroll',()=>{
    if (window.scrollY>=max){
        window.scrollTo(0, max)
    }
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:"card3",
    start: "0% 95%",
    end:"10% 50%",
    scrub: 2,
    
}})

var tl3 = gsap.timeline({scrollTrigger:{
    trigger:"card3",
    start: "0% 95%",
    end:"13% 50%",
    scrub: 2,
   
}})

var tl4 = gsap.timeline({scrollTrigger:{
    trigger:"card3",
    start: "0% 95%",
    end:"13% 50%",
    scrub: 2,
  
}})

tl2.from("#mock1",{
    left: "-40%",
    top: "-20%",
    rotate: "360deg",
    scale:1.2,
})

tl3.from("#mock2",{
    rotate: "-90deg",
    left: "50%",
    top: "-20%",
})

tl4.from("#mock4",{
    rotate: "240deg",
    left: "50%",
    top: "-20%",
})

