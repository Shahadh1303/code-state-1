var acc_name = localStorage.getItem('Username');
var dp_acc_name = document.querySelector('.acc-name');
window.onload = function() {
    dp_acc_name.innerHTML = `HI ${acc_name},`;
}
