import express, { Router } from 'express';
import AwardController from '../controllers/AwardController';

const router = Router();
const awardController = new AwardController();

router.get('/top/:id', awardController.getTopByGameId);


export default router;