 function sayOne()  {alert("All Developmental news & updates can be found here.--------------------------------------------------\nv0.5 | Days 25-27\nTitle: Grouping Pet Facts\n\nI learned how to use JavaScript objects.\n\nObjects let me keep pet data together in one profile instead of using separate variables.\n\n--------------------------------------------------\nNext Up: v0.6 | Days 28-30 - Building the Profile Structure\n--------------------------------------------------\n<br>\n<br>");}
                                  
     function sayTwo() {alert("Get ready to adopt, raise, and love your new digital petz! Here is a sneak peek at what you can do:\n•Play fun mini-games to earn Kritter-Kash🤑🤑\n•Dress them up in snazzy and fun outfits💲💲💲\n•Buy them yummy treats🍬🍭🍖🍗  And keep them HAPPY😊😊  Coming soon! "); }  
 function sayThree() {alert("the Current GAME VERSION: 0.0.4");}

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