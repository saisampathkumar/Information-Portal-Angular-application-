Node.js and Angular 5 are popular in modern days. These two technologies are important for building a Mean Stack Application.

For practicing Node.js and Angular, first you have to install an IDE for example Visual Studio Code, you can also choose other tools like Sublime Text, Atom. For Mac users, we prefer Visual Studio Code and I feel it is a great choice.

_In this blog I will cover a few basic concepts of Node.js.._

### Limitation of Multi-Threaded Models:

1. In a multi-threaded HTTP server, for each & every request that the server receives, it creates the separate thread which handles that request.
2. If a request acquires a lock in the shared resources and it is ‘exclusive’ it will effect result of other requests.

Before learning Node.js first you have to know ..

## What is Node.js?

_Node.js is an open source server framework, completely free, and used by thousands of developers around the world._

Node.js is an open-source runtime environment for server-side and networking applications and is single-threaded.

It uses the Google JavaScript V8 Engine to execute code.

It is a cross-platform environment and can run on Microsoft Windows Linux, FreeBSD, and IBM

It provides an event-driven architecture and non-blocking I/O that is optimized & scalable.

## Why Node.js?

_These are the following reasons for using Node.js_

1. Node.js uses Asynchronous programming.
2. Node.js eliminates the waiting, and simply proceeds with the next request.
3. Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient

### What is Non-Blocking I/O?

_When the request comes to the server, it triggers off of passing request & doesn’t wait for the response. During this time it has some amount of free time which can be managed to get more request from our clients._

Non-Blocking refers to code that doesn’t block execution. One advantage of non-blocking, asynchronous operations is that you can maximize the usage of a single CPU as well as memory.

### Blocking Node.js Code:

```typescript
const fs = require('fs');

// account.txt : Hello Java.
let contents = fs.readFileSync('account.txt', 'utf8');

console.log(contents);

console.log('Hello Ruby.');

// acc.txt: Hello C++
let contents = fs.readFileSync('acc.txt', 'utf8');

console.log(contents);

console.log('Hello Node');
```

O/P: Hello Java . Hello Ruby . Hello C++ . Hello Node

### Non Blocking Node.js Code:

```typescript
const fs = require('fs');

// account.txt : Hello Java.
fs.readFile('account.txt', 'utf8', function(error, contents) {
  console.log(contents);
});

console.log('Hello Ruby.');

// acc.txt: Hello C++
fs.readFile('acc.txt', 'utf8', function(error, contents) {
  console.log(contents);
});

console.log('Hello Node.');
```

Output : Hello Ruby . Hello Node . Hello Java . Hello C++

## What is NPM?

_NPM is a package manager for Node.js packages, or modules .Here all the node packages are available. By using the NPM, you can install all the packages you want._

You can install the following packages using NPM:

```typescript
npm install -g @angular/cli // for installing NPM globally
npm install --save express // for installing NPM locally
```

### How You Create Your Server in Node.js :

```typescript
let http=require('http');

//port declaration
let port=9001;

// Creating a Server
let server = http.createServer(function(req, res){
res.write("My New Server");
res.end();
})

// Listen to the Server
server.listen(port, function(){
console.log('Server Listening to the port :'+port);
})

/*If there is no error it will start the port.Once the port started we can access our server by entering the port number
```

_This is the very basic way of creating a server. If you want to know more about advanced routing and express concepts, I will explain that in the express blog._

## Modules in Node.js :

_Modules is a set of functions that perform a particular task and holds some functionalities._

_Node.js has set of modules. We can use those modules with out having any further installations._

To include a module, we use `require()` function with the name of the module:

```typescript
// For including file System
const fs = require('fs');

// For including Express
const express = require('express');
```

### Create Your Own Module:

_You can create your own module manually.You just need to create an ‘.js’ file with some functionalities and include that file when you want to use._

The following example creates a module that returns an addition of two numbers.

```typescript
// additon.js
exports.addNumber = function() {
  return a + b;
};
```

_"Export" keyword is used to ensure that the functionality defined in this file can actually be accessed by other files._

### Include Your Custom Module:

```typescript
let addition = require('./addition.js');
console.log(addition.addNumber(3, 5));
```

This is how you can access your custom module. Now you just need to run the code on the server and you will find your expected result.
