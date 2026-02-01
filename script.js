const correctUsername = "123456";
const correctPassword = "123456";
        
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(username === correctUsername && password === correctPassword) {
        window.location.href = "admin1.html";
    } else {
        let message = document.getElementById("myMessage");
            message.style.display = "block";
            
            setTimeout(function(){
                message.style.display = "none";
            }, 3000);
    }
}