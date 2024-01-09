const ampq = require('amqplib/callback_api');

ampq.connect('amqp://localhost', (err, connection) => {
    if (err) throw err;

    connection.createChannel((err, channel) => {
        if (err) throw err;

        const queue = 'task_queue';

        channel.assertQueue(queue, { durable: false });

        channel.sendToQueue(queue, Buffer.from('Message 1.'));
        channel.sendToQueue(queue, Buffer.from('Message 2..'));
        channel.sendToQueue(queue, Buffer.from('Message 3...'));
        channel.sendToQueue(queue, Buffer.from('Message 4....'));
        channel.sendToQueue(queue, Buffer.from('Message 5.....'));
        channel.sendToQueue(queue, Buffer.from('Message 6......'));

        console.log(`[x] Sent messages!`);
    });

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});
