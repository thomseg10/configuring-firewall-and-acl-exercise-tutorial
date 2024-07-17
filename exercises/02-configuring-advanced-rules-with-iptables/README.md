# `02` Configuring Advanced Rules with iptables

The iptables rules determine how to handle different types of network traffic based on criteria such as IP address, port, protocol, and connection state. It is primarily used for network security, controlling the traffic that enters and leaves a system.

## 📝 Instructions

In this step, you will configure and add iptables rules on the WordPress server, allowing specific traffic essential for the functioning of the web server (HTTP, HTTPS) and for secure remote administration (SSH), while blocking all unauthorized traffic, thus increasing the security of the server.

* Add a rule to the INPUT chain to accept incoming TCP packets directed to port 80.
* Add a rule to the INPUT chain to accept incoming TCP packets directed to port 443.
* Add a rule to the INPUT chain to accept incoming TCP packets that are new (`-m state --state NEW`) and directed to port 22.
* Add a rule to the INPUT chain to drop (`-j DROP`) all incoming packets.

## 💡 Hint

If you don't remember how to add rules, this reading might help you [adding iptables rules](https://4geeks.com/lesson/introduction-to-linux-security#agregando-reglas-a-iptables).
