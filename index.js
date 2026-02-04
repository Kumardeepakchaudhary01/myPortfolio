//variable declaration
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navList');
  const menuBtn = document.getElementById('menuBtn');
  const navItems = document.querySelectorAll('#navList li'); 

  // Open the nav when the menu button is clicked
  menuBtn.addEventListener('click', () => {
    nav.classList.add('hideShow');
  });

  // Close the nav when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
      //console.log("hello");
      nav.classList.remove('hideShow');
    }
  });

  // Close the nav when clicking on any nav item
  navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      setTimeout(()=>{
        nav.classList.remove('hideShow');
      },500);
      
    });
  });
});




function socialMediaAcess(prop){
  if(prop.id === "meta"){
    const link = "https://www.facebook.com/";
    id="meta";
    openNewTab(id,link);
  }else if(prop.id === "ig"){
    const link = "https://www.instagram.com/_deep0103_/";
    id="ig";
    openNewTab(id,link);
  }else if(prop.id === "linkedin"){
    const link = "www.linkedin.com/in/itsdeepakkumar01";
    id="linkedin";
    openNewTab(id,link);
  }else if(prop.id="email"){
    document.getElementById('email').addEventListener('click', function () {
        const email = "kumardeepakchaudhary01@gmail.com";
        const subject = " "; 
        const body = " ";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
  }
}
const openNewTab = (id , link) =>{
  document.getElementById(id).addEventListener("click", () => {
   window.open(link, "_blank");
  });
}

function test(kuch){
  //console.log(kuch);
}

