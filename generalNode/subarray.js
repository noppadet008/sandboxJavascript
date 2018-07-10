const subarray = (array, size) => {
    let groupp = [];
    let index = 0;
    let max = array.length;
    while (index < max) {
        groupp.push(array.slice(index, index + size));
        index = index + size;
    }
    return groupp;
}
