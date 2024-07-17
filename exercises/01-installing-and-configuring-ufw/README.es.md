# `01` instalando y configurando UFW

UFW se diseñó para hacer más accesible la configuración y gestión del firewall en entornos Linux, además simplifica el proceso de configuración del firewall mediante comandos más intuitivos. 

## 📝 Instrucciones

* Para su instalación debemos llevar a cabo los siguientes comandos:

```bash
sudo apt update #primero nos aseguramos que el sistema este actualizado
sudo apt install ufw #instalamos ufw
```
* Una vez hecha la instalación debemos hacer algunas configuraciónes básicas de UFW, como las políticas predeterminadas con los siguientes comandos:

```sh
sudo ufw default deny incoming # bloquea todas las conexiones entrantes no autorizadas
sudo ufw default allow outgoing # Permite conexiones salientes desde nuestra máquina
```
* Ahora que hemos hecho las configuraciones basicas, vamos a configurar las conexiones específicas que queremos permitir.

```sh
sudo ufw allow ssh     # Permitir SSH para administración remota
sudo ufw allow http    # Permitir tráfico HTTP para WordPress
sudo ufw allow https   # Permitir tráfico HTTPS para WordPress
```

* Por ultimo habilitamos UFW

```sh
sudo ufw enable
```
> Nota: Asegúrate de confirmar con `y` si te pide confirmación para habilitar UFW.

