'use strict';

const setPlayerCount = document.getElementById("buttonPlayerCountSubmit");
setPlayerCount.addEventListener('click', async () =>
{
    console.log("Group button pressed.");
    
    let playerCount = document.getElementById("dropdownSelectPlayerCount").value;

    let seatA1 = document.getElementById("imageGroupPageSeatA1"); let seatA1c = document.getElementById("imageGroupPageSeatA1c");
    let seatA2 = document.getElementById("imageGroupPageSeatA2"); let seatA2c = document.getElementById("imageGroupPageSeatA2c");
    let seatA3 = document.getElementById("imageGroupPageSeatA3"); let seatA3c = document.getElementById("imageGroupPageSeatA3c");
    let seatA4 = document.getElementById("imageGroupPageSeatA4"); let seatA4c = document.getElementById("imageGroupPageSeatA4c");
    let seatA5 = document.getElementById("imageGroupPageSeatA5"); let seatA5c = document.getElementById("imageGroupPageSeatA5c");

    let seatB1 = document.getElementById("imageGroupPageSeatB1"); let seatB1c = document.getElementById("imageGroupPageSeatB1c");
    let seatB2 = document.getElementById("imageGroupPageSeatB2"); let seatB2c = document.getElementById("imageGroupPageSeatB2c");
    let seatB3 = document.getElementById("imageGroupPageSeatB3"); let seatB3c = document.getElementById("imageGroupPageSeatB3c");
    let seatB4 = document.getElementById("imageGroupPageSeatB4"); let seatB4c = document.getElementById("imageGroupPageSeatB4c");
    let seatB5 = document.getElementById("imageGroupPageSeatB5"); let seatB5c = document.getElementById("imageGroupPageSeatB5c");

    let arrayOfAllPrimarySeats = [seatA1, seatA2, seatA3, seatA4, seatA5, seatB1, seatB2, seatB3, seatB4, seatB5];
    let arrayOfAllComplementarySeats = [seatA1c, seatA2c, seatA3c, seatA4c, seatA5c, seatB1c, seatB2c, seatB3c, seatB4c, seatB5c];

    for(let i = 0; i < arrayOfAllPrimarySeats; i++)
    {
        if(arrayOfAllComplementarySeats[i].style.display == "block")
        {
            arrayOfAllComplementarySeats[i].style.display = "none";
        }
    }

    loopThroughSeats(playerCount, arrayOfAllPrimarySeats, arrayOfAllComplementarySeats);
});

function loopThroughSeats(playerCount, arrayOfAllPrimarySeats)
{
    let imagesToChange = [];

    for(let i = 0; i < arrayOfAllPrimarySeats.length; i++)
    {
        if(i < playerCount)
        {
            arrayOfAllPrimarySeats[i].style.display = "block";
            imagesToChange.push(arrayOfAllPrimarySeats[i].id);
        }else
        {
            arrayOfAllPrimarySeats[i].style.display = "none";
        }
    }

    groupAPIBuild(imagesToChange);
}