var user_name;
var user_result;
user_name = prompt("お名前を教えてください")
if (user_name == ""){
    user_name = "名無し";
}
document.getElementById("name").innerHTML = user_name;

var random = Math.floor(Math.random() * 5);
if (random == 0){
    user_result = "大吉";
}else if (random == 1){
    user_result = "中吉";
}else if (random == 2){
    user_result = "小吉";
}else if (random == 3){
    user_result = "吉";
}else if (random == 4){
    user_result = "凶";
}
document.getElementById("result").innerHTML = user_result;
