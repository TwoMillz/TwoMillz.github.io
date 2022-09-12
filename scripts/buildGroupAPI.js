'use strict';

function buildGroupAPIRequest()
{
    let blackFilter = document.getElementById("checkboxGroupBlackFilter").checked;
    let blackComponent = ""
    if(blackFilter)
    {
        blackComponent = "B";
    }
    
    let blueFilter = document.getElementById("checkboxGroupBlueFilter").checked;
    let blueComponent = "";
    if(blueFilter)
    {
        blueComponent = "U";
    }

    let greenFilter = document.getElementById("checkboxGroupGreenFilter").checked;
    let greenComponent = "";
    if(greenFilter)
    {
        greenComponent = "G";
    }

    let redFilter = document.getElementById("checkboxGroupRedFilter").checked;
    let redComponent = "";
    if(redFilter)
    {
        redComponent = "R";
    }

    let whiteFilter = document.getElementById("checkboxGroupWhiteFilter").checked;
    let whiteComponent = "";
    if(whiteFilter)
    {
        whiteComponent = "W";
    }

    let requestString = "https://api.scryfall.com/cards/random?q=-type%3Aenchantment+is%3Acommander+in:paper+color";

    let colorFilterSelection = document.getElementById("dropdownGroupColorFilter").value;
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

function buildSecondGroupAPI(commanderName, commanderType)
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