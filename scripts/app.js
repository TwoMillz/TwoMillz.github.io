'use strict';

/*
    ???apply color restrictions to companions???

    bug: sometimes get a request error (Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'normal'))
    bug: generic partner OG commanders can be paired with a specific partner
    bug: group page; if you have a larger group (say, 10) and any of them have a complementary card (eg partner), then move to a smaller group (say, 2)
        the complementary card doesn't go away
    bug: in group assigned, some names do not appear (random which names)
*/

// const trigger = document.getElementById("buttonHomepageCommander");
// trigger.addEventListener('click', async () =>
// {
//     console.log("Solo button pressed.");
    
//     let divComplementImage = document.getElementById("divHomepageComplementCard");

//     if(divComplementImage.style.display == "block")
//     {
//         divComplementImage.style.display = "none";
//     }

//     let request = buildAPIRequest();
//     let response = await fetch(request);
//     let jsonObject = await response.json();
    
//     let imageURI = jsonObject.image_uris.normal;
//     let comImgL = document.getElementById("imageHomepageCommanderLeft");
//     comImgL.src=imageURI;

//     let comName = jsonObject.name;
//     let commanderName = comName;

//     let oracleText = jsonObject.oracle_text;
//     let commanderType = oracleParser(oracleText);

//     if(commanderType != "solo")
//     {
//         divComplementImage.style.display = "block";
//         commanderComplementCall(commanderName, commanderType);
//     }
// });

async function PickCommander()
{
    console.log("Solo button pressed.");
    
    let divComplementImage = document.getElementById("divHomepageComplementCard");

    if(divComplementImage.style.display == "block")
    {
        divComplementImage.style.display = "none";
    }

    let request = buildAPIRequest();
    let response = await fetch(request);
    let jsonObject = await response.json();
    
    let imageURI = jsonObject.image_uris.normal;
    let comImgL = document.getElementById("imageHomepageCommanderLeft");
    comImgL.src=imageURI;

    let comName = jsonObject.name;
    let commanderName = comName;

    let oracleText = jsonObject.oracle_text;
    let commanderType = oracleParser(oracleText);

    if(commanderType != "solo")
    {
        divComplementImage.style.display = "block";
        commanderComplementCall(commanderName, commanderType);
    }
};

async function commanderComplementCall(commanderName, commanderType)
{
    let request = buildSecondAPI(commanderName, commanderType);
    let response = await fetch(request);
    let jsonObject = await response.json();
    
    let imageURI = jsonObject.image_uris.normal;
    let comImgR = document.getElementById("imageHomepageComplementRight");
    comImgR.src=imageURI;
};