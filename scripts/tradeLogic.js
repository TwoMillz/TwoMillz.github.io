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
let topGrandTotal = Number(0);
let bottomGrandTotal = Number(0);

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
    let deleteRowButton = document.createElement('button');
    deleteRowButton.textContent = "remove";
    deleteRowButton.onclick = function(event)
    {
        RemoveRow(this);
    };
    newCell.appendChild(deleteRowButton);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(textGrabNewCardName.value);
    newCell.appendChild(newValue);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(textGrabNewCardSet.value);
    newCell.appendChild(newValue);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(selectGrabNewCardStyle.value);
    newCell.appendChild(newValue);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(textGrabNewCardQuantity.value);
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

    let adjustedPrice = Number(price).toFixed(2) * Number(textGrabNewCardQuantity.value).toFixed(2);

    newCell = newRow.insertCell();
    newValue = document.createTextNode(Number(adjustedPrice).toFixed(2));
    console.log(newValue);
    newCell.appendChild(newValue);

    if(selectGrabNewCardWhichSide.value == "top")
    {
        topGrandTotal += Number(adjustedPrice);
        tdTopGrandTotal.innerHTML = Number(topGrandTotal).toFixed(2);
    }else
    {
        bottomGrandTotal += Number(adjustedPrice);
        tdBottomGrandTotal.innerHTML = Number(bottomGrandTotal).toFixed(2);
    }

    selectGrabNewCardWhichSide.value = "";
    textGrabNewCardName.value = "";
    textGrabNewCardSet.value = "";
    selectGrabNewCardStyle.value = "";
    textGrabNewCardQuantity.value = "";
});

function RemoveRow(button)
{
    let buttonCell = button.parentNode;
    let buttonRow = buttonCell.parentNode;
    let buttonBody = buttonRow.parentNode;
    let buttonTable = buttonBody.parentNode;
    console.log(buttonTable.id);

    let cellsInRow = buttonRow.getElementsByTagName("td");
    let cardValue = cellsInRow[(cellsInRow.length - 1)];
    console.log(cardValue.innerHTML);

    if(buttonTable.id == "tableTop")
    {
        topGrandTotal -= Number(cardValue.innerHTML);
        tdTopGrandTotal.innerHTML = Number(topGrandTotal).toFixed(2);
    }else
    {
        bottomGrandTotal -= Number(cardValue.innerHTML);
        tdBottomGrandTotal.innerHTML = Number(bottomGrandTotal).toFixed(2);
    }

    buttonRow.remove();
}