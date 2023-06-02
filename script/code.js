let data=document.querySelector('#input')
let ad=document.querySelector('#add')
let dis=document.querySelector('#show')
let list=document.querySelector('#list')
let cl=document.querySelector('#cl')
let arrData=[]

ad.addEventListener('click',()=>{
    if (data.value) {
        arrData.push(data.value)
        data.value=""  
    }else{
        data.style="outline: 2px solid red"
    }
    //making and updating local storage and 
    localStorage.setItem("names", JSON.stringify(arrData))
})
dis.addEventListener('click',()=>{
    list.innerHTML=""
    arrData=JSON.parse(localStorage.getItem("names"))
    arrData.forEach((dat)=>{
        list.innerHTML+=`<li>${dat}</li>`
    })

})
cl.addEventListener('click',()=>{clArr(arrData)})
function clArr(a) {
    a.length=0
    data.value=""
}