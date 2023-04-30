//DEFAULT
document.getElementById('id01').style.display='block';





var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myAdds");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

var modal = document.getElementById('id01');
document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"){
      if(modal.style.display="block"){
      modal.style.display = "none";
      }
    }
});




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



const items = document.querySelectorAll('.item'),
controls = document.querySelectorAll('.control'),
headerItems = document.querySelectorAll('.item-header'),
descriptionItems = document.querySelectorAll('.item-description'),
activeDelay = .76,
interval = 5000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', e => {slider.clickedControl(e);}));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => {// Increment current slide and add active class
    slider.reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: e => {// Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
    dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => {
      if (index === dataIndex) {// Add active class to corresponding slide
        item.classList.add('active');
      }
    });
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => {// Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: items => {// Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;

    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
      delay;

      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => {// iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      });
    });
  } };


let intervalF = setInterval(slider.nextSlide, interval);
slider.init();













// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);







/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright(){
  document.getElementById("section3").scrollLeft += 400;
}
function scrollleft(){
  document.getElementById("section3").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright4(){
  document.getElementById("section4").scrollLeft += 400;
}
function scrollleft4(){
  document.getElementById("section4").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/






var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


