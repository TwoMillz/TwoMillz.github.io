'use strict';

const textPlayer1Name = document.getElementById("textPlayer1Name"); const labelPlayer1Name = document.getElementById("labelPlayer1Name");
const textPlayer2Name = document.getElementById("textPlayer2Name"); const labelPlayer2Name = document.getElementById("labelPlayer2Name");
const textPlayer3Name = document.getElementById("textPlayer3Name"); const labelPlayer3Name = document.getElementById("labelPlayer3Name");
const textPlayer4Name = document.getElementById("textPlayer4Name"); const labelPlayer4Name = document.getElementById("labelPlayer4Name");
const textPlayer5Name = document.getElementById("textPlayer5Name"); const labelPlayer5Name = document.getElementById("labelPlayer5Name");
const textPlayer6Name = document.getElementById("textPlayer6Name"); const labelPlayer6Name = document.getElementById("labelPlayer6Name");
const textPlayer7Name = document.getElementById("textPlayer7Name"); const labelPlayer7Name = document.getElementById("labelPlayer7Name");
const textPlayer8Name = document.getElementById("textPlayer8Name"); const labelPlayer8Name = document.getElementById("labelPlayer8Name");
const textPlayer9Name = document.getElementById("textPlayer9Name"); const labelPlayer9Name = document.getElementById("labelPlayer9Name");
const textPlayer10Name = document.getElementById("textPlayer10Name"); const labelPlayer10Name = document.getElementById("labelPlayer10Name");

const playerCount = document.getElementById("dropdownSelectPlayerCount");
playerCount.onchange = function()
{
    switch(playerCount.value)
    {
        case '2':
            textPlayer3Name.style.display = "none"; labelPlayer3Name.style.display = "none";
            textPlayer4Name.style.display = "none"; labelPlayer4Name.style.display = "none";
            textPlayer5Name.style.display = "none"; labelPlayer5Name.style.display = "none";
            textPlayer6Name.style.display = "none"; labelPlayer6Name.style.display = "none";
            textPlayer7Name.style.display = "none"; labelPlayer7Name.style.display = "none";
            textPlayer8Name.style.display = "none"; labelPlayer8Name.style.display = "none";
            textPlayer9Name.style.display = "none"; labelPlayer9Name.style.display = "none";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '3':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "none"; labelPlayer4Name.style.display = "none";
            textPlayer5Name.style.display = "none"; labelPlayer5Name.style.display = "none";
            textPlayer6Name.style.display = "none"; labelPlayer6Name.style.display = "none";
            textPlayer7Name.style.display = "none"; labelPlayer7Name.style.display = "none";
            textPlayer8Name.style.display = "none"; labelPlayer8Name.style.display = "none";
            textPlayer9Name.style.display = "none"; labelPlayer9Name.style.display = "none";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '4':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "block"; labelPlayer4Name.style.display = "block";
            textPlayer5Name.style.display = "none"; labelPlayer5Name.style.display = "none";
            textPlayer6Name.style.display = "none"; labelPlayer6Name.style.display = "none";
            textPlayer7Name.style.display = "none"; labelPlayer7Name.style.display = "none";
            textPlayer8Name.style.display = "none"; labelPlayer8Name.style.display = "none";
            textPlayer9Name.style.display = "none"; labelPlayer9Name.style.display = "none";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '5':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "block"; labelPlayer4Name.style.display = "block";
            textPlayer5Name.style.display = "block"; labelPlayer5Name.style.display = "block";
            textPlayer6Name.style.display = "none"; labelPlayer6Name.style.display = "none";
            textPlayer7Name.style.display = "none"; labelPlayer7Name.style.display = "none";
            textPlayer8Name.style.display = "none"; labelPlayer8Name.style.display = "none";
            textPlayer9Name.style.display = "none"; labelPlayer9Name.style.display = "none";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '6':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "block"; labelPlayer4Name.style.display = "block";
            textPlayer5Name.style.display = "block"; labelPlayer5Name.style.display = "block";
            textPlayer6Name.style.display = "block"; labelPlayer6Name.style.display = "block";
            textPlayer7Name.style.display = "none"; labelPlayer7Name.style.display = "none";
            textPlayer8Name.style.display = "none"; labelPlayer8Name.style.display = "none";
            textPlayer9Name.style.display = "none"; labelPlayer9Name.style.display = "none";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '7':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "block"; labelPlayer4Name.style.display = "block";
            textPlayer5Name.style.display = "block"; labelPlayer5Name.style.display = "block";
            textPlayer6Name.style.display = "block"; labelPlayer6Name.style.display = "block";
            textPlayer7Name.style.display = "block"; labelPlayer7Name.style.display = "block";
            textPlayer8Name.style.display = "none"; labelPlayer8Name.style.display = "none";
            textPlayer9Name.style.display = "none"; labelPlayer9Name.style.display = "none";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '8':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "block"; labelPlayer4Name.style.display = "block";
            textPlayer5Name.style.display = "block"; labelPlayer5Name.style.display = "block";
            textPlayer6Name.style.display = "block"; labelPlayer6Name.style.display = "block";
            textPlayer7Name.style.display = "block"; labelPlayer7Name.style.display = "block";
            textPlayer8Name.style.display = "block"; labelPlayer8Name.style.display = "block";
            textPlayer9Name.style.display = "none"; labelPlayer9Name.style.display = "none";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '9':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "block"; labelPlayer4Name.style.display = "block";
            textPlayer5Name.style.display = "block"; labelPlayer5Name.style.display = "block";
            textPlayer6Name.style.display = "block"; labelPlayer6Name.style.display = "block";
            textPlayer7Name.style.display = "block"; labelPlayer7Name.style.display = "block";
            textPlayer8Name.style.display = "block"; labelPlayer8Name.style.display = "block";
            textPlayer9Name.style.display = "block"; labelPlayer9Name.style.display = "block";
            textPlayer10Name.style.display = "none"; labelPlayer10Name.style.display = "none";
            break;
        case '10':
            textPlayer3Name.style.display = "block"; labelPlayer3Name.style.display = "block";
            textPlayer4Name.style.display = "block"; labelPlayer4Name.style.display = "block";
            textPlayer5Name.style.display = "block"; labelPlayer5Name.style.display = "block";
            textPlayer6Name.style.display = "block"; labelPlayer6Name.style.display = "block";
            textPlayer7Name.style.display = "block"; labelPlayer7Name.style.display = "block";
            textPlayer8Name.style.display = "block"; labelPlayer8Name.style.display = "block";
            textPlayer9Name.style.display = "block"; labelPlayer9Name.style.display = "block";
            textPlayer10Name.style.display = "block"; labelPlayer10Name.style.display = "block";
            break;
        default:
            console.log("playerCount.value switch has defaulted");
            break;
    }
};