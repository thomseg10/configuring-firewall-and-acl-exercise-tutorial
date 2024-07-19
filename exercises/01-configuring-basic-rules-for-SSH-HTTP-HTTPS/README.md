# `01` Configuring Basic Rules for SSH, HTTP, and HTTPS

Configuring rules for SSH, HTTP, and HTTPS on a server running WordPress is an essential practice to ensure the security, integrity, and availability of the website, protecting both the server and its users against a wide range of threats.

For this practice, we will use iptables, which we have installed from other projects on our Debian machine, to configure and add basic rules accepting specific traffic essential for the web server's operation (HTTP, HTTPS) and for secure remote administration (SSH), while blocking all unauthorized traffic, thereby increasing the server's security.


## 📝 Instructions:

* Block all unauthorized incoming connections and allow outgoing connections.

```sh
sudo iptables -P INPUT DROP # Block all unauthorized incoming connections
sudo iptables -P OUTPUT ACCEPT # Allow outgoing connections
```

* Add a rule to allow SSH traffic (port 22)

```sh
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

* Add a rule to allow HTTP traffic (port 80)

```sh
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

* Add a rule to allow HTTPS traffic (port 443)

```sh
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

* Add a rule to block all traffic that does not match the previous rules.

```sh
sudo iptables -A INPUT -j DROP
```

* Make sure to save the configuration you just entered.

```sh
sudo iptables-save | sudo tee /etc/iptables/rules.v4 >/dev/null
```

> 💡 Note: If you modified or deleted rules already written in the rules.v4 file, enter the command:

```bash
sudo iptables-restore < /etc/iptables/rules.v4
```
