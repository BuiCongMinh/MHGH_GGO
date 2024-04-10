const goTopBtn = document.querySelector(".go-top-btn");
const reload  = document.querySelector('.reload');
const sideBar = document.querySelector('.sideBar .menuApp');



window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 25) {
    goTopBtn.style.transform = "translateY(0px) translateX(-50%)";

    sideBar.style.transform = "translateY(50%)";
    sideBar.style.backgroundPosition = "-186px -1014px"
    sideBar.classList.add('show')
    
  } else {
    sideBar.style.transform = "translateY(50%) translateX(150px)";
    sideBar.style.backgroundPosition = "0 -1014px";
    sideBar.classList.remove('show')

    goTopBtn.style.transform = "translateY(100px) translateX(-50%)";
  }
}

sideBar.addEventListener("click",()=>{
  sideBar.classList.toggle('show')
  if(!sideBar.classList.contains('show')){
    sideBar.style.transform = "translateY(50%) translateX(150px)";
    sideBar.style.backgroundPosition = "0 -1014px";
  }else{
    sideBar.style.transform = "translateY(50%)";
    sideBar.style.backgroundPosition = "-186px -1014px"
  }
})

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

reload.addEventListener('click',()=>{
  window.location.reload();
})



