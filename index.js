function generate() {
    let x = parseInt(document.querySelector("input[name='range_min']").value);
    let y = parseInt(document.querySelector("input[name='range_max']").value);
    let k = parseInt(document.querySelector("input[name='range_k']").value);
    let flag = 0;
    document.getElementById('outout1').value = "";
    if (x >= y) {
        alert("Wrong range entered :(\n Please, check and fix it!");
        flag = 1;
    }
    if (k <= 0){
        alert("Entered incorrect value for the number of numbers :(\n Please, check and fix it!")
        flag = 1;
    }
    if (flag == 0) {
        for (let i = 0; i < k; i++) {
            document.getElementById('outout1').value += String((Math.trunc(Math.random() * (y - x)) + x));
            document.getElementById('outout1').value += " ";
        }
        document.getElementById('outout2').value += "##  ";
        document.getElementById('outout2').value += document.getElementById('outout1').value;
        document.getElementById('outout2').value += "\n";
        num++;
    }
}

function check() {
    document.getElementById('outout3').value = "";
    let x = document.querySelector("input[name='reg1']").value;
    let y = document.querySelector("input[name='reg2']").value;
    let z = document.querySelector("input[name='reg3']").value;
    if (y != z){
        document.getElementById('outout3').value = "Password confirmation failed";
    }
    if (x == "" || y == "" || z =="") {
        document.getElementById('outout3').value = "Not all fields are filled";
    }
    if (y == z && x != "" && y != "" && z !="") {
        document.getElementById('outout3').value = "Successfully!!!";
    }
}


