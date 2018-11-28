  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBFqN6EdLa8TuLh1HfmFb4U05z8E6NUJ_M",
    authDomain: "tayaltriceproject.firebaseapp.com",
    databaseURL: "https://tayaltriceproject.firebaseio.com",
    projectId: "tayaltriceproject",
    storageBucket: "",
    messagingSenderId: "602740506959"
  };
  firebase.initializeApp(config);

  // Reference Messages Collection
  var messagesRef = firebase.database().ref('messages');  

// Listen for form submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault(); 

   // Get values
   var name = getInputVal('name');
   var email = getInputVal('email');
   // var subject = getInputVal('subject');
   var comment = getInputVal('comment');

 // Save message 
   saveMessage(name, email, comment);
   
// Show alert 
document.querySelector('.alert').style.display = "block";

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
},3000);


// Clear form 
document.getElementById('contactForm').reset(); 
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}


// Save message to firebase 
function saveMessage(name, email, comment){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        comment:comment, 
    }); 
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//scroll navbar

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
              
          } else {
              $('.navbar').removeClass('solid');
              
          }
        });
});

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.nav-link').addClass('solid1');
              
          } else {
              $('.nav-link').removeClass('solid1');
              
          }
        });
});

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar-brand').addClass('solid2');
              
          } else {
              $('.navbar-brand').removeClass('solid2');
              
          }
        });
});

