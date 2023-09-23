let grade = 40;
if(grade>=0 && grade<=39){
    return (`E`)
}
else if (grade>=40 &&grade<=49){
    return D
}
else if(grade>=49 &&grade<=59){
return C
}
else if(grade>=60 &&grade<=79){
return B
}
else if(grade>79 &&grade<=100){
return A
}
else if(grade<0 || grade>100){
return `invalid marks`
}
else {
    return 
}
//Any marks that are less than 0 or greater than 100,will not be graded.