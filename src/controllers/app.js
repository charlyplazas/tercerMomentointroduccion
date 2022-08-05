let etiquetaBoton = document.getElementById("boton");

etiquetaBoton.addEventListener("click", function () {
  var respuesta = Number(prompt("1.Ingresar al menú \n2.Cerrar"));
  while (respuesta == 1) {
    var menu = Number();
    var respuestaDos = true;

    do {
      let menu = Number(
        prompt(
          "1. Numero mayor\n2. Mayor consola\n3. Area circunferencia\n4. Total compras\n5. Par impar\n6. Cero\n7. Ordenar numeros\n8. Dias semanales\n9. Incrementar dos en dos\n10. Tecnologia\n11 .Calcular salario\n12. calculadora\n13. imc\n14. Cerrar"
        )
      );
      switch (menu) {
        case 1:
          while (respuesta != 0) {
            numeroMayor();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              numeroMayor();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 2:
          while (respuesta != 0) {
            mayorConsola();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              mayorConsola();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 3:
          while (respuesta != 0) {
            areaCircunferencia();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              calcularArea();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 4:
          while (respuesta != 0) {
            totalCompra();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              compras();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 5:
          while (respuesta != 0) {
            parImpar();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              numerosParesImpares();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 6:
          while (respuesta != 0) {
            cero();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              comparar0();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 7:
          while (respuesta != 0) {
            ordenarNumeros();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              ordenarNumeros();
            } else if (respuestaDos == 2) {
              break;
            }
          }
          break;
        case 8:
          while (respuesta != 0) {
            diasSemanales();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              diasSemanales();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 9:
          while (respuesta != 0) {
            incremenrarDos();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              numerosDe2En2HastaNnumeros();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 10:
          while (respuesta != 0) {
            tecnologias();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              menuTecnologiasDsarrolloSoftware();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 11:
          while (respuesta != 0) {
            calcularSalario();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              calcularSalario();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 12:
          while (respuesta != 0) {
            calculadora();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              calculadora();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;
        case 13:
          while (respuesta != 0) {
            imc();
            let respuestaDos = Number(
              prompt("1. Desea realizar el mismo ejercicio \n2.volver al menu")
            );
            if (respuestaDos == 1) {
              imc();
            } else if (respuestaDos == 2) {
              break;
            }
          }

          break;

        case 14:
          respuesta = 2;
          break;

        default:
          respuesta == 2;
          alert("Digitaste mal, vuelve a intentarlo");
          break;
      }
    } while (respuesta == 1);
  }
  if ((respuesta = 2)) {
    alert("chao bebe");
  }
});
//**********1***********/
function numeroMayor() {
  let numeroUno = 14;
  let numeroDos = 55;

  if (numeroUno > numeroDos) {
    alert("El numero mayor es: " + numeroUno);
  } else if (numeroUno < numeroDos) {
    alert("El numero menor es: " + numeroDos);
  } else {
    alert("Ambos numeros son iguales");
  }
}

//**********2***********/
function mayorConsola() {
  let numeroUno = parseFloat(prompt("Digita un numero: "));
  let numeroDos = parseFloat(prompt("Digita un numero: "));
  if (numeroUno > numeroDos) {
    alert("El numero mayor es: " + numeroUno);
  } else if (numeroUno < numeroDos) {
    alert("El numero mayor es: " + numeroDos);
  } else {
    alert("Los numeros son iguales");
  }
}

//**********3***********/

function areaCircunferencia() {
  let radio = parseFloat(prompt("Ingresa un numero: "));
  const pi = 3.1416;
  let areaCircunferencia = pi * (radio * radio);
  alert("La circunferencia es: " + areaCircunferencia.toFixed(2));
}

//**********4***********/
function totalCompra() {
  let cantidadProductos = parseInt(
    prompt("Ingrese la cantidad de productos: ")
  );
  let precioProductos = parseFloat(
    prompt("Ingresa el precio de los productos: ")
  );
  let totalCompra = cantidadProductos * precioProductos;
  alert("El total de la compra fue: " + totalCompra);
}

//**********5***********/
function parImpar() {
  let numero = 1;
  for (numero = 1; numero <= 100; numero++) {
    if (numero % 2 == 0) {
      alert("El " + numero + "es par");
    } else {
      alert("El " + numero + " es impar");
    }
  }
}

//**********6***********/
function cero() {
  let numero = parseInt(prompt("Digita un numero: "));
  if (numero < 0) {
    alert("el numero digitado es menor a 0");
  } else if (numero > 0) {
    alert("el numero digitado es mayor a 0");
  } else {
    alert("ambos numeros son iguales");
  }
}

//**********7**********/
function ordenarNumeros() {
  let primerNumero = prompt("Ingrese el primer número: ");
  let segundoNumero = prompt("Ingrese el segundo número: ");
  let tercerNumero = prompt("Ingrese el tercer número: ");

  if (
    parseInt(primerNumero) == parseInt(segundoNumero) &&
    parseInt(primerNumero) == parseInt(tercerNumero)
  ) {
    alert("Los números son iguales");
  } else {
    if (
      parseInt(primerNumero) >= parseInt(segundoNumero) &&
      parseInt(primerNumero) > parseInt(tercerNumero)
    ) {
      var numeroMayor = parseInt(primerNumero);
    } else if (
      parseInt(segundoNumero) >= parseInt(primerNumero) &&
      parseInt(segundoNumero) > parseInt(tercerNumero)
    ) {
      numeroMayor = parseInt(segundoNumero);
    } else {
      numeroMayor = parseInt(tercerNumero);
    }
    if (
      parseInt(primerNumero) <= parseInt(segundoNumero) &&
      parseInt(primerNumero) < parseInt(tercerNumero)
    ) {
      var numeroMenor = parseInt(primerNumero);
    } else if (
      segundoNumero <= parseInt(primerNumero) &&
      parseInt(segundoNumero) < parseInt(tercerNumero)
    ) {
      numeroMenor = parseInt(segundoNumero);
    } else {
      numeroMenor = parseInt(tercerNumero);
    }
    var medio =
      parseInt(primerNumero) +
      parseInt(segundoNumero) +
      parseInt(tercerNumero) -
      numeroMayor -
      numeroMenor;
    +alert(
      "Números en orden ascendente: \n" +
        numeroMenor +
        "\n" +
        medio +
        "\n" +
        numeroMayor
    );
    alert(
      "Números en orden descendente: \n" +
        numeroMayor +
        "\n" +
        medio +
        "\n" +
        numeroMenor
    );
  }
}

//**********8**********/
function diasSemanales() {
  let dia = Number(
    prompt(
      "Bienvenido, selecciona un día de la semana\n1.Lunes\n 2.Martes\n 3.Miércoles\n 4.Jueves\n 5.Viernes\n 6.Sábado\n 7.Domingo"
    )
  );

  if (dia >= 1 && dia <= 5) {
    alert("Este es un día laboral.");
  } else if (dia > 5 && dia < 8) {
    alert("Este es un día Festivo.");
  } else {
    alert("Introduzca correctamente el día");
  }
}

//**********9**********/
function incremenrarDos() {
  let numero = 2;
  for (numero = 0; numero <= 100; numero++) {
    alert(numero);
    numero++;
  }
}
//incremenrarDos()

//**********10**********/

function tecnologias() {
  let opcion = Number(
    prompt(
      "1.Outsourcing\n2.Ciberseguridad\n3.Inteligencia artificial\n4.Big Data\n5.Python\n6.Computación en la nube\n7.node JS\n8.Javascript\n9.React\n10.angular"
    )
  );
  switch (opcion) {
    case 1:
      alert("selecionaste Outsourcing");
      break;
    case 2:
      alert("selecionaste Ciberseguridad");
      break;
    case 3:
      alert("selecionaste Inteligencia artificial");
      break;
    case 4:
      alert("selecionaste Big Data");
      break;
    case 5:
      alert("selecionaste Python");
      break;
    case 6:
      alert("selecionaste Computación en la nube");
      break;
    case 7:
      alert("selecionaste node JS");
      break;
    case 8:
      alert("selecionaste Javascript");
      break;
    case 9:
      alert("selecionaste React");
      break;
    case 10:
      alert("selecionaste angular");
      break;

    default:
      alert("Error, ingrese un numero entre 1 y 10");
      break;
  }
}

//**********11**********/

function calcularSalario() {
  let valorHora = parseInt(prompt("Ingrese el valor de la hora de trabajo:"));
  let cantidadHoras = parseInt(
    prompt("ingrese la cantidad de las horas trabajas:")
  );
  let salario = valorHora * cantidadHoras;
  let nombreEmpleado = prompt("Ingrese su nombre: ");

  if (cantidadHoras < 24) {
    alert("No puedes trabajar menos de 24 horas a la semana");
  } else if (cantidadHoras >= 24 && cantidadHoras <= 95) {
    let saludPension = 0.08;
    let deduccion = salario * saludPension;
    let netoPagar = salario - deduccion;
    alert(
      "El empleado " +
        nombreEmpleado +
        " Gano un salario de " +
        salario +
        " Mil  trabajando " +
        cantidadHoras +
        " horas con un valor de " +
        valorHora +
        " Mil la hora trabajada" +
        " y su deduccion fue de " +
        deduccion +
        " el total a pagar al empleado es " +
        netoPagar
    );
  } else if (cantidadHoras >= 96) {
    let horasExtras = parseInt(prompt("Cuantas horas extras trabajaste"));
    let totalHorasExtras = parseInt((salario * horasExtras) / 192);
    alert("tus horas extras tienen un valor de: " + totalHorasExtras);
    saludPension = 0.08;
    deduccion = salario * saludPension;
    netoPagar = salario - deduccion + totalHorasExtras;
    alert(
      "El empleado " +
        nombreEmpleado +
        " Gano un salario de " +
        salario +
        " Mil  trabajando " +
        cantidadHoras +
        " horas con un valor de " +
        valorHora +
        " Mil la hora trabajada y su deduccion fue de " +
        deduccion +
        " el total a pagar al empleado es " +
        netoPagar
    );
  } else {
    alert("error.");
  }
}

//**********12**********/

function calculadora() {
  let numeroUno = parseInt(prompt("ingrese el primer numero: "));
  let numeroDos = parseInt(prompt("ingrese el segundo numero: "));
  let resultadoSuma = numeroUno + numeroDos;
  alert("la suma es: " + resultadoSuma);
  let resultadoResta = numeroUno - numeroDos;
  alert("la resta es: " + resultadoResta);
  let resultadoMultiplicacion = numeroUno * numeroDos;
  alert("la multiplicacion es: " + resultadoMultiplicacion);
  let resultadoDivision = numeroUno / numeroDos;
  alert("La division es: " + resultadoDivision);
  alert(
    "los resultados de las operaciones fueron: \n suma:" +
      resultadoSuma +
      "\n resta: " +
      resultadoResta +
      "\n multiplicacio: " +
      resultadoMultiplicacion +
      "\n division: " +
      resultadoDivision
  );
}

//**********13**********/
function imc() {
  let peso = parseInt(prompt("Ingrese su peso: "));
  let altura = parseFloat(prompt("ingrese su altura: "));
  let totalImc = parseInt(peso) / parseFloat(altura * altura);

  if (totalImc < 18.5) {
    alert("Usted esta bajo de peso: " + totalImc.toFixed(1));
  } else {
    if (totalImc >= 18.5 && totalImc <= 24.9) {
      alert("Usted esta saludable: " + totalImc.toFixed(1));
    } else {
      if (totalImc >= 25 && totalImc <= 29.9) {
        alert("Usted esta en sobrepeso: " + totalImc.toFixed(1));
      } else {
        if (totalImc >= 30 && totalImc <= 34.9) {
          alert("Usted esta obeso en nivel uno: " + totalImc.toFixed(1));
        } else {
          if (totalImc >= 35 && totalImc <= 39.9) {
            alert("Usted esta obeso en nivel dos: " + totalImc.toFixed(1));
          } else {
            if (totalImc >= 40.0) {
              alert("Usted esta obeso en nivel tres: " + totalImc.toFixed(1));
            } else {
              if (isNaN("peso") || isNaN("altura")) {
                alert("No ingresó valores");
              }
            }
          }
        }
      }
    }
  }
}
