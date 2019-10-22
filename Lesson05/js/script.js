function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

document.write ('<p>Current time is: <span id="date-time">', new Date().toLocaleString(), '<\/span>.<\/p>')
            if (document.getElementById) onload = function () {
                setInterval ("document.getElementById ('date-time').firstChild.data = new Date().toLocaleString()", 50)
            }