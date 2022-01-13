var a = parseInt(prompt("nhập số  a :"));
var b = parseInt(prompt("nhập số  b :"));

function checkNumber(a, b){
    if(a>b){
       
        return `${b} la so be nhat `;
    }else if (a<b){      
        return `${a} la so be nhat`;
    }else{
        return "2 so bang nhau";
    }
}
document.getElementById("ket_qua").innerHTML = checkNumber(a, b);
