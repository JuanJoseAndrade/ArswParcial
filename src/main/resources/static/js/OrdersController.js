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
  var getOrders = function () {
    var callback = {
		
        onSuccess: function(ordersList){
			document.getElementById("cuerpoDeTablas").innerHTML = '';
			for(i in ordersList){
			loadOrder(ordersList[i],"cuerpoDeTablas");
			}
			alert("Los datos se descargaron de manera satisfactoria");
            },
        onFailed: function(exception){
		alert(exception);
        alert("There is a problem with our servers load module. We apologize for the inconvince, please try again later");
        }
    }
    RestControllerModule.getOrders(callback);
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
  var getIds= function (){
	var callback = {
		
        onSuccess: function(ordersList){
			elemento=document.getElementById("identifiers");
			elemento.innerHTML = '';
			for (i in ordersList) {
				elemento.innerHTML +='<option>';
				elemento.innerHTML +="<option value='"+i+"'>Order "+ ordersList[i].tableNumber;
				elemento.innerHTML +='</option>';
			}
            },
        onFailed: function(exception){
		alert(exception);
        alert("There is a problem with our servers load module. We apologize for the inconvince, please try again later");
        }
    }
    RestControllerModule.getOrders(callback);
  };  
	  

//------------------Metodos Post---------------
var createOrder = function (orderId) {
	var newOrder={"orderAmountsMap":{},"tableNumber":orderId}
    var callback = {

        onSuccess: function(){
		loadOrder(newOrder,"cuerpoDeTablas");
		alert("Se agregó la nueva orden");
            },
        onFailed: function(exception){
        alert("Hubo un problema al cargar la orden");
        }
    }
    RestControllerModule.createOrder(newOrder, callback);
  };
//------------------Metodos Put---------------
	
   var addItemToOrder = function (orderId, itemId,quantity) {
	var newOrder={"orderAmountsMap":{[itemId]:quantity},"tableNumber":orderId}
    var callback = {
        onSuccess: function(){
		OrdersControllerModule.getOrder(orderId);
		alert("Se actualizó la orden");
            },
        onFailed: function(exception){
		alert(exception);
        alert("Hubo un problema al cargar la orden");
        }
    }
    RestControllerModule.updateOrder(newOrder, callback);
  };
//------------------Metodos Delete--------------- 
  var deleteOrder = function (orderId) {
    
    var callback = {
		
        onSuccess: function(){
			location.reload();
            },
        onFailed: function(exception){
        alert("Hubo un problema al cargar la orden");
        }
    }
    RestControllerModule.deleteOrder(orderId,callback);
  }; 
  

  var deleteOrderItem = function (itemName) {
	var newOrder={"orderAmountsMap":{itemId:quantity},"tableNumber":orderId}
    var callback = {

        onSuccess: function(){
			OrdersControllerModule.getOrder();
			alert("Se actualizó la orden");
            },
        onFailed: function(exception){
        alert("Hubo un problema al cargar la orden");
        }	
    }
	RestControllerModule.deleteProducts(newOrder,callback);
  };
  var updateOrder = function (itemName,quantity) {
    // todo implement
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