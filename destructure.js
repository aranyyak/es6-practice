const person = {name:"samsu", class:"five", phone:017777, id:57, gfName:"kobita"};
const {name, gfName} = person;

// console.log(name, gfName);

const complexObject = { 
    name:'robi',
    info: {
        address: 'kolabagan',
        phone: 01444
    }
}

const {address} = complexObject.info;
console.log(address);