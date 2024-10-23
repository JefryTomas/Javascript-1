let num1 = parseInt(prompt("digite el primer numero"))
let num2 = parseInt(prompt("digite el segundo numero"))
let num3 = parseInt(prompt("digite el tercer numero"))

if(num1 > num2 && num1 >3){
    console.log(num1 + "es mayor que:" + num2, "y que", + num3)

}else{
    if(num2 > num1 && num2 > num3){
        console.log(num2 + "es mayor que:"+ num1, "y que:" + num3,)
        
    } else{
        console.log(num3 + "es mayor que:"+ num1, "y que" + num2,)
    }


}