import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import tutorialService from '../services/tutorial.service';

const create = async (req: AuthenticatedRequest, res: Response) => {
  const data = await tutorialService.create(req.body);
  res.status(201).json(data);
};

const findAll = async (req: Request, res: Response) => {
  const data = await tutorialService.findAll();
  res.json(data);
};

const findOne = async (req: Request, res: Response) => {
  const data = await tutorialService.findOne(req.params.id);
  res.json(data);
};

const updateById = async (req: Request, res: Response) => {
  const data = await tutorialService.updateById(req.params.id, req.body);
  res.json(data);
};

const deleteById = async (req: Request, res: Response) => {
  const data = await tutorialService.deleteById(req.params.id);
  res.json(data);
};

const tutorialController = {
  create,
  findAll,
  findOne,
  updateById,
  deleteById,
};

export default tutorialController;
