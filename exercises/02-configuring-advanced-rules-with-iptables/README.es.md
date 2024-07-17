# `02` Configuración de Reglas Avanzadas con iptables

Las reglas de iptables determinan cómo manejar diferentes tipos de tráfico de red basándose en criterios como dirección IP, puerto, protocolo, y estado de la conexión y se utiliza principalmente para la seguridad de la red, controlando el tráfico que entra y sale de un sistema.

## 📝 Instrucciones

En este paso deberás configurar y agregar reglas de iptables en el servidor de WordPress, aceptando tráfico específico esencial para el funcionamiento del servidor web (HTTP, HTTPS) y para la administración remota segura (SSH), mientras bloqueas todo el tráfico no autorizado, incrementando así la seguridad del servidor.

* Añade una regla a la cadena INPUT para aceptar los paquetes TCP entrantes dirigidos al puerto 80.
* Añade una regla a la cadena INPUT para aceptar los paquetes TCP entrantes dirigidos al puerto 443
* Añade una regla a la cadena INPUT para aceptar los paquetes TCP entrantes que son nuevos `(-m state --state NEW)` y están dirigidos al puerto 22.
* Añade una regla a la cadena INPUT para bloquear `(-j DROP)` todos los paquetes entrantes.


## 💡 Pista

Si no recuerdas como añadir reglas tal vez está lectura te ayude [añadir reglas iptables](https://4geeks.com/es/lesson/intro-a-seguridad-de-linux#instalacion-de-iptables)