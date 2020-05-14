import express from 'express';

export default class Server {
    private static instance: Server;
    public app: express.Application;
    public port: number;
    private constructor( port: number ) {
        this.port = port;
        this.app = express();
    }
    public static init ( port: number ) {
        if (!Server.instance) {
            this.instance = new Server(port);
        }
        return Server.instance;
    }
    public start( callback: () => void ) {
        this.app.listen(this.port, callback);
    }
}
