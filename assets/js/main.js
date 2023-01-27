//Variables Input
const yearList = document.querySelector("#yearList");
const single = document.querySelector("#single");
const splitting = document.querySelector("#splitting");
const einkommen = document.querySelector("#einkommen");

console.log(yearList, single, splitting, einkommen);

//Output

const zvE = document.querySelector("#zvE");
const ESt = document.querySelector("#ESt");

console.log(zvE, ESt);

//function

const calculate =() => {
    let input = Number(einkommen.value);
    let output1 = ""; // zvE
    let y = ""; // Zwischenschritt für Berechnung der ESt
    let output2 =""; // errechnete ESt
    
    //Art der Veranlagung 
    if(single.checked){
        output1 = input;
    } else{
        output1 = input / 2;
    }

    //Funktionen für das Jahr 2020
    const year2020 = (output1) =>{
        switch(true){
            case (output1 <= 9408):
                output2 = 0;
                console.log(output2);
            break;
            case (output1 >= 9408 && output1 <= 14532):
            y = (output1 - 9408)/10000;
            output2 = (972.87 * y + 1400) * y;
            console.log(output2);
            break;
            case (output1 >= 14533 && output1 <= 57051):
            y = (output1 - 14532)/10000;
            output2 = (212.02 * y + 2397) * y + 972.79;
            break;
            case (output1 >= 57052 && output1 <= 270500):
                output2= 0.42 * output1 - 8963.74;
            break;
            case(output1 >= 270501):
            output2 = 0.45 * output1 - 17078.74;
            break;
        }
    }

    //Funktionen für das Jahr 2021
    const year2021 = (output1) =>{
        switch(true){
            case (output1 <= 9744):
                output2 = 0;
            break;
        
            case (output1 >= 9745 && output1 <= 14753):
            y = (output1 - 9744)/10000;
            output2 = (995.21 * y + 1400) * y;
            break;
        
            case (output1 >= 14754 && output1 <= 57918):
            y = (output1 - 14753)/10000;
            output2 = (208.85 * y + 2397) * y + 950.96;
            break;
        
            case (output1 >= 57919 && output1 <= 274612):
                output2= 0.42 * output1 - 9136.63;
            break;
        
            case(output1 >= 274613):
            output2 = 0.45 * output1 - 17374.99;
            break;
        }
    }

    //Funktionen für das Jahr 2022
    const year2022 = (output1) =>{
        switch(true){
        
            case (output1 <= 10347):
            output2 = 0;
            break;
        
            case (output1 >= 10348 && output1 <= 14926):
            y = (output1 - 10347)/10000;
            output2 = (1088.67 * y + 1400) * y;
            break;
        
            case (output1 >= 14927 && output1 <= 58596):
            y = (output1 - 14926)/10000;
            output2 = (206.43 * y + 2397) * y + 869.32;
            break;
        
            case (output1 >= 58597 && output1 <= 277825):
                output2= 0.42 * output1 - 9336.45;
            break;
        
            case(output1 >= 277826):
            output2 = 0.45 * output1 - 17671.20;
            break;
        }
    }
    //Welches Jahr wurde ausgewählt
    switch(yearList.value){
        case "2":
            year2020(output1);
        break;
        case "1":
            year2021(output1);
        break;
        case "0":
            year2022(output1);
        break;
    }

    let result = Math.floor(output2); //Abrunden
    let result2 = Math.round(result); //Ergebnis als ganze Zahl

    //Ausgabe mit 2 Nachkommastellen
    if (splitting.checked){
        zvE.innerHTML = output1.toFixed(2) + ` € p.P.`; 
        ESt.innerHTML = result2.toFixed(2) + ` € p.P.`;
    }
    else{
        zvE.innerHTML = output1.toFixed(2) + ` €`; 
        ESt.innerHTML = result2.toFixed(2) + ` €`;
    }

}

