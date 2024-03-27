import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); // use method moddlewares ya fir configraion ke kaam aata hain

/*
By default, CORS does not include cookies on cross-origin requests. This is different from other cross-origin techniques such as JSON-P. JSON-P always includes cookies with the request, and this behavior can lead to a class of vulnerabilities called cross-site request forgery, or CSRF.

In order to reduce the chance of CSRF vulnerabilities in CORS, CORS requires both the server and the client to acknowledge that it is ok to include cookies on requests. Doing this makes cookies an active decision, rather than something that happens passively without any control.
*/

app.use(
  express.json({
    limit: "16kb",
  })
); // json data ko parse krne ke lie configuration

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
); // html post form se data by default application/x-www-form-urlencoded esa data aata h. iska mtlb yeh nahi h ki data url se aarha h. data body ke thorugh hi aarha h but woh ek urlencoded string ke format m aarha h jiko parsekrna padega

/*

You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

*/

app.use(express.static("public")); // files wgera server pr konse folder m rakhna chahte ho

app.use(cookieParser()); // server se browser ki cookies pr crud operation krna . secured cookies ko sirf server is set/delete kr skta h

/*
Standard Cookies vs. Secured Cookies:

Standard Cookies: By default, cookies are sent by the browser along with every HTTP request to the same domain that created the cookie. This can be intercepted by attackers if the communication is not encrypted.
Secured Cookies: When the Secure attribute is set, the browser will only send the cookie along with HTTPS requests. HTTPS, also known as Secure HTTP, encrypts the communication between the browser and the server, making it much harder for attackers to eavesdrop and steal the cookie data.

*/

export { app };
