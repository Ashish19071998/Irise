var time=11;

if(time>0 && time<=3){
    console.log("It is a mid-night");
}
else if(time>3 && time<12){
    console.log("Good morning to all");
}
else if(time>=12 && time<17){
    console.log("Good Afternoon to all");
}
else if(time>=17 && time<20){
    console.log("Good evening to all");
}
else if(time>=20 && time<=24){
    console.log("Good night to all");
}
else{
    console.log("Wrong input enter");
}   