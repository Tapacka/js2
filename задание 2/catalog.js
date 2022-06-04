const goods = [
    {id: 1,
    name: 'джинсы',
    description: 'брюки для повседневной носки',
    sizes: ['l', 'xl', 's', 'm'],
    price: 2000,
    availabel: 'yes',
    },
    {id: 2,
    name: 'свитер',
    description: 'свитер для повседневной носки',
    sizes: ['l', 'xl', 's', 'm'],
    price: 1500,
    availabel: 'yes',
    },
    {id: 3,
    name: 'футболка',
    description: 'белая футболка',
    sizes: ['l', 'xl', 's', 'm'],
    price: 1000,
    availabel: 'yes',
    },
    {id: 4,
    name: 'ботинки',
    description: 'зимние ботинки',
    sizes: [41, 42, 43, 44],
    price: 3000,
    availabel: 'yes',
    },
    {id: 5,
    name: 'куртка',
    description: 'осенняя куртка пуховик',
    sizes: [48, 50, 52, 54],
    price: 5000,
    availabel: 'yes',
    },
]

const basket = [
    {good: 2,
    ammount: 2,},
    {good: 3,
    ammount: 4,}
]

function from_array_to_object(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; ++i) {
        obj[`${arr[i].id}`] = arr[i];        
    }
    return obj
}

function add_to_basket(_good, _ammount) {
    let object = {good: _good, ammount: _ammount}
    basket.push(object);
    return basket
}

function delete_from_basket(item) {
    for (let i=0; i < basket.length; i++) {
        if (basket[i].good === item) {
            basket.splice(i, 1);            
        }
    }
    return basket    
}

function clean_basket() {
    basket.splice(0, basket.length);
    return basket;
}

function calculate() {    
    let total_price = 0;
    for (let i=0; i<basket.length; i++) {
        total_price = total_price + from_array_to_object(goods)[basket[i].good].price * basket[i].ammount;        
    }
    calc_obj = {totalAmount: basket.length, totalSumm: total_price};
    return calc_obj;
}

add_to_basket(1, 5);
delete_from_basket(2);
clean_basket();
add_to_basket(1, 5);
add_to_basket(3, 5);
add_to_basket(5, 1);
console.log(calculate());