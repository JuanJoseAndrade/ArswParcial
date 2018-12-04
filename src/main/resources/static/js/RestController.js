var RestControllerModule = (function () {
//------------------Metodos Get------
  var getCelsius = function (callback) {			
	axios.get('/temperature/celsius'+grados)		
		.then(function(order){
			callback.onSuccess(order.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
  var getFahrenheit = function(grados, callback){			
	axios.get('/temperature/fahrenheit'+grados)		
		.then(function(order){
			callback.onSuccess(order.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};

  return {
	getCelsius: getCelsius,
    getFahrenheit:getFahrenheit

  };

})();