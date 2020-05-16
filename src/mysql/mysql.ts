import mysql, { MysqlError } from 'mysql';

export default class MySQL {
    private static _instance: MySQL;

    connection: mysql.Connection;

    private constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '37880970',
            database : 'node_db'
          });
        this.connection.connect( (err: MysqlError) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log('Database Online!')
        });
    }

    public static get instance() {
        if (!MySQL._instance) {
            this._instance = new this();
        }
        return this._instance;
    }

}
