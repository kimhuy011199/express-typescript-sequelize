import express, { Router } from 'express';
import tutorialRoute from './tutorial.route';

const router: Router = express.Router();

router.use('/tutorials', tutorialRoute);

export default router;
