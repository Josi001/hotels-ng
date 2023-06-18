
function toggle(){
    let icon = document.getElementById("woman-dropdown-menu")
    if (icon.style.display === "none"){
        icon.style.display = "inline"
        document.getElementById("currency-dropdown-menu").style.display = "none"
        document.getElementById("acct-dropdown-menu").style.display = "none"
    }else{
        icon.style.display = "none"
    }
    if (icon.style.visibility === "hidden"){
    }else{
        (icon.style.visibility = "visible")
    }
}
function toggles(){
    let icon = document.getElementById("currency-dropdown-menu")
    if (icon.style.display === "none"){
        icon.style.display = "inline"
        document.getElementById("woman-dropdown-menu").style.display = "none"
        document.getElementById("acct-dropdown-menu").style.display = "none"
    }else{
        icon.style.display = "none"
    }
    if (icon.style.visibility === "hidden"){
    }else{
        (icon.style.visibility = "visible")
    }
}
function appear(){
    let icon = document.getElementById("acct-dropdown-menu")
    if (icon.style.display === "none"){
        icon.style.display = "inline"
        document.getElementById("woman-dropdown-menu").style.display = "none"
        document.getElementById("currency-dropdown-menu").style.display = "none"
    }else{
        icon.style.display = "none"
    }
    if (icon.style.visibility === "hidden"){
    }else{
        (icon.style.visibility = "visible")
    }
}