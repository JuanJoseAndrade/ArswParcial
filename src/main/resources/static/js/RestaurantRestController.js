var RestControllerModule = (function () {

  var getOrders = function (callback) {
    axios.get('/orders')
    .then(function (response) {
     return callback.onSucces(response.data);
    })
    .catch(function (error) {
      return callback.onFailed(error);
    });
  };

  var updateOrder = function (order, callback) {
    // todo implement
  };

  var deleteOrder = function (orderId, callback) {
    // todo implement
  };

  var createOrder = function (order, callback) {
    // todo implement
  };

  return {
    getOrders: getOrders,
    updateOrder: updateOrder,
    deleteOrder: deleteOrder,
    createOrder: createOrder
  };

})();