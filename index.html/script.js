let data=[]

let searchbar=document.querySelector(".in")
console.log(searchbar)

searchbar.addEventListener("onsearch",(e)=>{
    e.preventDefault();
    let searchval=searchbar.search.value;

    let datafil=data.filter((ele)=>{
        if(
            ele.nanme.toUppercase().includes
            (searchval.toUppercase())=== true
        ){
            return true
        }else{
            return false
        }








    });
    Display(datafil)




    https://63c64b9dd307b7696736299f.mockapi.io/products


})