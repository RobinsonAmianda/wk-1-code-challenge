let basicsalary =0
let benefits =0  
let grossSalary = basicSalary + benefits;
let netSalary = grossSalary - AllDeduction(payee,NHIF,NSSF)

//netSalary = grossSalary -All-deductions
//We will begin by finding the deductions

//Calculating on payee
function payeeDeduction(){
 if(grossSalary=>1 && grossSalary<=24000){
 return grossSalary * 10/100}
else if(grossSalary=>24001 && grossSalary<=32333){
return grossSalary * 25/100}
else if(grossSalary=>32334 && grossSalary<=500000){
 return grossSalary * 30/100}
else if (grossSalary=>500001 && grossSalary<=800000){
return grossSalary * 32.5/100} 
else{
    return grossSalary * 35/100
}}        

//Calculating on NHIF
function NHIFDeduction(){
 if(grossary=>1 && grossary<=5999)
 return glossary - 150
 else if (grossSalary >= 6000 && grossSalary <= 7,999) {
    return (grossSalary - 300);}
 else if (grossSalary >= 8000 && grossSalary <= 11,999) {
    return (grossSalary - 400);}
else if (grossSalary >= 12000 && grossSalary <= 14,999) {
    return (grossSalary - 500);}
else if (grossSalary >= 15000 && grossSalary <= 19,999) {
    return (grossSalary - 600);}
else if (grossSalary >= 20000 && grossSalary <= 24,999) {
    return (grossSalary - 750);}
else if (grossSalary >= 25000 && grossSalary <= 29,999) {
    return (grossSalary - 850);}
else if (grossSalary >= 30000 && grossSalary <= 34,999) {
    return (grossSalary - 900); }
else if (grossSalary >= 35000 && grossSalary <= 39,999) {
    return (grossSalary - 950);}
else if (grossSalary >= 40000 && grossSalary <= 44,999) {
    return (grossSalary - 1000);}
else if (grossSalary >= 45000 && grossSalary <= 49,999) {
    return (grossSalary - 1100);}
else if (grossSalary >= 50000 && grossSalary <= 59,999) {
    return (grossSalary - 1200);}
else if (grossSalary >= 60000 && grossSalary <= 69,999) {
    return (grossSalary - 1300);}
else if (grossSalary >= 70000 && grossSalary <= 79,999) {
    return (grossSalary - 1400);}
else if (grossSalary >= 80000 && grossSalary <= 89,999) {
    return (grossSalary - 1500);}
else if (grossSalary >= 90000 && grossSalary <= 99,999) {
    return (grossSalary - 1600);}
else {
    return grossSalary - 1700
}}

//Calculating on NSSF
function NSSFDeduction(){
    if(glossary=>1 && glossary<=6000){
        return glossary * 6/100
    }
    else{
        return glossary * 6/100
    }}
