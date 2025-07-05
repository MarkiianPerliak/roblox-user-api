const searcher = document.querySelector(".searcher")
const submit = document.querySelector(".submit-search")

function createText(data) {
    console.log(data)
    
    // const htmldata = `
    // <h2 class="name">Name: ${data[0].name.official}</h2>
    // <p class="capital">Capital: ${data[0].capital}</p>
    // <p class="languages">Languages: ${data[0].languages}</p>
    // <p class="currencies">Currencies: ${data[0].currencies.name}</p>
    // <p class="Population">Population: ${data[0].population}</p>
    // <p class="continent">Continent: ${data[0].continents}</p>
    // <p class="square-km">Area: ${data[0].area}km²</p>
    // `
    // document.body.insertAdjacentHTML("beforeEnd", htmldata)
}

submit.addEventListener("click", (event) => {
    if (searcher.value === "") {
        alert("nuh uh")
    } else {
    const userid = document.querySelector(".searcher").value
    function getUserIDInfo() {
        return fetch(`https://users.roblox.com/v1/users/${userid}`)
    }
    getUserIDInfo().then((result) => result.json()).then((resultdata) => createText(resultdata))
    }
});