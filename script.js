 function sayOne()  {alert("All Developmental news & updates can be found here.--------------------------------------------------\nNET KRITTERZ DEV LOG\n--------------------------------------------------\n\nNOW BUILDING - v0.4 | Days 22-24\nTitle: Handling Multiple Moods\n\nI learned how Else If statements work.\n\nPets can now react to multiple conditions instead of only one, making moods feel smarter and more dynamic.\n\n--------------------------------------------------\nNext Up: v0.5 | Days 25-27 - Data Objects\n--------------------------------------------------\n");}
                                  
     function sayTwo() {alert("Get ready to adopt, raise, and love your new digital petz! Here is a sneak peek at what you can do:\n•Play fun mini-games to earn Kritter-Kash🤑🤑\n•Dress them up in snazzy and fun outfits💲💲💲\n•Buy them yummy treats🍬🍭🍖🍗  And keep them HAPPY😊😊  Coming soon! "); }  
 function sayThree() {alert("the Current GAME VERSION: 0.0.3");}

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