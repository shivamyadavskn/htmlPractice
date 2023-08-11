// let arr = [20, 10, 2, 4];
// console.log(arr);
// console.log(arr.length);
// arr.push(80);
// console.log(arr);
// console.log(arr.length);

// const obj={
//     3:"cbc",
//     name:"shivam",
//     course:"Btech",
//     depart:"CSE",
//     true:334,
//     10:"abc"
// }

// for (let item in obj) {
//     console.log(item);
// }
const demo=document.getElementsByTagName("button")[0];
const h=document.getElementsByTagName("h1")[0];
demo.addEventListener("onclick",getlocation());
function getlocation(){
    console.log("pressed");
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(showPosition);
    }else{
        h.innerHTML=`not found`;
    }
}
function showPosition(position){
    h.innerHTML=`${position.coords.latitude} <br> ${position.coords.longitude}`;
}
