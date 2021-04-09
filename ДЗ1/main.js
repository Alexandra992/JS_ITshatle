/* let userPass = prompt("Пожалуйста, введите пароль");
let truePass = "catsOneLove";
if (userPass === truePass) {
    alert("Пароль верный");
} else if (userPass === null || userPass === "") {
    alert("Отменено"); 
} else if (userPass != truePass) {
    alert("Пароль не верный");
} 
 */


function numberOfRoots(a,b,c){
    let d = b * b - 4 * a * c;
    let x;
    let x1;
    let x2;
    if (d < 0) {
        console.log("Количество корней = 0");
    } else if (d === 0) {
        x = (- b / (2 * a));
        console.log("Количество корней = 1");
        console.log("x=" + x);
    } else if (d > 0) {
        x1 = ((- b - Math.sqrt(d))/ (2 * a));
        x2 = ((- b + Math.sqrt(d))/ (2 * a));
        console.log("Количество корней = 2");
        console.log("x1=" + x1);
        console.log("x2=" + x2);
    }
}

numberOfRoots(-29,5,18);
