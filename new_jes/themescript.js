
theme_header=document.querySelector(".theme_header")
info_text = document.querySelector(".info_text")
theme_line= document.querySelector(".theme_line")
bigInfos = document.querySelectorAll(".big_info")

let secondPageData = localStorage.getItem("secondPageData");

theme_header.textContent=secondPageData;


bigInfos.forEach(big_info => {
    
      big_info.addEventListener("click",()=>{
      text=big_info.querySelector(".text")
      num=big_info.querySelector(".number")
      notNum=big_info.querySelector(".about_text")

      let themePageText = text.textContent
          
      localStorage.setItem("toWorksapacepage", themePageText);
      window.location.href = "./workspace.html";
     
   
  });
 
});
 



