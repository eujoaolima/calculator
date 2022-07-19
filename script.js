function insert(num)
{
    var numero = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = numero + num;
}

function clean()
{
document.getElementById("result").innerHTML = ""
}

function back()
{
    var resultEquation = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = resultEquation.substring(0, resultEquation.length -1);
}

function solution()
{
    var solution = document.getElementById("result").innerHTML;

    if (solution)
    {
        document.getElementById("result").innerHTML = eval(solution);
    }

    else
    {
        document.getElementById("result").innerHTML = "Insert a number"
    }
}