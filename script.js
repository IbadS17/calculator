function add(){
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");

    num1=parseFloat(input1.value);
    num2=parseFloat(input2.value);

    sum=num1+num2;

    let result=document.getElementById("result")
    result.innerHTML=sum;
}
function sub(){
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");

    num1=parseFloat(input1.value);
    num2=parseFloat(input2.value);

    sum=num1-num2;

    let result=document.getElementById("result")
    result.innerHTML=sum;
}
function mult(){
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");

    num1=parseFloat(input1.value);
    num2=parseFloat(input2.value);

    sum=num1*num2;

    let result=document.getElementById("result")
    result.innerHTML=sum;
}
function devide(){
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");

    num1=parseFloat(input1.value);
    num2=parseFloat(input2.value);

    sum=num1/num2;

    let result=document.getElementById("result")
    result.innerHTML=sum;
}