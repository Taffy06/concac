document.addEventListener("DOMContentLoaded", function () {
    let selectBox = document.getElementById("memberSelect");
    let memberList = document.getElementById("memberList");


    selectBox.addEventListener("mouseenter", function () {
        memberList.classList.remove("hidden");
    });


    selectBox.addEventListener("mouseleave", function () {
        setTimeout(() => {
            memberList.classList.add("hidden");
        }, 500); 
    });

  
    memberList.addEventListener("mouseleave", function () {
        memberList.classList.add("hidden");
    });
});
