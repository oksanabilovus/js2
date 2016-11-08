var a = Number(prompt('Input a'));
var b = Number(prompt('Input b'));
var c = Number(prompt('Input c'));
var d = b * b - 4 * a * c;
var dx1 = - b + Math.sqrt(d);
var dx2 = - b - Math.sqrt(d);
if (d < 0) {
    return 'No real roots exist';
  } else {
   if (d > 0)
   return 'result';
  }
var x1 = dx1 / (2 * a);
var x2 = dx2 / (2 * a);
var result1 = x1;
var result2 = x2;
document.write(result1, result2);

