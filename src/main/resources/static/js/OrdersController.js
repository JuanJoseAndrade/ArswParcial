var OrdersControllerModule = (function () {
  
  var loadOrder=function (order,elemento) {
	if ( Object.keys(order.orderAmountsMap).length>0){
		var nombre="Order"+order.tableNumber;
		var nuevaTabla='<div id='+nombre+'>';
		nuevaTabla+='<h2>'+nombre+'</h2>';
		nuevaTabla+='<table class="table table-striped table-sm"> <thead> <tr> <th> Product </th> <th> Quantity </th> </tr> </thead> <tbody>';
		for (i in order.orderAmountsMap) {
			nuevaTabla += '<tr>';
			nuevaTabla += '<td>'+i+'<td>';
			nuevaTabla += '<td>'+order.orderAmountsMap[i]+'<td>';
			nuevaTabla += '</tr>';
		}
		nuevaTabla += '</tbody></table></div>';
		document.getElementById(elemento).innerHTML+=nuevaTabla;
	}
	};
//------------------Metodos Get---------------
  var getTemperature = function (grados,unidad) {

    var callback = {
        onSuccess: function(ordersList){

			alert(ordersList);
            },
        onFailed: function(exception){
		alert(exception);
        alert("There is a problem with our servers load module. We apologize for the inconvince, please try again later");
        }
    }
	if(unidad=="celsius"){
		RestControllerModule.getCelsius(grados,callback);
	}
	if(unidad=="Fahrenheit"){
		RestControllerModule.getFahrenheit(grados,callback);
	}

	
  };
  var getOrder = function (orderId) {
    
    var callback = {

        onSuccess: function(order){
			document.getElementById("updateTabla").innerHTML = '';
			loadOrder(order,"updateTabla");
            },
        onFailed: function(exception){
		alert(exception);
        alert("Hubo un problema al cargar los indices");
        }
    }
    RestControllerModule.getOrder(orderId,callback);
  };

 

  return {
	deleteOrder: deleteOrder,
	createOrder:createOrder,
    getOrders: getOrders,
    updateOrder: updateOrder,
    deleteOrderItem: deleteOrderItem,
    addItemToOrder: addItemToOrder,
	getIds:getIds,
	getOrder: getOrder
  };

})();