
big_infos=document.querySelectorAll(".big_info")
line_info=document.querySelector(".line_info")
section_info=document.querySelector(".section_info")
button_bottom=document.querySelector(".button_bottom")
bottom_back=document.querySelector(".bottom_back")
info_text = document.querySelector(".info_text")
theme_header = document.querySelector(".theme_header")
header_ul = document.querySelector(".header_ul")
btn_sreach = document.querySelector(".btn_sreach")
sreach = document.querySelector(".sreach")
search_section = document.querySelector(".search_section")
text=document.querySelector(".text")
let big_info;

big_infos.forEach(big_info => {

    big_info.addEventListener("click",()=>{

      text=big_info.querySelector(".text")
      num=big_info.querySelector(".number")
      notNum=big_info.querySelector(".about_text")

      let firstPageData = text.textContent

      bottom_back.classList.remove("none")
      button_bottom.classList.add("none")

       
      if (!( num == undefined)) {

      info_text.classList.add("none") 
   
      localStorage.setItem("secondPageData", firstPageData);
      window.location.href = "./theme.html";
     
      }
      else{
        section_info.classList.remove("none")
        line_info.classList.add("none")
        theme_header.textContent=text.textContent
        header_ul.classList.add("none")
      }
 })
 
});

btn_sreach.addEventListener('click',()=>{
 sreach.classList.remove("none")  
 
 header_ul.classList.add("none") 
 line_info.classList.add("none")
 bottom_back.classList.remove("none")
 button_bottom.classList.add("none")

})

let filterBigInfos =((text) => {

  let filteredBigInfos = [...big_infos].filter((big_info) => {
    let bigInfoText = big_info.querySelector(".text").textContent.toLowerCase();
    return bigInfoText.includes(text);
  });
  let lineInfoHTML = "";
  filteredBigInfos.filter((big_info) => {
    console.log(big_info);
    // big_info.addEventListener("click",()=>{
      //   console.log("dd")
      // })
      
      
      lineInfoHTML += big_info.outerHTML;
      
    line_info.innerHTML = lineInfoHTML;
    
    let resultText = search_section.querySelector(".big_info")
    resultText.innerHTML=lineInfoHTML
      
    });
  })  
  
  sreach.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase();
    filterBigInfos(value);
    search_section.classList.remove("none")  
  // alert(value);
  theme_header.textContent=value
});

bottom_back.addEventListener('click',()=>{
  location.reload()

}
) 
