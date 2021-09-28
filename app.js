function mannaggia(){
    
    let a = parseInt(document.getElementById("num1").value);
    let b1 = parseInt(document.getElementById("num2").value);
    console.log(document.getElementById("num2").value.length);
    let c = parseInt(document.getElementById("num3").value);
    let b = b1 / 100;

    
    let finale1 = a * b;
    let finale2 = finale1 + a;    
    let finale3 = (finale2 / c).toFixed(2);
    
    console.log(typeof finale3);

    let totale = c / 12;
    let anni = Math.floor(totale);
    
    let decimali = totale - Math.floor(totale);
    
    let finale = Math.round(decimali * 12);
   
    
    if ((document.getElementById("num1").value.length !== 0) &&
        (document.getElementById("num2").value.length !== 0) &&
        (document.getElementById("num3").value.length !== 0)){

        document.getElementById("risposta1").innerHTML = "La crana che ci devi cacciare ogni mese è = " + finale3 + " euri";
        }

    if ((document.getElementById("num1").value.length !== 0) &&
        (document.getElementById("num2").value.length !== 0) &&
        (document.getElementById("num3").value.length !== 0) &&
        (anni > 1)){

        document.getElementById("risposta2").innerHTML = "Il tuo mutuo si estinguerà in " + anni + " anni e " + finale + " mesi.";
        }
        
    if ((document.getElementById("num1").value.length !== 0) &&
        (document.getElementById("num2").value.length !== 0) &&
        (document.getElementById("num3").value.length !== 0) &&
        (anni < 1) &&
        (finale > 1)){

        document.getElementById("risposta2").innerHTML = "Il tuo mutuo si estinguerà in " + finale + " mesi.";
        }

    if ((document.getElementById("num1").value.length !== 0) &&
        (document.getElementById("num2").value.length !== 0) &&
        (document.getElementById("num3").value.length !== 0) &&
        (anni < 1) &&
        (finale < 2)){

        document.getElementById("risposta2").innerHTML = "La tua opzione mutuo-perpetuos si estinguerà in " + finale + " mese.";
        }
    }

        
    
