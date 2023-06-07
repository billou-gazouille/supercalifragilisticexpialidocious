
add_button = document.getElementById("add-button");
num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
result = document.getElementById("result");

function Add(){
    a = parseFloat(num1.value);
    b = parseFloat(num2.value);
    var sum = a + b;
    //alert(sum);
    result.innerHTML = "Result: " + sum;
}

//add_button.addEventListener("onclick", add(num1.value, num2.value))
add_button.addEventListener("click", Add);

//num1.addEventListener("change", Add);
//num2.addEventListener("change", Add);

