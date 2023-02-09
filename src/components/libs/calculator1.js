import {pow, fraction} from 'mathjs'

export default calculate1 = () => {

    let spinUpProb = parseFloat(document.getElementById("spinUpProb").value);
    let probability1 = parseFloat(document.getElementById("spinUpProb1").value);
    let spinDownProb = parseFloat(document.getElementById("spinDownProb").value);
    let probability2 = parseFloat(document.getElementById("spinDownProb1").value);
    
    function calculateProbability1(input1) {
        let numeratorOne = parseInt(input1.substring(0, input1.indexOf("/")));
        let denominatorOne = parseInt(input1.substring(input1.indexOf("/") + 1, input1.length));
        
        if(input1.toString() === "1") return 1;
        else if(input1.toString()==="0") return 0;
        else if(input1.toString()> "0" && input1.toString()<"1") return Math.pow(input1, 2);
        else if(input1.includes("(")){
            let pStart = input1.indexOf("(");
            let pEnd = input1.length - 1;
            let pValue = input1.substring(pStart + 1, pEnd);
            let eNumber = pValue.split("^");
            let calculateVar1 = Math.pow(eNumber[0], eNumber[1]);
            let decValue = parseInt(numeratorOne) / calculateVar1;
            return fraction(pow(decValue, 2));
        }

        let decValueNew = numeratorOne / denominatorOne;
        return fraction(pow(decValueNew, 2));
    }

    function calculateProbability2(input2) {
        let numeratorTwo = parseInt(input2.substring(0, input2.indexOf("/")));
        let denominatorTwo = parseInt(input2.substring(input2.indexOf("/") + 1, input2.length));
        if(input2.toString() === "1") return 1;
        
        else if(input2.toString()==="0") return 0;
        else if(input2.toString()> "0" && input2.toString()< "1") return Math.pow(input2, 2);
        else if(input2.includes("(")){
            let pStart = input2.indexOf("(");
            let pEnd = input2.length - 1;
            let pValue = input2.substring(pStart + 1, pEnd);
            let eNumber = pValue.split("^");
            let calculateVar2 = Math.pow(eNumber[0], eNumber[1]);
            let decValue2 = parseInt(numeratorTwo) / calculateVar2;
            return fraction(pow(decValue2, 2));
        }
        
        let decValueNew2 = numeratorTwo / denominatorTwo;
        return fraction(pow(decValueNew2, 2));

    }
    

    let calculated1 = calculateProbability1(document.getElementById("spinUpProb").value);
    if(calculated1 <= "1") {
        document.getElementById("probability1").innerHTML = calculated1;
    }


    let calculated2 = calculateProbability2(document.getElementById("spinDownProb").value);
    if (calculated2 <= "1"){
        document.getElementById("probability2").innerHTML = calculated2;
    }
}