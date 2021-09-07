import express, { Router } from 'express';
import MainController from '../controllers/MainController';

const router = Router();
const mainController = new MainController();

router.get('/', mainController.get);

export default router;