document.addEventListener("DOMContentLoaded", function () {
    let selectBox = document.getElementById("memberSelect");
    let memberList = document.getElementById("memberList");

    // Hiện danh sách khi trỏ chuột vào select
    selectBox.addEventListener("mouseenter", function () {
        memberList.classList.remove("hidden");
    });

    // Ẩn danh sách khi trỏ chuột ra ngoài
    selectBox.addEventListener("mouseleave", function () {
        setTimeout(() => {
            memberList.classList.add("hidden");
        }, 500); // Tránh bị ẩn ngay lập tức
    });

    // Ẩn danh sách khi trỏ chuột ra ngoài danh sách
    memberList.addEventListener("mouseleave", function () {
        memberList.classList.add("hidden");
    });
});
