document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()
    let user=document.getElementById("email").value
    let pw=document.getElementById("password").value
    if(pw=="User123"){
        alert("Welcome "+user)
    }
    else{
        alert("Wrong Credentials")
    }
})