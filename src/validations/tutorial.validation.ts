import Joi from 'joi';

interface Tutorial {
  title: string;
  description: string;
}
export interface CreateTutorial extends Tutorial {}
export interface UpdateTutorial extends Tutorial {
  published: boolean;
}

const tutorialSchema = {
  title: Joi.string().required(),
  description: Joi.string().required(),
};

export const createTutorialSchema = Joi.object({
  ...tutorialSchema,
});

export const updateTutorialSchema = Joi.object({
  ...tutorialSchema,
  published: Joi.boolean().required(),
});
