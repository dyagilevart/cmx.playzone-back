import express, { Router } from 'express';
import GameController from '../controllers/MainController';

const router = Router();
const gameController = new GameController();

router.get('/', gameController.get);
router.get('/popular', gameController.getPopular);
router.get('/:id', gameController.getById);


export default router;