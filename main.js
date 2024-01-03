function reset(){
    var body=document.querySelector('body')
    body.style.backgroundColor="ivory"

    var texto = document.querySelector('p')
    texto.style.display = "none"
}

var secretbutton = document.getElementById("birthdate")
secretbutton.addEventListener("keyup", function(e){
    if(e.keyCode==13){
        submit()
    }
})

function submit(){
    var rawdata = document.getElementById("birthdate").value
    if (!rawdata) return

    var data = new Date(rawdata + "T00:00:00")
    var options = document.getElementsByName("format")
    var body=document.querySelector('body')
    var r = g = b = 0

    if (options[0].checked){            // format: dd/mm/yyyy
        r = Math.ceil(((data.getDate()-1)/30)*255)
        g = Math.ceil((data.getMonth()/11)*255)
        b = Math.ceil(((data.getFullYear()%100)/99)*255)

    } else if (options[1].checked){     // format: mm/dd/yyyy
        r = Math.ceil((data.getMonth()/11)*255)
        g = Math.ceil(((data.getDate()-1)/30)*255)
        b = Math.ceil(((data.getFullYear()%100)/99)*255)

    } else {                            // format: yyyy/mm/dd
        r = Math.ceil(((data.getFullYear()%100)/99)*255)
        g = Math.ceil((data.getMonth()/11)*255)
        b = Math.ceil(((data.getDate()-1)/30)*255)
    }
    
    body.style.backgroundColor=`rgb(${r},${g},${b})`
    var texto = document.querySelector('p')
    texto.style.display = "block"
    texto.innerText = `Color RGB Values: (${r},${g},${b})\n
    Color Hex Code: #${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}