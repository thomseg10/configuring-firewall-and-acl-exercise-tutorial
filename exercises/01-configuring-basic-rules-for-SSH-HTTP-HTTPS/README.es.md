# `01` Configurar reglas básicas para SSH, HTTP y HTTPS

Configurar reglas para SSH, HTTP y HTTPS en un servidor que ejecuta WordPress es una práctica esencial para garantizar la seguridad, integridad y disponibilidad del sitio web, protegiendo tanto al servidor como a sus usuarios contra una amplia gama de amenazas.

Para esta practica usaremos `iptables` que lo tenemos instalado de otros proyectos en nuestra maquina `Debian`, para configurar y agregar reglas básicas aceptando tráfico específico esencial para el funcionamiento del servidor web (HTTP, HTTPS) y para la administración remota segura (SSH), mientras bloqueas todo el tráfico no autorizado, incrementando así la seguridad del servidor.

## 📝 Instrucciones

* Bloquea todas las conexiones entrantes no autorizadas y permite las conexiones salientes.

```bash
sudo iptables -P INPUT DROP # Bloquea todas las conexiones entrantes no autorizadas
sudo iptables -P OUTPUT ACCEPT # Permite conexiones salientes
```

* Añade una regla para permitir tráfico SSH (puerto 22)

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

* Añade una regla para permitir tráfico HTTP (puerto 80)

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

* Añade una regla para permitir tráfico HTTPS (puerto 443)
```bash
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

* Añade una regla para bloquear todo el tráfico que no coincide con las reglas anteriores.

```bash
sudo iptables -A INPUT -j DROP
```

* Asegurate de guardar la configuración que acabas de ingresar.

```bash
sudo iptables-save | sudo tee /etc/iptables/rules.v4 >/dev/null
```
> 💡 Nota: Si lo que hiciste fue modificar o borrar reglas que ya tenias escritas en el archivo `rules.v4` ingresa el comando:

```bash
sudo iptables-restore < /etc/iptables/rules.v4
```
