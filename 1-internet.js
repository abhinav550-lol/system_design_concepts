/*
	Contents:
	Table of Contents
	1. HTTP LifeCycle
	2. DNS resolution flow
	3. TCP vs UDP
	4. Browser Rendering Pipeline
	5. Client Server Architecture
	6. How internet works?
	7. IP address & Ports
	8. DNS for web systems

*/


/*
-HTTP LifeCycle 
Browser → DNS → TCP → HTTPS → Server → Processing → Response → Browser UI

User sends a request to the URL via the browser
DNS gives the IP for the URL
TCP establishes a 3 way handshake between the browser and the server
SSL/TLS handshake is done to establish a secure connection for data encryption
Server processes the request and sends a response back to the browser
Browser renders the response in the UI
*/

/*
-DNS resolution flow
How URL is converted to IP address via DNS (Domain Name System)

URL -> Cache Check (Browser and OS) -> Global Check (ISP - Recursive Resolver)
1. Root DNS Server -> Resolve .com .in etc
2. TLD DNS Server (Top level domain) -> Resolve google.com, facebook.com etc
3. Authoritative DNS Server -> returns IP address
Browser receives the IP address and establishes a connection to the server
*/

/*
TCP vs UDP

TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable data transmission. It establishes a connection between the client and server before transmitting data and uses acknowledgments to ensure that all packets are received correctly.

UDP (User Datagram Protocol) is a connectionless protocol that prioritizes speed over reliability. It does not establish a connection before transmitting data and does not guarantee delivery or ordering of packets.
*/

/*
-Browser Rendering Pipeline

HTML Parsing -> DOM (document object model) Tree Construction : Tag to Nodes
CSS Parsing -> CSSOM (CSS object model) Tree Construction : Style to Nodes
Combines DOM and CSSOM to create Render Tree (Visual representation of the page)
Layout Calculation (Reflow) : Calculate position and size of each element (SLOW)
Paint : Fill in pixels for each element (FAST)
Compositing : Combine layers to create the final rendered page (GPU accelerated)

*/

/*
-Client Server Architecture

Client: The client is the device or software that initiates a request to a server. It can be a web browser, mobile app, or any other application that interacts with a server to access resources or services.

Server: The server is a powerful computer or software that listens for incoming requests from clients and responds with the requested resources or services. It can host websites, databases, APIs, and other applications.

The client-server architecture allows for efficient communication and resource sharing between clients and servers, enabling the functioning of the internet and various online services.
*/

/*
-How internet works?
User → DNS → TCP → Packets → Routers → Server → Response → Browser

Internet works by sending data in packets between devices using IP addresses and protocols like TCP/IP, routed through multiple networks to reach the destination.

IP Address → unique identity of device
DNS → converts name → IP
TCP/IP → communication rules
Routers → direct traffic
Packets → small chunks of data
*/

/*
-IP address & Ports

IP Address → unique identity of device for data transmission
	IP can also be for the HOST (device level) or for the Network (network level)

Port → unique identifier for a process on a device to allow multiple services to run on the same device

*/

/*
-DNS for web systems

Domain is bought for a website (e.g. google.com)
DNS records maps Domain -> serverIP (Stuff like Godaaddy, Namecheap etc provide this service)

DNS can also help in:
 	Subdomains 
	Load balancing (multiple IPs for same domain)
	HTTPS (SSL/TLS certificates)
	Third Party services (e.g. email hosting, CDN etc)

*/

