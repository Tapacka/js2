function is_simple(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }        
    }
    return true;
}
function make_array(num) {
    let q = 2;
    var a =[];
    do {
        if (is_simple(q) == true) {
            a.push(q);
        }
        q++;
    } while (a.length < num)
    return a;
}

console.log(make_array(process.argv[2]));