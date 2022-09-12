'use strict';

const trigger = document.getElementById("buttonPlayerNamesSubmit");
trigger.addEventListener('click', async () =>
{
    console.log("Name button pressed.");

    /*  I'm aware these declarations are awful and ugly, but I got tired of scrolling 500 lines to get
        to the switch (which was already way too long itself)  */

    let playerCount = document.getElementById("dropdownSelectPlayerCount").value;

    let player1Name = document.getElementById("textPlayer1Name").value; let player2Name = document.getElementById("textPlayer2Name").value;
    let player3Name = document.getElementById("textPlayer3Name").value; let player4Name = document.getElementById("textPlayer4Name").value;
    let player5Name = document.getElementById("textPlayer5Name").value; let player6Name = document.getElementById("textPlayer6Name").value;
    let player7Name = document.getElementById("textPlayer7Name").value; let player8Name = document.getElementById("textPlayer8Name").value;
    let player9Name = document.getElementById("textPlayer9Name").value; let player10Name = document.getElementById("textPlayer10Name").value;

    let seatA1 = document.getElementById("imageGroupPageSeatA1"); let seatA1c = document.getElementById("imageGroupPageSeatA1"); let seatNameA1 = document.getElementById("labelNameSeatA1WhoIs");
    let seatA2 = document.getElementById("imageGroupPageSeatA2"); let seatA2c = document.getElementById("imageGroupPageSeatA2"); let seatNameA2 = document.getElementById("labelNameSeatA2WhoIs");
    let seatA3 = document.getElementById("imageGroupPageSeatA3"); let seatA3c = document.getElementById("imageGroupPageSeatA3"); let seatNameA3 = document.getElementById("labelNameSeatA3WhoIs");
    let seatA4 = document.getElementById("imageGroupPageSeatA4"); let seatA4c = document.getElementById("imageGroupPageSeatA4"); let seatNameA4 = document.getElementById("labelNameSeatA4WhoIs");
    let seatA5 = document.getElementById("imageGroupPageSeatA5"); let seatA5c = document.getElementById("imageGroupPageSeatA5"); let seatNameA5 = document.getElementById("labelNameSeatA5WhoIs");

    let seatB1 = document.getElementById("imageGroupPageSeatB1"); let seatB1c = document.getElementById("imageGroupPageSeatB1"); let seatNameB1 = document.getElementById("labelNameSeatB1WhoIs");
    let seatB2 = document.getElementById("imageGroupPageSeatB2"); let seatB2c = document.getElementById("imageGroupPageSeatB2"); let seatNameB2 = document.getElementById("labelNameSeatB2WhoIs");
    let seatB3 = document.getElementById("imageGroupPageSeatB3"); let seatB3c = document.getElementById("imageGroupPageSeatB3"); let seatNameB3 = document.getElementById("labelNameSeatB3WhoIs");
    let seatB4 = document.getElementById("imageGroupPageSeatB4"); let seatB4c = document.getElementById("imageGroupPageSeatB4"); let seatNameB4 = document.getElementById("labelNameSeatB4WhoIs");
    let seatB5 = document.getElementById("imageGroupPageSeatB5"); let seatB5c = document.getElementById("imageGroupPageSeatB5"); let seatNameB5 = document.getElementById("labelNameSeatB5WhoIs");

    if(seatA1c.style.display == "block"){ seatA1c.style.display = "none"; };
    if(seatA2c.style.display == "block"){ seatA2c.style.display = "none"; };
    if(seatA3c.style.display == "block"){ seatA3c.style.display = "none"; };
    if(seatA4c.style.display == "block"){ seatA4c.style.display = "none"; };
    if(seatA5c.style.display == "block"){ seatA5c.style.display = "none"; };

    if(seatB1c.style.display == "block"){ seatB1c.style.display = "none"; };
    if(seatB2c.style.display == "block"){ seatB2c.style.display = "none"; };
    if(seatB3c.style.display == "block"){ seatB3c.style.display = "none"; };
    if(seatB4c.style.display == "block"){ seatB4c.style.display = "none"; };
    if(seatB5c.style.display == "block"){ seatB5c.style.display = "none"; };

    if(seatNameA1.style.display == "block"){ seatNameA1.style.display = "none"; };
    if(seatNameA2.style.display == "block"){ seatNameA2.style.display = "none"; };
    if(seatNameA3.style.display == "block"){ seatNameA3.style.display = "none"; };
    if(seatNameA4.style.display == "block"){ seatNameA4.style.display = "none"; };
    if(seatNameA5.style.display == "block"){ seatNameA5.style.display = "none"; };

    if(seatNameB1.style.display == "block"){ seatNameB1.style.display = "none"; };
    if(seatNameB2.style.display == "block"){ seatNameB2.style.display = "none"; };
    if(seatNameB3.style.display == "block"){ seatNameB3.style.display = "none"; };
    if(seatNameB4.style.display == "block"){ seatNameB4.style.display = "none"; };
    if(seatNameB5.style.display == "block"){ seatNameB5.style.display = "none"; };
    
    let arrayOfNames = [player1Name, player2Name, player3Name, player4Name, player5Name, player6Name, player7Name, player8Name, player9Name, player10Name];
    let arrayOfAllPrimarySeats = [seatA1, seatA2, seatA3, seatA4, seatA5, seatB1, seatB2, seatB3, seatB4, seatB5];
    let arrayOfAllComplementarySeats = [seatA1c, seatA2c, seatA3c, seatA4c, seatA5c, seatB1c, seatB2c, seatB3c, seatB4c, seatB5c];
    let arrayOfSeatNameLabels = [seatNameA1, seatNameA2, seatNameA3, seatNameA4, seatNameA5, seatNameB1, seatNameB2, seatNameB3, seatNameB4, seatNameB5];

    arrayOfNames = playerShuffler(arrayOfNames);
    loopThroughSeats(playerCount, arrayOfNames, arrayOfAllPrimarySeats, arrayOfAllComplementarySeats, arrayOfSeatNameLabels);
});

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function playerShuffler(nameArray)
{
    let currentIndex = nameArray.length;
    let randomIndex;

    while (currentIndex != 0)
    {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [nameArray[currentIndex], nameArray[randomIndex]] = [nameArray[randomIndex], nameArray[currentIndex]];
    }
    
    return nameArray;
}

function loopThroughSeats(playerCount, arrayOfNames, arrayOfAllPrimarySeats, arrayOfAllComplementarySeats, arrayOfSeatNameLabels)
{
    let arrayOfIncomingPics = [];

    for(let i = 0; i < arrayOfAllPrimarySeats.length; i++)
    {
        if(i < playerCount)
        {
            arrayOfAllPrimarySeats[i].style.display = "block";
            arrayOfSeatNameLabels[i].style.display = "block";
            arrayOfSeatNameLabels[i].innerHTML = arrayOfNames[i];
            arrayOfIncomingPics.push(arrayOfAllPrimarySeats[i].id);
        }else
        {
            let currentSeat = document.getElementById(arrayOfAllPrimarySeats[i].id);
            let currentLabel = document.getElementById(arrayOfSeatNameLabels[i].id);
            currentSeat.style.display = "none";
            currentLabel.style.display = "none";
        }
    }

    groupAPIBuild(arrayOfIncomingPics);
}