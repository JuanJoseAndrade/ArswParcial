var RestControllerModule = (function () {
//------------------Metodos Get------
  var getOrders = function (callback) {
	
    axios.get('/orders')
    .then(function (response) {
     return callback.onSuccess(response.data);
    })
    .catch(function (error) {
      return callback.onFailed(error);
    });
  };
  var getOrder = function(orderId, callback){			
	axios.get('/orders/'+orderId)		
		.then(function(order){
			callback.onSuccess(order.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
//------------------Metodos Post------	
  var createOrder = function (order, callback) {
    axios.post('/orders/',order)
     .then(function(){
		callback.onSuccess();
	 })
	 .catch(function(error){		 
		callback.onFailed(error);
	 });
  };
//------------------Metodos Put------	
  var updateOrder = function (order, callback) {
    axios.put('/orders/',order)
     .then(function(){
		callback.onSuccess();
	 })
	 .catch(function(error){		 
		callback.onFailed(error);
	 });
  };
//------------------Metodos Delete------	
  var deleteOrder = function (orderId, callback) {
    axios.delete('/orders/'+ orderId)
	 .then(function(){
		callback.onSuccess();		 
	 })
	 .catch(function(error){
		callback.onFailed(error);	 
	}); 
  };
  var deleteProducts=function (order, callback) {
    axios.delete('/orders/',order)
	 .then(function(){
		callback.onSuccess();		 
	 })
	 .catch(function(error){
		callback.onFailed(error);	 
	}); 
  };

  

  return {
	deleteProducts: deleteProducts,
    getOrders: getOrders,
	getOrder: getOrder,
    updateOrder: updateOrder,
    deleteOrder: deleteOrder,
    createOrder: createOrder
  };

})();