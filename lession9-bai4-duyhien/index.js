var username = prompt("Đăng nhâp ")
function checkSpace(input) {
    let check = 0;
    for (let i = 0; i < input.length; i++) {
        check += (input[i] !== " ") ? 1 : 0;
    }
    return (check === 0) ? true : false;
}

function checkLogin(username) {
    if (username === "Admin") {
        let password = prompt("Điền vào mật khẩu: ");
        if (password === "mindX") {
            alert("Chào mừng bạn!");
            document.getElementById("result-view").innerHTML = "Chào mừng";
            console.log("Chào mừng");
        } else if (checkSpace(password) === true) {
            alert("Canceled!");
            document.getElementById("result-view").innerHTML = "Canceled!";
            console.log("Canceled!");
        } else {
            alert("Sai mật khẩu!");
            document.getElementById("result-view").innerHTML = "Sai mật khẩu!";
            console.log("Sai mật khẩu");
        }
    } else if (checkSpace(username) === true) {
        alert("Canceled!");
        document.getElementById("result-view").innerHTML = "Canceled!";
        console.log("Canceled!");
    } else {
        alert("Tôi không biết bạn!");
        document.getElementById("result-view").innerHTML = "Tôi không biết bạn";
        console.log("Tôi không biết bạn");
    }
}
checkLogin(username);