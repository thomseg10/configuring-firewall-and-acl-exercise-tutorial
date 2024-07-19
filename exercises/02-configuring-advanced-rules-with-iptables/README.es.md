# `02` Configuración de Reglas Avanzadas con iptables

Las reglas de iptables también pueden determinar cómo manejar diferentes tipos de tráfico de red basándose en criterios como dirección IP, puerto, protocolo, y estado de la conexión y se utiliza principalmente para la seguridad de la red, controlando el tráfico que entra y sale de un sistema.

Para lograr resultados similares a los que se logran con las listas de control de acceso (ACLs) en dispositivos Cisco (aunque la sintaxis es diferente), podemos definir en nuestro servidor con wordpress, reglas que permiten o bloquean tráfico basadas en direcciones IP y máscaras de red con `iptables`.

Por ejemplo para permitir tráfico desde una red específica `192.168.1.0/24` (equivalente a una máscara de 255.255.255.0) y denegar el resto, de manera similar a lo que harías con una ACL estándar de Cisco podríamos hacer lo siguiente:

```bash
iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT # permitir el tráfico desde la red 192.168.1.0/24
sudo iptables -A INPUT -j DROP # denegar todo el tráfico que no coincida con las reglas anteriores
```


## 📝 Instrucciones

Para ofrecer una mayor seguridad al considerar varios aspectos del tráfico de red y proporcionar reglas más específicas y avanzadas, deberiamos diseñar la configuración de las siguientes reglas:

* Añade regla avanzada para permitir tráfico entrante en el puerto 22 (SSH) solo desde una direccion IP específica.
> Nota: Esta regla puede ayudar a la protección contra Ataques de Fuerza Bruta en SSH.

* Añade una regla para limitar nuevas conexiones al puerto 80 para proteger contra ataques DDoS.
* Añade una regla para protección contra escaneo de puertos y ataques SYN Flood.


## 💡 Pista

Si no recuerdas como añadir reglas tal vez está lectura te ayude [añadir reglas iptables](https://4geeks.com/es/lesson/intro-a-seguridad-de-linux#instalacion-de-iptables)