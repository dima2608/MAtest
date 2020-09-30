const array = [
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "green", "quantity": 5, "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 8, "priceForPair": "$6"},
    {"type": "hat", "color": "red", "quantity": 7, "price": "$5"},
    {"type": "hat", "color": "green", "quantity": 0, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"},
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "white", "quantity": 3, "priceForPair": "$4"},
    {"type": "socks", "color": "green", "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 2, "priceForPair": "$6"},
    {"type": "hat", "color": "green", "quantity": 3, "price": "$5"},
    {"type": "hat", "color": "red", "quantity": 1, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"}
];

function cost(arr){
    var quantitySocks = 0;
    var quantityHatRed = 0;
    var redPrice = 0;
    var greenPrice = 0;
    var bluePrice = 0;
    var allSocksPrice = 0;
    var allHatPrice = 0;

    array.forEach(function(arr){

        if(arr.priceForPair ){  
            allSocksPrice += Number(arr.priceForPair.replace('$', ''))
        }
        
        if(arr.price){  
            allHatPrice += Number(arr.price.replace('$', ''))
        }    
    
        if(arr.type =="socks" && arr.quantity != undefined){  
            quantitySocks += arr.quantity  
        }   

        if(arr.type =="hat" && arr.color =="red" && arr.quantity != undefined){
            quantityHatRed += arr.quantity    
        }
        
        if(arr.color == "red" && arr.type == "socks"){
            redPrice += Number(arr.priceForPair.replace('$', ''))
        }
        if(arr.color == "red" && arr.type == "hat"){
            redPrice += Number(arr.price.replace('$', ''))
        }

        if(arr.color == "green" && arr.type == "socks"){
            greenPrice += Number(arr.priceForPair.replace('$', ''))
        }
        if(arr.color == "green" && arr.type == "hat"){
            greenPrice += Number(arr.price.replace('$', ''))
        }

        if(arr.color == "blue" && arr.type == "socks"){
            bluePrice += Number(arr.priceForPair.replace('$', ''))
        }
        if(arr.color == "blue" && arr.type == "hat"){
            bluePrice += Number(arr.price.replace('$', ''))
        }


    });
    
    console.log("Socks - ", quantitySocks + "\n")
    console.log( "Red Hats - ", quantityHatRed + "\n")
    console.log("Red - ", redPrice + " " + "Green - ", greenPrice + " " + "Blue - ", bluePrice)
    return allSocksPrice + allHatPrice;
};

//cost(array)
console.log(cost(array))