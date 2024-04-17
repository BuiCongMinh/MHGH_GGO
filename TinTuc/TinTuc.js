const sideBar = document.querySelector(".sideBar .menuApp");
const goTopBtn = document.querySelector(".go-top-btn");
const itemTitles = document.querySelectorAll(".item_title");
const contents = document.querySelectorAll(".content-body");

const itemContent = document.querySelectorAll('.sector2 .right .content .itemContent');

// scrolling smooth button
const scrollSmoothlyToBottom = (to) => {
  $("html, body").animate({ scrollTop: $(`#${to}`).offset().top }, 1000);
};

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 400) {
    goTopBtn.style.transform = "translateY(0px) translateX(-50%)";

    sideBar.style.transform = "translateY(50%)";
    sideBar.style.backgroundPosition = "-186px -1014px";
    sideBar.classList.add("show");
  } else {
    sideBar.style.transform = "translateY(50%) translateX(150px)";
    sideBar.style.backgroundPosition = "0 -1014px";
    sideBar.classList.remove("show");

    goTopBtn.style.transform = "translateY(100px) translateX(-50%)";
  }
}

sideBar.addEventListener("click", () => {
  sideBar.classList.toggle("show");
  if (!sideBar.classList.contains("show")) {
    sideBar.style.transform = "translateY(50%) translateX(150px)";
    sideBar.style.backgroundPosition = "0 -1014px";
  } else {
    sideBar.style.transform = "translateY(50%)";
    sideBar.style.backgroundPosition = "-186px -1014px";
  }
});

itemTitles.forEach((itemTitle, index) => {
  itemTitle.addEventListener("click", () => {
    document.querySelector(".sector2  .right .title .active")?.classList.remove("active");
    itemTitle.classList.add("active");
  
    document.querySelector('.sector2 .content .active')?.classList.remove("active");
    contents[index].classList.add("active");
    });
});

// click content-item change page 
itemContent.forEach(i=>{
  i.addEventListener('click',()=>{
    window.location.href = '../TinTuc_DeTail/DetailTinTuc.html'
  })
})
