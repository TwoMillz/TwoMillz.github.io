'use strict';

const setPlayerCount = document.getElementById("buttonPlayerCountSubmit");


// setPlayerCount.addEventListener('click', async () =>
// {
//     console.log("Group button pressed.");
    
//     let playerCount = document.getElementById("dropdownSelectPlayerCount").value;

//     let seatA1 = document.getElementById("imageGroupPageSeatA1");
//     let seatA2 = document.getElementById("imageGroupPageSeatA2");
//     let seatA3 = document.getElementById("imageGroupPageSeatA3");
//     let seatA4 = document.getElementById("imageGroupPageSeatA4");
//     let seatA5 = document.getElementById("imageGroupPageSeatA5");

//     let seatA1c = document.getElementById("imageGroupPageSeatA1");
//     let seatA2c = document.getElementById("imageGroupPageSeatA2");
//     let seatA3c = document.getElementById("imageGroupPageSeatA3");
//     let seatA4c = document.getElementById("imageGroupPageSeatA4");
//     let seatA5c = document.getElementById("imageGroupPageSeatA5");

//     let seatB1 = document.getElementById("imageGroupPageSeatB1");
//     let seatB2 = document.getElementById("imageGroupPageSeatB2");
//     let seatB3 = document.getElementById("imageGroupPageSeatB3");
//     let seatB4 = document.getElementById("imageGroupPageSeatB4");
//     let seatB5 = document.getElementById("imageGroupPageSeatB5");

//     let seatB1c = document.getElementById("imageGroupPageSeatB1");
//     let seatB2c = document.getElementById("imageGroupPageSeatB2");
//     let seatB3c = document.getElementById("imageGroupPageSeatB3");
//     let seatB4c = document.getElementById("imageGroupPageSeatB4");
//     let seatB5c = document.getElementById("imageGroupPageSeatB5");
    
//     if(seatA1c.style.display == "block"){ seatA1c.style.display = "none"; };
//     if(seatA2c.style.display == "block"){ seatA2c.style.display = "none"; };
//     if(seatA3c.style.display == "block"){ seatA3c.style.display = "none"; };
//     if(seatA4c.style.display == "block"){ seatA4c.style.display = "none"; };
//     if(seatA5c.style.display == "block"){ seatA5c.style.display = "none"; };

//     if(seatB1c.style.display == "block"){ seatB1c.style.display = "none"; };
//     if(seatB2c.style.display == "block"){ seatB2c.style.display = "none"; };
//     if(seatB3c.style.display == "block"){ seatB3c.style.display = "none"; };
//     if(seatB4c.style.display == "block"){ seatB4c.style.display = "none"; };
//     if(seatB5c.style.display == "block"){ seatB5c.style.display = "none"; };
    
//     let arrayOfSeats = [seatA1.id, seatA2.id];

//     switch(playerCount)
//     {
//         case '2':
//             //2&0
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "none";
//             seatA4.style.display = "none";
//             seatA5.style.display = "none";
            
//             seatB1.style.display = "none";
//             seatB2.style.display = "none";
//             seatB3.style.display = "none";
//             seatB4.style.display = "none";
//             seatB5.style.display = "none";
//             break;
//         case '3':
//             //3&0
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "none";
//             seatA5.style.display = "none";
            
//             seatB1.style.display = "none";
//             seatB2.style.display = "none";
//             seatB3.style.display = "none";
//             seatB4.style.display = "none";
//             seatB5.style.display = "none";
//             arrayOfSeats.push(seatA2.id, seatA3.id);
//             break;
//         case '4':
//             //4&0    
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "block";
//             seatA5.style.display = "none";
            
//             seatB1.style.display = "none";
//             seatB2.style.display = "none";
//             seatB3.style.display = "none";
//             seatB4.style.display = "none";
//             seatB5.style.display = "none";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id);
//             break;
//         case '5':
//             //3&2
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "none";
//             seatA5.style.display = "none";

//             seatB1.style.display = "block";
//             seatB2.style.display = "block";
//             seatB3.style.display = "none";
//             seatB4.style.display = "none";
//             seatB5.style.display = "none";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatB1.id, seatB2.id);
//             break;
//         case '6':
//             //3&3
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "none";
//             seatA5.style.display = "none";

//             seatB1.style.display = "block";
//             seatB2.style.display = "block";
//             seatB3.style.display = "block";
//             seatB4.style.display = "none";
//             seatB5.style.display = "none";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatB1.id, seatB2.id, seatB3.id);
//             break;
//         case '7':
//             //4&3
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "block";
//             seatA5.style.display = "none";

//             seatB1.style.display = "block";
//             seatB2.style.display = "block";
//             seatB3.style.display = "block";
//             seatB4.style.display = "none";
//             seatB5.style.display = "none";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatB1.id, seatB2.id, seatB3.id);
//             break;
//         case '8':
//             //4&4
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "block";
//             seatA5.style.display = "none";

//             seatB1.style.display = "block";
//             seatB2.style.display = "block";
//             seatB3.style.display = "block";
//             seatB4.style.display = "block";
//             seatB5.style.display = "none";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id);
//             break;
//         case '9':
//             //5&4
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "block";
//             seatA5.style.display = "block";

//             seatB1.style.display = "block";
//             seatB2.style.display = "block";
//             seatB3.style.display = "block";
//             seatB4.style.display = "block";
//             seatB5.style.display = "none";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatA5.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id);
//             break;
//         case '10':
//             //5&5
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "block";
//             seatA5.style.display = "block";

