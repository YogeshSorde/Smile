
// import Men from "./data/Men.js"






// let inputSearchEl = document.querySelector(".inputSearch")
// let recentInput = []
// let formInputEl = document.getElementById("inputForm")
// const listofRecentEl = document.querySelector(".listofRecent")



// inputSearchEl.addEventListener("keydown", () => {
//     // console.log(inputSearchEl)
//     if (inputSearchEl.value) {
//         document.getElementById("closeSearch").style.display = "block"
//     }
//     else {
//         document.getElementById("closeSearch").style.display = "none"
//     }
// })

// formInputEl.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let listofRecentHTMLEl = ""

//     recentInput.unshift(inputSearchEl.value)
//     console.log(recentInput)

//     if (recentInput.length > 0) {
//         for (let i = 0; i < recentInput.length; i++) {
//             listofRecentHTMLEl += `
//             <div class="recentItem">
//                 <div class="recentIcon">
//                      <img src="./img/recent.png"/>
//                 </div>
//                 <p>${recentInput[i]}</p>
//             </div>
//         `
//         }

//         listofRecentEl.innerHTML = listofRecentHTMLEl
//     }
// })

// /*function reuble*****/
// function renderSubMenu(id,data){
//     let temp = document.getElementById(id)
// function TempFunc(){
//    return data.map(el =>{
//         let list = ""; 
//         list = el.data.map(element => `<p>${element}</p>`).join(" ")    
//        return `
//         <div class="column">
//             <h4>${el.heading}</h4>
//             ${list}
//         </div>
//        `
//     }).join("")
// }
//     temp.innerHTML = TempFunc()
// }








// renderSubMenu("men",Men)

