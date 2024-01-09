const ampq = require('amqplib/callback_api');

ampq.connect('amqp://localhost', (err, connection) => {
    if (err) throw err;

    connection.createChannel((err, channel) => {
        if (err) throw err;

        const queue = 'simple_queue';

        channel.assertQueue(queue, { durable: false });

        channel.sendToQueue(queue, Buffer.from('Hello'));

        console.log(`[x] Sent messages!`);
    });

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});
