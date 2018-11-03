const button = document.getElementsByClassName("searchButton")
const userText = document.getElementsByClassName("searchInput")

button[0].addEventListener("click", function() {
  //searh input will be put into axios.get request url

  axios.get(`https://swapi.co/api/people/?search=${userText[0].value}`)
    .then(function(response) {

       axios.get(response.data.results[0].homeworld)
       .then(function (response){
         alert(response.data.name)
       })
       .catch(function (error){

       })
       //alert(response.data.results[0].homeworld)
    })
    .catch(function(error) {
      //console.log(error + "is what the error is")
    })

})
