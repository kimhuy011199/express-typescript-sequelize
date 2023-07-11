import express, { Router } from 'express';
import tutorialController from '../controllers/tutorial.controller';
import {
  createTutorialSchema,
  updateTutorialSchema,
} from '../validations/tutorial.validation';
import validate from '../middlewares/validation.middleware';
import authenticateMiddleware from '../middlewares/auth.middleware';

const tutorialRoute: Router = express.Router();

tutorialRoute.post(
  '/',
  validate(createTutorialSchema),
  authenticateMiddleware,
  tutorialController.create
);
tutorialRoute.get('/', tutorialController.findAll);
tutorialRoute.get('/:id', tutorialController.findOne);
tutorialRoute.put(
  '/:id',
  validate(updateTutorialSchema),
  tutorialController.updateById
);
tutorialRoute.delete('/:id', tutorialController.deleteById);

export default tutorialRoute;
