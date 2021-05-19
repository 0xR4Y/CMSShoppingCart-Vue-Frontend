//Using https://fakestoreapi.com/docs for fake store information on products

const fetch = require('node-fetch'); 

function renameKey(obj, oldKey, newKey){
    obj[newKey] = obj[oldKey]
    delete obj[oldKey]
}

const generate = async() => {
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json(); 
        data.forEach(obj => {
            renameKey(obj, 'title', 'name');
            delete obj['id'];
        });
        return data; 
    } catch(err){
        console.log(err)
    }
}

let fetchedJSON = generate();  

export default fetchedJSON; 