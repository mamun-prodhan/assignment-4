const products = [
    {device: 'iphone', price: 32100, brand:'apple'},
    {device: 'land Phone', price: 12000, brand:'motoroola'},
    {device: 'Google phone', price: 35222, brand:'google'},
    {device: 'dell laptop', price: 98552, brand:'hp'},
    {device: 'pc', price: 12032, brand:'windows'},
    {device: 'Pc', price: 15000, brand:'windows'},
    {device: 'Laptop', price: 186000, brand:'hp'}
]

function findProducts(products, itemName){
    const matchedItem = [];
    for(product of products){
        if((product.device.toLowerCase()).includes(itemName.toLowerCase())){
            matchedItem.push(product.device);
        }
    }
    return matchedItem;
}

const result = findProducts(products,'laptop');
console.log(result);