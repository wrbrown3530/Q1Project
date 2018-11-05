document.addEventListener('DOMContentLoaded', function() {

  const button = document.getElementsByClassName("searchButton")
  const userText = document.getElementsByClassName("searchInput")
  const output = document.getElementById("output")

  button[0].addEventListener("click", function() {

    axios.get(`https://swapi.co/api/people/?search=${userText[0].value}`)

      .then(function(response) {
        axios.get(response.data.results[0].homeworld)
          .then(function(response) {
            output.innerHTML = userText[0].value + " is from the planet " + response.data.name
            localStorage.setItem("history", userText[0].value)
          })

          .catch(function(error) {

          })
      })
      .catch(function(error) {
        let num = Math.floor(Math.random() * 4)
        if (num === 0) {
          output.innerHTML = "That's not the character you're looking for"
        } else if (num === 1) {
          output.innerHTML = "The Jedi Temple Archives show no record of that character"
        } else if (num === 2) {
          output.innerHTML = "Everytime you search a character that doesn't exist, Anakin kills a youngling"
        } else  {
          output.innerHTML = "It's treason then"
        }
      })
  })


  const emailSubmit = document.getElementsByClassName("myForm")
  const emailField = document.getElementsByClassName("email")
  emailSubmit[0].addEventListener("submit", function(event) {
    localStorage.setItem("email", emailField[0].value)

    //console.log(emailField[0].value)

  })





})
