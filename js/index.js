let darkMode = localStorage.getItem("darkMode");

const day = document.querySelector(".day");

const enableDarkMode = () => {
//1. add the class darkmode to the body
  document.body.classList.add('darkMode');
  //2. update darkMode in the LocalStorage
  localStorage.setItem('darkMode','enabled')
};


const disableDarkMode = () => {
  //1. add the class darkmode to the body
    document.body.classList.remove('darkMode');
    //2. update darkMode in the LocalStorage
    localStorage.setItem('darkMode', null)
  };


day.addEventListener("click", () =>{
   darkMode = localStorage.getItem("darkMode");
  
  if(darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else{
    disableDarkMode();
    console.log(darkMode);
  }
});