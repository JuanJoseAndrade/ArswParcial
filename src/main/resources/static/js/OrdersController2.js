var OrdersControllerModule = (function () {

  var showOrdersByTable = function () {
    //Todo implement
    var agregarOrden=function (order) {
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
		document.getElementById("cuerpoDeTablas").innerHTML+=nuevaTabla;
	}
	}
	
    var callback = {

        onSuccess: function(ordersList){
			$("cuerpoDeTablas").innerHTML = '';
			for(i in ordersList){
			agregarOrden(ordersList[i]);
			}
			alert("Los datos se descargaron de manera satisfactoria");
            },
        onFailed: function(exception){
        alert("There is a problem with our servers. We apologize for the inconvince, please try again later");
        }
    }
    RestaurantRestController.getOrders(callback);
  };

  var updateOrder = function () {
    // todo implement
  };

  var deleteOrderItem = function (itemName) {
    // todo implement
  };

  var addItemToOrder = function (orderId, item) {
    // todo implement
  };

  return {
    showOrdersByTable: showOrdersByTable,
    updateOrder: updateOrder,
    deleteOrderItem: deleteOrderItem,
    addItemToOrder: addItemToOrder
  };

})();