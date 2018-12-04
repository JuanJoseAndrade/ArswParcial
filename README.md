

La arquitectura implementada consta de una aplicación java que usa el framework spring para brindar un servicio de api web al que le pueden realizar solicitudes para convertir grados de temperatura. De igual manera se encuentra un cliente web que realiza peticiones Get al api, para mostrarle al cliente la conversion de manera amigable.
Esta arquitectura se despliega como un microservicio en Heroku para que su acceso se pueda realizar a traves de la web.
La imagen de la arquitectura se encuentra en el repositorio
Actualmente la arquitectura se encuentra limitada, sirve la api sin embargo por un problema no se pudo enviar un json, el metodo se encuentra disponible en la clase ConverterStub
Se encuentra el formulario para su utilizacion y la conexión de axios con el api sin embargo no se conectaron.