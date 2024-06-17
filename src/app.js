/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#generadorNombres").innerHTML = generadorNombres();
  });
  console.log("Buenos dias!");
};

function generadorNombres() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net", ".us", ".io"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let adjIndx = Math.floor(Math.random() * adj.length);
  let nounIndx = Math.floor(Math.random() * noun.length);
  let domIndx = Math.floor(Math.random() * dom.length);

  return pronoun[proIndx] + adj[adjIndx] + noun[nounIndx] + dom[domIndx];
}
