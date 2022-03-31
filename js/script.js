let beka = prompt("укажите ваш возраст");

let beka1 = 2022 - beka;
 
if(beka1 < 18 && beka1 > 0 ){

    alert("вы молодой")

}
else if(beka1 >= 18 && beka1 < 30 ){
    alert("у вас средний возраст")
}

else if(beka1 >= 30 && beka1 <60){
    alert("у вас кризис среднего возраста")
}
else if(beka1 >=60 ){
    alert("вам советуется посетить доктора")
}
else{
    alert(" вы ещё не родились")
}