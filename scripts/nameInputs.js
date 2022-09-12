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

const arrayOfTextPlayerNames = [textPlayer1Name, textPlayer2Name, textPlayer3Name, textPlayer4Name, textPlayer5Name, textPlayer6Name, textPlayer7Name, textPlayer8Name, textPlayer9Name, textPlayer10Name];
const arrayOfLabelPlayerNames = [labelPlayer1Name, labelPlayer2Name, labelPlayer3Name, labelPlayer4Name, labelPlayer5Name, labelPlayer6Name, labelPlayer7Name, labelPlayer8Name, labelPlayer9Name, labelPlayer10Name];

const playerCountDropdown = document.getElementById("dropdownSelectPlayerCount");
playerCountDropdown.onchange = function()
{
    console.log(labelPlayer1Name);
    console.log(arrayOfLabelPlayerNames[0]);
    console.log(arrayOfLabelPlayerNames);
    let playerCountNumber = playerCountDropdown.value
    for(let i = 0; i < arrayOfTextPlayerNames.length; i++)
    {
        if(i < playerCountNumber)
        {
            arrayOfTextPlayerNames[i].style.display = "block";
            arrayOfLabelPlayerNames[i].style.display = "block";
        }else
        {
            console.log("loop " + i + " is NOT less than " + playerCountNumber);
            console.log("text: " + arrayOfTextPlayerNames[i] + "  label: " + arrayOfLabelPlayerNames[i]);
            arrayOfTextPlayerNames[i].style.display = "none";
            arrayOfLabelPlayerNames[i].style.display = "none";
        }
    }
};