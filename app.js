var buttonText = document.getElementById('button-text')
buttonText.addEventListener("click", clicked)

var text = document.getElementById('text')
text.addEventListener("copy", copied)
text.addEventListener("click", clicked)


var input = document.getElementById('input')
input.addEventListener("keydown", textModified)




function clicked() {
    alert('Haz hecho click')
}

function copied() {
    alert("Texto copiado")
}




function textModified() {
    var inputText = document.getElementById('input-text')
    inputText.innerText = input.value
}