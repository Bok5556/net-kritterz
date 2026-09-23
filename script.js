 function sayOne()  {alert("All Developmental news & updates can be found here.--------------------------------------------------\nNET KRITTERZ DEV LOG\n--------------------------------------------------\n\nNOW BUILDING - v1.0 | Days 40-50\nTitle: Building The Interface\n\nI built the main game box, learned how to position elements using CSS, improved text styling, and started creating the pet naming screen.\n\nNet Kritterz is beginning to look more like a real game instead of just a collection of code.\n\n--------------------------------------------------\nNext Up: Days 51-60 - Connecting The Naming");}
                                  
     function sayTwo() {alert("Get ready to adopt, raise, and love your new digital petz! Here is a sneak peek at what you can do:\n•Play fun mini-games to earn Kritter-Kash🤑🤑\n•Dress them up in snazzy and fun outfits💲💲💲\n•Buy them yummy treats🍬🍭🍖🍗  And keep them HAPPY😊😊  Coming soon! "); }  
 function sayThree() {alert("the Current GAME VERSION: 0.0.7");}

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