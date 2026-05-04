/*
	Contents:
	1. Scaling (Vertical vs Horizontal)
	2. Serverless vs Serverful
	3. REST (Representational State Transfer)
	4. Status Codes
	5. JSON Contracts
	6. API Versioning
*/



/*
	-Scaling 
	A method to increase system performance by adding more resources to the system.

	Two types of scaling:
	1. Vertical Scaling (Scaling Up): Adding more resources to a single server (e.g., CPU, RAM).
		-Has a limit to how much you can scale up a single server.
		-Simple to implement but can be expensive and has a single point of failure.

	2. Horizontal Scaling (Scaling Out): Adding more servers to distribute the load.
		-Uses load balancers to distribute traffic across multiple servers.
		-Can handle more traffic and provides redundancy, but can be more complex to manage.
		-Requires data consistency and synchronization across servers.
*/

/*
	-Serverless vs Serverful

	*Serverful : Tranditional approach where you manage the servers and infrastructure.
		-You are responsible for managing the servers, operating system, and underlying infrastructure.
		-Can be more expensive and complex to maintain.
		Use Case: When u need full control over the server, mainly large applications with specific requirements.

	*Serverless : Approach where the cloud provider manages the servers and infrastructure.
		-You only pay for the resources you use.
		-Can be easier to scale and manage.
		Use Case: When you want to focus on writing code without worrying about server management. (Event-driven applications, microservices, and APIs).

*/

/*
	-REST (Representational State Transfer)
		Used to design CRUD APIs
		Stateless - Each request is independent of one another

	Basic Structure:
	| Method | Meaning        | Example         |
	| ------ | -------------- | --------------- |
	| GET    | Fetch data     | GET /users      |
	| POST   | Create data    | POST /users     |
	| PUT    | Update full    | PUT /users/:userId   |
	| PATCH  | Update partial | PATCH /users/:userId  |
	| DELETE | Delete         | DELETE /users/:userId |

*/

/*
	-Status Codes
		Gives basic information about the result of an HTTP request.

	1xx: Informational
	2xx: Success
	3xx: Redirection
	4xx: Client Error
	5xx: Server Error

	Common Status Codes:
	200 OK - The request was successful.
	201 Created - A new resource was successfully created.
	400 Bad Request - The server could not understand the request due to invalid syntax.
	401 Unauthorized - Authentication is required and has failed or has not yet been provided.
	403 Forbidden - The client does not have access rights to the content.
	404 Not Found - The server can not find the requested resource.
	500 Internal Server Error - The server has encountered a situation it doesn't know how to handle.
*/

/*
	-JSON contracts
	CLIENT and SERVER agree on the structure of the data being exchanged. 
	This is often done using JSON (JavaScript Object Notation) as a format for data exchange.

	*Most basic JSON contract example:
		Server: 
		{
			success : true | false,
			message : string,
			data : {} | null,
			error : {} | null
		}

	Contract Enforcement Methods:
	1. zod: A TypeScript-first schema declaration and validation library. (SERVER-SIDE)
	2. interfaces + api layer: TS interfaces to define shape of data and api layer to enforce the contract. (CLIENT-SIDE)
	3. TypeScript Interfaces: Define the shape of data and can be used for type checking, while programming. (BOTH)

*/

/*
	-API Versioning
	Allows you to make changes to your API without breaking existing clients.
	Done to push updates, while maintaining backward compatibility.
	Eg: Response Structure Changes, Field Edits

	Common Versioning Strategies:
	1. URI Versioning: Include the version number in the URL (e.g., /api/v1/users).
	2. Query Parameter Versioning: Include the version number as a query parameter (e.g., /api/users?version=1).
	3. Header Versioning: Include the version number in the request header (e.g., X-API-Version: 1).
*/