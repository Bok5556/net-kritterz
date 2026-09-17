 function sayOne()  {alert("All Developmental news & updates can be found here.--------------------------------------------------\nNET KRITTERZ DEV LOG\n--------------------------------------------------\n\nNOW BUILDING - v0.4 | Days 22-24\nTitle: Handling Multiple Moods\n\nWhat is new in this update:\nI upgraded the mood system so pets can now react to more than one condition.\nUsing Else If statements lets the game check multiple possibilities before choosing the final mood.\n\nThis makes pet reactions feel smarter and prepares the game for more stats in the future.\n\n--------------------------------------------------\nPREVIOUS LOGS\n--------------------------------------------------\n\nv0.3 | Days 19-21 - The Safe Shop Update\nv0.2 | Days 10-18 - Decisions & Pet Moods\nv0.1 | Days 1-9 - The Foundation\nv0.0 | Pre-Dev - Coming Soon Launch\n\n--------------------------------------------------\nNext Up: v0.5 | Days 25-27 - Intro to Data Objects\n--------------------------------------------------\n<br>\n<br>");}
                                  
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