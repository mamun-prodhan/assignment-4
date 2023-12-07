function findAddress(obj) {
    let street = obj.street || '__';
    let house = obj.house || '__';
    let society = obj.society || '__';
    return street+','+house+','+society;
}

obj = {
    street:10,
    house:'15A',
    society:'Earth Perfect'
}

result = findAddress(obj);
console.log(result);