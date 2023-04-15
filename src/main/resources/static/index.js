

const URL = "http://localhost:8080";
document.getElementById("btn").onclick = getAnswer
document.getElementById("btn-uml").onclick = getUml

async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const error = new Error(errorResponse.message)
        error.fullResponse = errorResponse
        throw error
    }
    return res.json()


}

async function getAnswer(){
    const question = document.getElementById("question").value;
    const result = await fetch(URL+"/api/ai?question="+question).then(r=>r.json())
    document.getElementById("answer").innerText = result.answer
}

async function getUml(){
    document.getElementById("error-uml").innerText = "";
    const question = document.getElementById("prompt-uml").value;
    try {
        const res = await fetch(URL+"/api/ai/uml?question=" + question).then(handleHttpErrors)
        const plantuml = plantumlEncoder.encode(res.answer);
        document.getElementById("image-uml").setAttribute("src", "http://www.plantuml.com/plantuml/img/" + plantuml)
    } catch (error){
        document.getElementById("error-uml").innerText = error.message;
        document.getElementById("image-uml").setAttribute("src","#")


    }

}