// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var dy = document.querySelector("#displayYear"); if (dy) { dy.innerHTML = currentYear; }
}

getYear();