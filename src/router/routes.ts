import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    MySQL.instance.connection.query('Select * from heroes', (err, results, fields) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                results
            });
        }
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    MySQL.instance.connection.query(`Select * from heroes where id=${MySQL.instance.connection.escape(id)}`, (err, results, fields) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        } else {
            if (results.length === 0) {
                res.json({
                    ok: false,
                    results: {
                        message: 'Heroe no encontrado'
                    }
                });
            } else {
                res.json({
                    ok: true,
                    results
                });
            }
        }
    });
});

export default router;
