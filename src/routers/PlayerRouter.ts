import express, { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const router = Router();
const playerController = new PlayerController();

router.get('/', playerController.get);
router.get('/:id', playerController.getById);


export default router;