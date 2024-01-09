const ampq = require('amqplib/callback_api');

ampq.connect('amqp://localhost', (err, conn) => {
    if (err) throw err;

    conn.createChannel((err, channel) => {
        if (err) throw err;

        const queue = 'task_queue';

        channel.assertQueue(queue, { durable: false });

        console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);
        channel.consume(
            queue,
            (msg) => {
                const messageString = msg.content.toString();
                let secondsToWait = messageString.split('.').length - 1;

                console.log('[x] Received %s', messageString);

                setTimeout(function () {
                    console.log(`[x] Done ${messageString}`);
                    channel.ack(msg);
                }, secondsToWait * 1000);
            },
            {
                noAck: false,
            }
        );
    });
});
