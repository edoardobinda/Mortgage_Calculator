function mortgage(){
    
    let a = parseInt(document.getElementById("num1").value);
    let b1 = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);
    let b = b1 / 100;
    
    let finale1 = a * b;
    let finale2 = finale1 + a;    
    let finale3 = (finale2 / c).toFixed(2);
    
     
    let inizio = c / 12;
    let anni = Math.floor(inizio);
    /* Decimali con Modulos ==> let decimali = c % 12; */
    let decimali = inizio - anni;
    
    let mesitotali = Math.round(decimali * 12);

    /*Calcolo anni e mesi totali
    anni totali = Math.floor(c/12);
    mesi totali = c % 12; */
   
    if ((document.getElementById("num1").value.length !== 0) &&
        (document.getElementById("num2").value.length !== 0) &&
        (document.getElementById("num3").value.length !== 0)) {

        document.getElementById("risposta1").innerHTML = "Your monthly payment for the mortgage is = " + finale3 + " euros";
        
        if (anni > 1){
            document.getElementById("risposta2").innerHTML = "The mortgage will be paid off in full in " + anni + " years and " + mesitotali + " months.";
        }
        else if ((anni == 1) && (mesitotali == 0)){
            document.getElementById("risposta2").innerHTML = "The mortgage will be paid off in full in 1 year.";
        } 
        else if ((anni == 1) && (mesitotali < 12)){
            document.getElementById("risposta2").innerHTML = "The mortgage will be paid off in full in 1 year and " + mesitotali + " months.";
        }
        else if ((anni < 1) && (mesitotali < 12) && (mesitotali >= 2)){
            document.getElementById("risposta2").innerHTML = "The mortgage will be paid off in full in " + mesitotali + " months.";
        }
        else if ((anni < 1) && (mesitotali < 2)){
            document.getElementById("risposta2").innerHTML = "The mortgage will be paid off in full in " + mesitotali + " month.";
        }
    }
}   
       

    


       
    
    
    


    

