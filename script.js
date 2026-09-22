 function sayOne()  {alert("All Developmental news & updates can be found here. --------------------------------------------------\nNET KRITTERZ DEV LOG\n--------------------------------------------------\n\nNOW BUILDING - v0.7 | Days 31-33\nTitle: Accessing Object Properties\n\nI learned how to access pet data using dot notation.\n\nThis lets me read values like name, hunger, and tokens from the pet profile.\n\n--------------------------------------------------\nNext Up: v0.8 | Days 34-36 - Modifying Object Stats\n--------------------------------------------------\n<br>\n<br>");}
                                  
     function sayTwo() {alert("Get ready to adopt, raise, and love your new digital petz! Here is a sneak peek at what you can do:\n•Play fun mini-games to earn Kritter-Kash🤑🤑\n•Dress them up in snazzy and fun outfits💲💲💲\n•Buy them yummy treats🍬🍭🍖🍗  And keep them HAPPY😊😊  Coming soon! "); }  
 function sayThree() {alert("the Current GAME VERSION: 0.0.6");}

function showEULA() {
      if (!localStorage.getItem("eulaAccepted")) {
        document.getElementById("eulaModal").style.display = "block";
      }
    }

    function acceptEULA() {
      localStorage.setItem("eulaAccepted", "true");
      document.getElementById("eulaModal").style.display = "none";
      alert("Thank you! You accepted the EULA.");
    }

    function declineEULA() {
      window.location.href = "EULA REDIRECT.html"; // send player to decline page
    }

    window.onload = showEULA;





    // Get DOM elements
const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("aboutBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal when button is clicked
aboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "flex"; // Changes from 'none' to 'flex' to reveal it
});

// Close modal when "X" is clicked
closeModalBtn.addEventListener("click", () => {
    aboutModal.style.display = "none";
});

// Close modal if user clicks anywhere outside the content box
window.addEventListener("click", (event) => {
    if (event.target === aboutModal) {
        aboutModal.style.display = "none";
    }
});