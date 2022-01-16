var inAge = (parseInt(prompt("nhập tuổi của bạn")))
function checkAge(inAge){
     return (inAge >= 18) ? "bạn đủ 18 tuổi" : "bạn chưa đủ 18 tuổi";
}
document.getElementById("Ket_qua").innerHTML = checkAge(inAge);
console.log(checkAge(inAge));