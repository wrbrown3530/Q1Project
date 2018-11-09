document.addEventListener('DOMContentLoaded', function() {

  const button = document.getElementsByClassName("searchButton")
  const userText = document.getElementsByClassName("searchInput")
  const output = document.getElementById("output")
  const searchOutput = document.getElementById("searchOutput")


  button[0].addEventListener("click", function() {
    //initial axios call takes what the user types and sends to the api//
    axios.get(`https://swapi.co/api/people/?search=${userText[0].value}`)
      //second axios call, returns the character's home planet//
      .then(function(response) {
        axios.get(response.data.results[0].homeworld)
          .then(function(response) {
            //search output displayed to the page//
            output.innerHTML = firstLetterToCaps(userText[0].value) + " is from the planet " + response.data.name

          })

          .catch(function(error) {

          })
      })
      // If axios call returns nothing this code is run as an error message//
      .catch(function(error) {
        let num = Math.floor(Math.random() * 4)
        if (num === 0) {
          output.innerHTML = "That's not the character you're looking for"
        } else if (num === 1) {
          output.innerHTML = "The Jedi Temple Archives show no record of that character"
        } else if (num === 2) {
          output.innerHTML = "Everytime you search a character that doesn't exist, Anakin kills a youngling"
        } else {
          output.innerHTML = "It's treason then"
        }
      })
  })
  //local storage for email//
  const emailSubmit = document.getElementsByClassName("myForm")
  const emailField = document.getElementsByClassName("email")
  emailSubmit[0].addEventListener("submit", function(event) {
    localStorage.setItem("email", emailField[0].value)

  })


  //add a list from local storage displaying search history//
  button[0].addEventListener("click", function() {
    localStorage.setItem("searchList", userText[0].value)
    const listOfSearches = localStorage.getItem("searchList")

    var newItem = document.createElement("LI")
    var textNode = document.createTextNode(listOfSearches)
    newItem.appendChild(textNode);
    var list = document.getElementById("searched")
    list.appendChild(newItem, list.childNodes[0])
    if (list.childNodes[4])
    list.removeChild(list.childNodes[0])


})


//Capitalizes the first letter in the returned string//
  function firstLetterToCaps(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

})
