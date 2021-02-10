
const getFlag = async () => {
    const api = "https://restcountries.eu/rest/v2/all";

    // fetch(api)
    // .then((response) => response.json())
    // .then((data) => display(data))
    // .catch((error) => console.log("error ",error ));

    let response = await fetch(api);
    let result = await response.json();
    display(result);
    // console.log(result);
  };
  
let display = (result) => {
  let flagDataID = document.getElementById("flagData");

    result.forEach(item => {
        let card = document.createElement("div");
        card.setAttribute("class","data-flag");
        card.innerHTML = `
            <img src="${item.flag}" alt="">
            <p>${item.name}</p>
        `;

        flagDataID.appendChild(card);

    });
  console.log(result);
}

getFlag();