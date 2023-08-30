function checkData() {
    var enterEmail = document.getElementById('email').value;
    var enterPwd = document.getElementById('pwd').value;

    var getEmail = localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userPwd');

    if (enterEmail === getEmail && enterPwd === getPwd) {
        alert("Login Success!");
        console.log("Login Success!");
    } else if (enterEmail !== getEmail) {
        alert("Invalid Email!");
        console.log("Invalid Email!");
    } else {
        alert("Wrong Password!");
        console.log("Wrong Password!");
    }
}
