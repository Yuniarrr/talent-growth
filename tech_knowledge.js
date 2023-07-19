function merge_arr_a(arr_one, arr_two) {
    return [...arr_one, ...arr_two];
}

function merge_arr_b(arr_one, arr_two) {
    let new_arr = [];
    arr_one.forEach((element, index) => {
        new_arr.push(element);
        new_arr.push(arr_two[index]);
    });
    return new_arr;
}

function compare_string(str_a, str_b) {
    let flag = true;
    if (str_a.localeCompare(str_b)) {
        flag = false;
    }
    return flag;
}

function get_sushi(string) {
    let sushi = string.split(" ");
    let word = "No Sushi";
    sushi.forEach((element) => {
        if (element == "Sushi") {
            word = element;
        }
    });
    return word;
}

let arr_one = [1, 2, 3];
let arr_two = ["a", "b", "c"];

let str_a = "I like to drink water";
let str_b = "I Like Too Drink Water";

let sushi = "One of the recommended food from japan is Sushi";

console.log(get_sushi(sushi))