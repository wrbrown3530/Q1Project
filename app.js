document.addEventListener('DOMContentLoaded', function(){

const button = document.getElementsByClassName("searchButton")
const userText = document.getElementsByClassName("searchInput")
const output = document.getElementById("output")
button[0].addEventListener("click", function() {

  axios.get(`https://swapi.co/api/people/?search=${userText[0].value}`)
    .then(function(response) {

      axios.get(response.data.results[0].homeworld)
        .then(function(response) {
          output.innerHTML = userText[0].value +" is from the planet "+response.data.name
        })
        .catch(function(error) {

        })
    })
    .catch(function(error) {})

})

})
