window.onload = function() {
    var dp_acc_name = document.querySelector('.acc-name');
    if(localStorage.getItem('Username')){
        dp_acc_name.innerHTML = `HI ${localStorage.getItem('Username')},`;
    } else {
        dp_acc_name.innerHTML = "";
    }
}
