import axios from "axios";
import chalk from "chalk";

axios.get('https://pokeapi.co/api/v2/pokemon/psyduck')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
