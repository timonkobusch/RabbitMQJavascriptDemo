const ampq = require('amqplib/callback_api');

ampq.connect('amqp://localhost', (err, conn) => {
    if (err) throw err;

    conn.createChannel((err, channel) => {
        if (err) throw err;

        const queue = 'simple_queue';

        channel.assertQueue(queue, { durable: false });

        console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);
        channel.consume(
            queue,
            (msg) => {
                console.log('[x] Received %s', msg.content.toString());
            },
            { noAck: true }
        );
    });
});
