function unroll(arr) {
    let emptyarr = []
    let arrs = arr.toString().split(",")
    for (let i = 0; i < arrs.length; i++) {
        if (isNaN(parseInt(arrs[i]))) {
            emptyarr.push((arrs[i]));
        } else {
            emptyarr.push(parseInt(arrs[i]));
        }
    }
    return emptyarr
}









