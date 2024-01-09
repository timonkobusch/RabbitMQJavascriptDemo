# Quick Demonstration of RabbitMQ in Javascript

This demo has a simple Publisher Consumer demo and a modified version to enable and test ackwowledge.

## Requirements

-   NodeJS
-   npm
-   Docker

## Starting

Start RabbitMQ Server by invoking
`docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management`

Simple

1. `node .\receive.js`
2. `node .\send.js`

Acknowledge

1. `node .\worker.js`
2. `node .\worker.js`
3. `node .\send.js`
