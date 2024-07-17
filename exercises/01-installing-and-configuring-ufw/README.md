# `01` Installing and configuring UFW

UFW was designed to make the configuration and management of the firewall in Linux environments more accessible. It simplifies the firewall configuration process through more intuitive commands.


## 📝 Instructions:

* To install UFW, execute the following commands:

```sh
sudo apt update # ensure the system is up to date first
sudo apt install ufw # install ufw
```

* After installation, configure basic UFW settings including default policies with the following commands:

```sh
sudo ufw default deny incoming # block all incoming connections that are not explicitly allowed
sudo ufw default allow outgoing # allow all outgoing connections from the machine
```

* Now that we have completed the basic configurations, let's configure specific connections that we want to allow.

```sh
sudo ufw allow ssh     # Allow SSH for remote administration
sudo ufw allow http    # Allow HTTP traffic for WordPress
sudo ufw allow https   # Allow HTTPS traffic for WordPress
```

* Finally, enable UFW with the following command:

```sh
sudo ufw enable
```

> Note: Make sure to confirm with `y` if prompted to confirm enabling UFW.