let price = [ 10, 9,8,7,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let maxProfit = 0;
let minPrice = Infinity;

const findMaxProfit = ( price ) => {
    for( let i = 0; i < price.length; i++ ){
        if(price[i] < minPrice){
            minPrice = price[i];
        }else{
            let profit = price[i] - minPrice;
            if(profit > maxProfit){
                maxProfit = profit
            }
        }
    }
}

findMaxProfit(price)
console.log("Max profit is", maxProfit)