//             seatB1.style.display = "block";
//             seatB2.style.display = "block";
//             seatB3.style.display = "block";
//             seatB4.style.display = "block";
//             seatB5.style.display = "block";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatA5.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id, seatB5.id);
//             break;
//         default:
//             //5&5
//             seatA1.style.display = "block";
//             seatA2.style.display = "block";
//             seatA3.style.display = "block";
//             seatA4.style.display = "block";
//             seatA5.style.display = "block";

//             seatB1.style.display = "block";
//             seatB2.style.display = "block";
//             seatB3.style.display = "block";
//             seatB4.style.display = "block";
//             seatB5.style.display = "block";
//             arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatA5.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id, seatB5.id);
//             break;
//     }

//     groupAPIBuild(arrayOfSeats);
// });



async function buttonPlayerCountSubmit()
{
    console.log("Group button pressed.");
    
    let playerCount = document.getElementById("dropdownSelectPlayerCount").value;

    let seatA1 = document.getElementById("imageGroupPageSeatA1");
    let seatA2 = document.getElementById("imageGroupPageSeatA2");
    let seatA3 = document.getElementById("imageGroupPageSeatA3");
    let seatA4 = document.getElementById("imageGroupPageSeatA4");
    let seatA5 = document.getElementById("imageGroupPageSeatA5");

    let seatA1c = document.getElementById("imageGroupPageSeatA1");
    let seatA2c = document.getElementById("imageGroupPageSeatA2");
    let seatA3c = document.getElementById("imageGroupPageSeatA3");
    let seatA4c = document.getElementById("imageGroupPageSeatA4");
    let seatA5c = document.getElementById("imageGroupPageSeatA5");

    let seatB1 = document.getElementById("imageGroupPageSeatB1");
    let seatB2 = document.getElementById("imageGroupPageSeatB2");
    let seatB3 = document.getElementById("imageGroupPageSeatB3");
    let seatB4 = document.getElementById("imageGroupPageSeatB4");
    let seatB5 = document.getElementById("imageGroupPageSeatB5");

    let seatB1c = document.getElementById("imageGroupPageSeatB1");
    let seatB2c = document.getElementById("imageGroupPageSeatB2");
    let seatB3c = document.getElementById("imageGroupPageSeatB3");
    let seatB4c = document.getElementById("imageGroupPageSeatB4");
    let seatB5c = document.getElementById("imageGroupPageSeatB5");
    
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
    
    let arrayOfSeats = [seatA1.id, seatA2.id];

    switch(playerCount)
    {
        case '2':
            //2&0
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "none";
            seatA4.style.display = "none";
            seatA5.style.display = "none";
            
            seatB1.style.display = "none";
            seatB2.style.display = "none";
            seatB3.style.display = "none";
            seatB4.style.display = "none";
            seatB5.style.display = "none";
            break;
        case '3':
            //3&0
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "none";
            seatA5.style.display = "none";
            
            seatB1.style.display = "none";
            seatB2.style.display = "none";
            seatB3.style.display = "none";
            seatB4.style.display = "none";
            seatB5.style.display = "none";
            arrayOfSeats.push(seatA2.id, seatA3.id);
            break;
        case '4':
            //4&0    
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "block";
            seatA5.style.display = "none";
            
            seatB1.style.display = "none";
            seatB2.style.display = "none";
            seatB3.style.display = "none";
            seatB4.style.display = "none";
            seatB5.style.display = "none";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id);
            break;
        case '5':
            //3&2
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "none";
            seatA5.style.display = "none";

            seatB1.style.display = "block";
            seatB2.style.display = "block";
            seatB3.style.display = "none";
            seatB4.style.display = "none";
            seatB5.style.display = "none";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatB1.id, seatB2.id);
            break;
        case '6':
            //3&3
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "none";
            seatA5.style.display = "none";

            seatB1.style.display = "block";
            seatB2.style.display = "block";
            seatB3.style.display = "block";
            seatB4.style.display = "none";
            seatB5.style.display = "none";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatB1.id, seatB2.id, seatB3.id);
            break;
        case '7':
            //4&3
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "block";
            seatA5.style.display = "none";

            seatB1.style.display = "block";
            seatB2.style.display = "block";
            seatB3.style.display = "block";
            seatB4.style.display = "none";
            seatB5.style.display = "none";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatB1.id, seatB2.id, seatB3.id);
            break;
        case '8':
            //4&4
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "block";
            seatA5.style.display = "none";

            seatB1.style.display = "block";
            seatB2.style.display = "block";
            seatB3.style.display = "block";
            seatB4.style.display = "block";
            seatB5.style.display = "none";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id);
            break;
        case '9':
            //5&4
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "block";
            seatA5.style.display = "block";

            seatB1.style.display = "block";
            seatB2.style.display = "block";
            seatB3.style.display = "block";
            seatB4.style.display = "block";
            seatB5.style.display = "none";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatA5.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id);
            break;
        case '10':
            //5&5
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "block";
            seatA5.style.display = "block";

            seatB1.style.display = "block";
            seatB2.style.display = "block";
            seatB3.style.display = "block";
            seatB4.style.display = "block";
            seatB5.style.display = "block";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatA5.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id, seatB5.id);
            break;
        default:
            //5&5
            seatA1.style.display = "block";
            seatA2.style.display = "block";
            seatA3.style.display = "block";
            seatA4.style.display = "block";
            seatA5.style.display = "block";

            seatB1.style.display = "block";
            seatB2.style.display = "block";
            seatB3.style.display = "block";
            seatB4.style.display = "block";
            seatB5.style.display = "block";
            arrayOfSeats.push(seatA2.id, seatA3.id, seatA4.id, seatA5.id, seatB1.id, seatB2.id, seatB3.id, seatB4.id, seatB5.id);
            break;
    }

    groupAPIBuild(arrayOfSeats);
};