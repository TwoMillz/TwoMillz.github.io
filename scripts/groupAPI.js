'use strict';

function groupAPIBuild(passedSeatArray)
{
    for(let i = 0; i < passedSeatArray.length; i++)
    {
        groupAPICalls(passedSeatArray[i]);
    }
}

async function groupAPICalls(seatID)
{
    let request = buildAPIRequest();
    let response = await fetch(request);
    let jsonObject = await response.json();
    
    let imageURI = jsonObject.image_uris.normal;
    let imageToChange = document.getElementById(seatID);
    imageToChange.src=imageURI;

    let comName = jsonObject.name;
    let commanderName = comName;

    let oracleText = jsonObject.oracle_text;
    let commanderType = oracleParser(oracleText);

    let complementSeat = document.getElementById(seatID + 'c');

    if(commanderType != "solo")
    {
        complementSeat.style.display = "block";
        groupComplementCall(commanderName, commanderType, complementSeat.id);
    }
}

async function groupComplementCall(commanderName, commanderType, seatID)
{
    let request = buildSecondAPI(commanderName, commanderType);
    let response = await fetch(request);
    let jsonObject = await response.json();
    
    let imageURI = jsonObject.image_uris.normal;
    let comImgR = document.getElementById(seatID);
    comImgR.src=imageURI;
};