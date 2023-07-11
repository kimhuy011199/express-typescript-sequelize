import HttpStatusCode from '../shared/enums/httpStatus';
import HttpException from '../shared/helpers/exception.helper';
import Tutorial from '../models/tutorial.model';
import {
  CreateTutorial,
  UpdateTutorial,
} from '../validations/tutorial.validation';

const create = async (body: CreateTutorial) => {
  const { title, description } = body;
  const tutorial = {
    title,
    description,
    published: false,
  };

  return await Tutorial.create(tutorial);
};

const findAll = async () => {
  return await Tutorial.findAll();
};

const findOne = async (id: string) => {
  const tutorial = await Tutorial.findOne({
    where: { id },
  });

  if (!tutorial) {
    throw new HttpException(HttpStatusCode.NOT_FOUND, 'Tutorial not found');
  }

  return tutorial;
};

const updateById = async (id: string, body: UpdateTutorial) => {
  const tutorial = await findOne(id);
  await tutorial.update({ ...body });

  return tutorial;
};

const deleteById = async (id: string) => {
  const tutorial = await findOne(id);
  await Tutorial.destroy({ where: { id } });

  return tutorial;
};

const tutorialService = {
  create,
  findAll,
  findOne,
  updateById,
  deleteById,
};

export default tutorialService;
