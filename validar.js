function calcular(info) {
    var num1 = parseInt(document.cal.num1.value);
    var num2 = parseInt(document.cal.num2.value);
    var res = 0;

    if (info == 1) {
        res = num1 + num2;
    }
    if (info == 2) {
        res = num1 - num2;
    }
    if (info == 3) {
        res = num1 * num2;
    }
    if (info == 4) {
        res = num1 / num2;
    }



    document.cal.result.value = res;
}