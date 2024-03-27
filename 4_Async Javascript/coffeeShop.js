function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('Order for Coffee received')
        }
        else{
            reject('Other orders are rejected')
        }
    })
}
function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`${order} is Served`)
    })
}
// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed=processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// }) //chainnig of promise

//Async Await
  async function serveOrder(){
    try {
        let orderPlaced= await placeOrder('coffee')
        console.log(orderPlaced)
        let processedOrder= await processOrder(orderPlaced)
        console.log(processedOrder) 
    } catch (error) {
        console.log(error)
    }
    
 }
 serveOrder()