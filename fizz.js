alert("Dame empleo");/*Genera una alerta que indica que el archivo js esta siendo bien invocado*/  
var numeros = 100;/*se crea la variable numero*/
var divisible= false; /*Se genera esta variable para indicar una comparacion donde me permita imprimir fizzbuzz en caso de dos condiciones verdaderas*/
for (var i = 1; i <= 100; i++)/*Se genera el ciclo for desde i con valor 0 hasta 100, aumentando 1 cada interacion*/
{
    divisible = false;/*se reinicia la variable a falso despues de cada ciclo*/
    if (esDivisible(i,5))/*Se evalua si el modulo de la operacion es 0, para confirmar el resultado. */
        {
          document.write("Fizz");  
          divisible = true;
        }

    if (esDivisible(i,3))
        {
          document.write("Buzz");      
          divisible = true;  
        }

    if(!divisible)    

    
        {
          document.write(i); /*Comando en Js que nos escribe el resultado del ciclo for*/
        }
        document.write("<br />") /*se mueve el salto de linea al un punto en cumun para todo el Script */
}

function esDivisible(num,divisor) /*Se agrega funcion que evalua la condicional*/
  {
    if(num % divisor == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }