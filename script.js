// This function clear all the values
function clearScreen(){
    document.getElementById("input1").value="";
}

// this function display values
function display(value){
    document.getElementById("input1").value+= value;
}
// This function evaluates the expression and return result
function cacl(){
    var p=document.getElementById("input1").value;
    var q=eval(p);
    document.getElementById("input1").value = q;
}
