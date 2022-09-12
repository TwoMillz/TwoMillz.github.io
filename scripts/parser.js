'use strict';

function oracleParser(oracleText)
{
    let commType = "";
    let checkBackground = oracleText.search("Background");
    let checkFriendsForever = oracleText.search("Friends forever");
    let checkSpecificPartner = oracleText.search("Partner with");
    let checkGenericPartner = oracleText.search("Partner");

    if(checkBackground != -1)
    {
        commType = "background";
    }else
    if(checkFriendsForever != -1)
    {
        commType = "friendsForever";
    }else
    if(checkSpecificPartner != -1)
    {
        commType = "specificPartner";
    }else
    if(checkGenericPartner != -1)
    {
        commType = "genericPartner";
    }else
    {
        commType = "solo";
    }

    return commType;
}