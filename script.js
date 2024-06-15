document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = document.body.innerHTML + "<img id=\"web_CURSOR\" src=\"/assets/cursor.png\">"

    const web_CURSOR = document.getElementById("web_CURSOR")
    document.addEventListener("mousemove", function(e) {
        let X = e.clientX;
        let Y = e.clientY;
        web_CURSOR.setAttribute("style", `transform: translateY(${Y - 400}px) translateX(${X}px);`)
        console.log("CUR MOVE AHAHA")
    })
    
});