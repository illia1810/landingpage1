//DOM elements
const time = document.getElementById('time');
 greeting = document.getElementById('greeting');
 neme = document.getElementById('name');
 focus = document.getElementById('focus');

//
const showAmPm = true;

// Show Time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    
    //12hour Format
    hour = hour % 12 || 12;

    //Output time
    time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n){
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background and Greeting
function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12){
        //Morning
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18){
        //Afternoon
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('./images/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

//Get Name
function getName(){
    if(localStorage.getItem('logname') === null) {
        logname.textContent = '[Enter Name]';
    } else {
        logname.textContent = localStorage.getItem('logname');
    }
}

//Set Name
function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('logname', e.target.innerText);
        }
    } else {
        localStorage.setItem('logname', e.target.innerText);
    } 
}

//Get focus
function getFocus(){
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    } 
}

logname.addEventListener('keypress', setName);
logname.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();