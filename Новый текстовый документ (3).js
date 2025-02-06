const op=prompt("Введите операцию которую хотите выполнить:+,-,/,*."),
      num1=+prompt("Введите первое число:"),
      num2=+prompt("Введите второе число:");
if(op=="+"){
alert(`${num1}+${num2}=${num1+num2}`);
}else if(op=="-"){
alert(`${num1}-${num2}=${num1-num2}`);
}else if(op=="/"){
alert(`${num1}/${num2}=${num1/num2}`);
}else if(op=="*"){
alert(`${num1}*${num2}=${num1*num2}`);
}

