function thankYou() {
    alert("Thank you for your Interest. I will be in touch very soon...Bren",
     "Bren :)");  
     document.getElementById("form").reset();
}

var domainroot=""

function googleSearch(curobj){
curobj.q.value=""+domainroot+""+curobj.qfront.value
}