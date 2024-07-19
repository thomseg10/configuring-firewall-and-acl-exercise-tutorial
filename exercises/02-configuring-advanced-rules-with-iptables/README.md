# `02` Configuring Advanced Rules with iptables

iptables rules can also determine how to handle different types of network traffic based on criteria such as IP address, port, protocol, and connection state, and it is mainly used for network security, controlling the traffic that enters and leaves a system.



To achieve results similar to those achieved with access control lists (ACLs) on Cisco devices (although the syntax is different), we can define rules on our server with WordPress that allow or block traffic based on IP addresses and network masks using iptables.



For example, to allow traffic from a specific network 192.168.1.0/24 (equivalent to a mask of 255.255.255.0) and deny the rest, similar to what you would do with a standard Cisco ACL, we could do the following:

```bash
iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT # allow traffic from the 192.168.1.0/24 network
sudo iptables -A INPUT -j DROP # deny all traffic that does not match the previous rules
```


## 📝 Instructions

To offer greater security by considering various aspects of network traffic and providing more specific and advanced rules, we should design the configuration for the following rules:

* Add an advanced rule to allow incoming traffic on port 22 (SSH) only from a specific IP address.
> Note: This rule can help protect against brute force attacks on SSH.

* Add a rule to limit new connections to port 80 to protect against DDoS attacks.
* Add a rule for protection against port scanning and SYN Flood attacks.

## 💡 Hint

If you don't remember how to add rules, this reading might help you [adding iptables rules](https://4geeks.com/lesson/introduction-to-linux-security#agregando-reglas-a-iptables).
