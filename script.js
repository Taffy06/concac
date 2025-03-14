document.addEventListener("DOMContentLoaded", function () {
    let selectBox = document.getElementById("memberSelect");
    let memberList = document.getElementById("memberList");

    selectBox.addEventListener("mouseenter", function () {
        selectBox.style.display = "none";
        memberList.classList.remove("hidden"); 
    });
    memberList.addEventListener("mouseleave", function () {
        memberList.classList.add("hidden"); 
        selectBox.style.display = "block"; 
    });
});
