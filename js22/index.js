var a = Number(prompt('Input a'));
var b = Number(prompt('Input b'));
var c = Number(prompt('Input c'));


function calculate(a, b, c) {

var dis = b * b - 4 * a * c;
var a2 = 2 * a;

     if(dis<0){
        document.getElementById('Equation').innerHTML='No real roots exist since Discriminant < 0 !<br />D = ' + dis + ' <br />The Equation = ' + a + 'x&#178; + ' + b + 'x + ' + c + '<br />';
        document.getElementById('x1').innerHTML='&nbsp; ';
        document.getElementById('x2').innerHTML='&nbsp; ';
        }
     else{
        var dis_sqrt=Math.sqrt(dis);
        var x1=-b+dis_sqrt;
        var x1=x1/a2;
        var x2=-b-dis_sqrt;
        var x2=x2/a2;
        document.getElementById('Equation').innerHTML=" Квадратне рівняння = " + a + "x&#178; + " + b + "x + " + c + "<br />";
        document.getElementById('x1').innerHTML=' (x1) = ' + x1;
        document.getElementById('x2').innerHTML=' (x2) = ' + x2;
        }
    }

