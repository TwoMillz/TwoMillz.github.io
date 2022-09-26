const selectGrabNewCardWhichSide = document.getElementById("selectNewCardWhichSide");
selectGrabNewCardWhichSide.onchange = function()
{
    console.log(selectGrabNewCardWhichSide.value);
}

const textGrabNewCardName = document.getElementById("textNewCardName");
textGrabNewCardName.onchange = function()
{
    console.log(textGrabNewCardName.value);
}

const textGrabNewCardSet = document.getElementById("textNewCardSet");
textGrabNewCardSet.onchange = function()
{
    console.log(textGrabNewCardSet.value);
}

const selectGrabNewCardStyle = document.getElementById("selectNewCardStyle");
selectGrabNewCardStyle.onchange = function()
{
    console.log(selectGrabNewCardStyle.value);
}

const textGrabNewCardQuantity = document.getElementById("textNewCardQuantity");
textGrabNewCardQuantity.onchange = function()
{
    console.log(textGrabNewCardQuantity.value);
}

const tdTopGrandTotal = document.getElementById("tdTableFooterTopDollars");
const tdBottomGrandTotal = document.getElementById("tdTableFooterBottomDollars");
let topGrandTotal = Number("0");
let bottomGrandTotal = Number("0");

const buttonAddCard = document.getElementById("buttonNewCardAdd");
buttonAddCard.addEventListener('click', async () =>
{
    let tableBody;

    if(selectGrabNewCardWhichSide.value == "top")
    {
        tableBody = document.getElementById("tableTop").getElementsByTagName('tbody')[0];
    }else
    {
        tableBody = document.getElementById("tableBottom").getElementsByTagName('tbody')[0];
    }

    let newRow = tableBody.insertRow();
    let newCell = newRow.insertCell();
    let newValue = document.createTextNode(textGrabNewCardName.value);
    console.log(newValue);
    newCell.appendChild(newValue);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(textGrabNewCardSet.value);
    console.log(newValue);
    newCell.appendChild(newValue);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(selectGrabNewCardStyle.value);
    console.log(newValue);
    newCell.appendChild(newValue);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(textGrabNewCardQuantity.value);
    console.log(newValue);
    newCell.appendChild(newValue);

    let styleAddendum;
    switch(selectGrabNewCardStyle.value)
    {
        case "foil":
            styleAddendum = "+is%3Afoil";
            break;
        case "fullArt":
            styleAddendum = "+is%3Afullart"
            break;
        case "regular":
            styleAddendum = "";
            break;
        default:
            styleAddendum = "";
            break;
    }

    let request = "https://api.scryfall.com/cards/named?fuzzy=" + textGrabNewCardName.value + "set%3A" + textGrabNewCardSet.value + styleAddendum;
    let response = await fetch(request);
    let jsonObject = await response.json();
    let price = jsonObject.prices.usd;

    newCell = newRow.insertCell();
    newValue = document.createTextNode(price);
    console.log(newValue);
    newCell.appendChild(newValue);

    if(selectGrabNewCardWhichSide.value == "top")
    {
        topGrandTotal += Number(price);
        tdTopGrandTotal.innerHTML = topGrandTotal;
    }else
    {
        bottomGrandTotal += Number(price);
        tdBottomGrandTotal.innerHTML = bottomGrandTotal;
    }

    selectGrabNewCardWhichSide.value = "";
    textGrabNewCardName.value = "";
    textGrabNewCardSet.value = "";
    selectGrabNewCardStyle.value = "";
    textGrabNewCardQuantity.value = "";
});