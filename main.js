const questionElem = document.querySelector("#question");
const sendBtn = document.querySelector("#send-btn");
sendBtn.onclick = updateUI;

function updateUI(event) {
    event.preventDefault();

    let data = {
        QUESTION: questionElem.value
    };

    console.log(data);

    const url = `https://api.funtranslations.com/translate/minion.json?text=${data.QUESTION}`;

    fetch(url)
        .then(function(response) {
            // console.log(response);

            return response.json();
        })

        .then(function(jsonData) {
            
            console.log(jsonData);

            let translation = [
            jsonData.contents.translated
            ];
            return translation;
        })

    

    questionElem.value = "";
}

let translatedText = document.querySelector("#translated");
translatedText.innerHTML = translation;

// sendBtn.onclick = pickPokemon;

// function pickPokemon() {
//     let pokemon = {
//         image: jsonData.sprites.front_default
//     }

//     updateUI(pokemon);
// }