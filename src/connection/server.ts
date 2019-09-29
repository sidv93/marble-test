import { createServer, IncomingMessage, ServerResponse } from 'http';
import chalk from 'chalk';

export namespace Server {
    const host = "0.0.0.0";
    const port = 1337;

    const onListen = () => {
        console.info(chalk.green('[server] running'), `@ http://${host}:${port}/`);
    }

    const onClose = () => {
        console.info(chalk.red(`[server] stopped`));
    }

    const onError = (err: Error) => {
        console.error(chalk.red(`[server] errored`, err.message));
    }

    export const create = async (app: (req: IncomingMessage, res: ServerResponse) => void) =>
        createServer(app)
        .listen(port, onListen)
        .on('close', onClose)
        .on('error', onError);
}