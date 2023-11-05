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
        let cal=eval(cal_values.value);
        if(cal==Math.floor(cal))
        {
            cal_values.value=cal;
        }else{
            cal_values.value=cal.toPrecision(4);
        }
    }catch(err){
        alert("Invalid Input");
    }

}