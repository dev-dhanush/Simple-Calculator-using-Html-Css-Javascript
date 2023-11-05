cal_values=document.getElementById("cal_value");
function add(num)
{
    cal_values.value += num;
}

function clears()
{
    cal_values.value = "";
}

function del()
{
    cal_values.value = cal_values.value.slice(0,-1);
}

function calculate()
{
    try{
        cal_values.value=eval(cal_values.value);
    }catch(err){
        alert("Invalid Input");
    }

}