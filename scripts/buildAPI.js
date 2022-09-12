'use strict';

function buildAPIRequest()
{
    let blackFilter = document.getElementById("checkboxBlackFilter").checked;
    let blackComponent = ""
    if(blackFilter)
    {
        blackComponent = "B";
    }
    
    let blueFilter = document.getElementById("checkboxBlueFilter").checked;
    let blueComponent = "";
    if(blueFilter)
    {
        blueComponent = "U";
    }

    let greenFilter = document.getElementById("checkboxGreenFilter").checked;
    let greenComponent = "";
    if(greenFilter)
    {
        greenComponent = "G";
    }

    let redFilter = document.getElementById("checkboxRedFilter").checked;
    let redComponent = "";
    if(redFilter)
    {
        redComponent = "R";
    }

    let whiteFilter = document.getElementById("checkboxWhiteFilter").checked;
    let whiteComponent = "";
    if(whiteFilter)
    {
        whiteComponent = "W";
    }

    let requestString = "https://api.scryfall.com/cards/random?q=-type%3Aenchantment+is%3Acommander+in:paper+color";

    let colorFilterSelection = document.getElementById("dropdownColorFilter").value;
    switch(colorFilterSelection)
    {
        case "include":
            requestString += ">%3D";
            break;
        case "exactly":
            requestString += "%3D";
            break;
        case "atMost":
            requestString += "<%3D";
            break;
        default:
            requestString += "CHECK";
            break;
    }

    requestString += blackComponent + blueComponent + greenComponent + redComponent + whiteComponent;

    return requestString;
}

function buildSecondAPI(commanderName, commanderType)
{
    let requestString = "https://api.scryfall.com/cards/random?q=is%3Acommander+in:paper";

    switch(commanderType)
    {
        case "background":
            requestString += "+type%3Abackground";
            break;
        case "friendsForever":
            requestString += '+oracle%3A"Friends+forever"';
            break;
        case "genericPartner":
            requestString += "+oracle%3Apartner";
            break;
        case "specificPartner":
            requestString = 'https://api.scryfall.com/cards/random?q=' + '-"'+ commanderName + '"+oracle%3A"' + commanderName + '"';
            break;
        default:
            requestString += "+oracle%3Apartner";
            break;
    }

    return requestString;
}