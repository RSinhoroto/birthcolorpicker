function change(){
    var body=document.querySelector('body')
    body.style.backgroundColor="#301295"    
}

var secretbutton = document.getElementById("birthdate")
secretbutton.addEventListener("keyup", function(e){
    if(e.keyCode==13){
        submit()
    }
})

function submit(){
    var color
    var rawdata = document.getElementById("birthdate")
    var data = new Date(rawdata.value+"T00:00:00")
    var options = document.getElementsByName("format")
    var body=document.querySelector('body')
    var r = g = b = 0
    //TODO: add birth date value validation
    if (options[0].checked){
        r = Math.ceil(((data.getDate()-1)/30)*255)
        g = Math.ceil((data.getMonth()/11)*255)
        b = Math.ceil(((data.getFullYear()%100)/99)*255)
    } else if (options[1].checked){
        g = Math.ceil(((data.getDate()-1)/30)*255)
        r = Math.ceil((data.getMonth()/11)*255)
        b = Math.ceil(((data.getFullYear()%100)/99)*255)
    } else {
        b = Math.ceil(((data.getDate()-1)/30)*255)
        g = Math.ceil((data.getMonth()/11)*255)
        r = Math.ceil(((data.getFullYear()%100)/99)*255)
    }
    body.style.backgroundColor=`rgb(${r},${g},${b})`
    var texto = document.querySelector('p')
    texto.style.display = "block"
    texto.innerText = `Color RGB Values: (${r},${g},${b})\n
    Color Hex Code: #${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}