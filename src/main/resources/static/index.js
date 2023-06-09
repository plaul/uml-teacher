import {getRandomUMLJoke} from "./uml-jokes.js"
import {getRandomPrompt} from "./predefined-prompts.js"
import {plantUmlArchitecture} from "./sequence-diagram-plantuml.js"

//const URL = "http://localhost:8080";
const URL = "http://20.101.34.0";
let plantUML = ""
let plantUML2 = ""


const encodedSequenceDiagram = plantumlEncoder.encode(plantUmlArchitecture);
document.getElementById("modal-image").setAttribute("src", "http://www.plantuml.com/plantuml/img/" + encodedSequenceDiagram)

//document.getElementById("btn").onclick = getAnswer
document.getElementById("btn-uml").onclick = getUml
document.getElementById("btn-explain").onclick = getExplanation
document.getElementById("btn-show-plantuml").onclick = () => console.log(plantUML)
document.getElementById("btn-lucky").onclick = getRandomPrompt
document.getElementById("btn-show-umljoke").onclick = ()=> document.getElementById("uml-joke").innerText = getRandomUMLJoke()
document.getElementById("btn-clear").onclick = ()=> {
  document.getElementById("prompt-uml").value = ""
  zeroState()
}

function zeroState() {
  document.getElementById("error-uml").innerText = "";
  document.getElementById("image-uml").style.display = "none";
  document.getElementById("get-uml-spinner").style.display = "none";
  document.getElementById("btn-explain").style.display = "none";
  document.getElementById("card-explanation").style.display = "none";
  document.getElementById("btn-show-plantuml").style.display = "none";
}
async function handleHttpErrors(res) {
  if (!res.ok) {
    const errorResponse = await res.json();
    const error = new Error(errorResponse.message)
    error.fullResponse = errorResponse
    throw error
  }
  return res.json()
}

async function getExplanation() {
  if (plantUML === "") return;
  // document.getElementById("error-explain").innerText = "";
  document.getElementById("get-explain-spinner").style.display = "inline-block";

  try {
    const encoded = btoa(plantUML)
    const res = await fetch(URL + "/api/ai/explanation?plantuml=" + encoded).then(handleHttpErrors)
    document.getElementById("explanation").innerHTML = res.answer
    document.getElementById("card-explanation").style.display = "block";


  } catch (error) {
    document.getElementById("error-explain").innerText = error.message;
    document.getElementById("image-explain").setAttribute("src", "#")
  } finally {
    document.getElementById("get-explain-spinner").style.display = "none";
  }
}

async function getUml() {
  zeroState()
  document.getElementById("error-uml").innerText = "";
  document.getElementById("image-uml").style.display = "none";
  document.getElementById("get-uml-spinner").style.display = "inline-block";
  plantUML = ""
  const question = document.getElementById("prompt-uml").value;
  try {
    const res = await fetch(URL + "/api/ai/uml?question=" + question).then(handleHttpErrors)
    const plantuml = plantumlEncoder.encode(res.answer);
    plantUML = res.answer
    plantUML2 = plantuml
    document.getElementById("image-uml").setAttribute("src", "http://www.plantuml.com/plantuml/img/" + plantuml)
    document.getElementById("image-uml").style.display = "block";
    document.getElementById("btn-explain").style.display = "block";
    document.getElementById("btn-show-plantuml").style.display = "block";
  } catch (error) {
    document.getElementById("error-uml").innerText = error.message;
    document.getElementById("image-uml").setAttribute("src", "#")
  } finally {
    document.getElementById("get-uml-spinner").style.display = "none";
  }

}