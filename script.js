const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

function getFormvalue() {
    //Write your code here
    alert(`${fname.value.trim()} ${lname.value.trim()}`)


}

window.onload = ()=>{
    document.getElementById("form1").onsubmit = (e)=>{
        e.preventDefault();
        getFormvalue();
    }
}