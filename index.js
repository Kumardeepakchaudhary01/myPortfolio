//variable declaration
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

menuBtn.addEventListener("click",()=>{
  navList.classList.toggle("hideShow");
})

navList.addEventListener("click",()=>{
  navList.classList.toggle("hideShow");
})
document.getElementById("heroSection").addEventListener("click",()=>{
  navList.classList.remove("hideShow");
})
// document.addEventListener('DOMContentLoaded', () => {
//   const nav = document.getElementById('navList');
//   const menuBtn = document.querySelector('menuBtn');

//   // Open the nav when the menu button is clicked
//   menuBtn.addEventListener('click', () => {
//     nav.classList.add('hideShow');
//   });

//   // Close the nav when clicking outside of it
//   document.addEventListener('click', (event) => {
//     if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
//       nav.classList.remove('hideShow');
//     }
//   });
// });


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
    const link = "https://www.linkedin.com/in/deepak-kumar-44387928b/";
    id="linkedin";
    openNewTab(id,link);
  }else if(prop.id="email"){
    document.getElementById('email').addEventListener('click', function () {
        const email = "kumardeepakchaudhary01@gmail.com"; // Replace with your email
        const subject = "Hello!"; // Replace with a default subject if needed
        const body = "This is the email body."; // Replace with a default message if needed
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
  console.log(kuch);
}
