function rollbtn() {
    var num = Math.floor(Math.random() * 6) + 1;
    var para = document.getElementById("result");
    para.innerText = "You have rolled a " + num;
}