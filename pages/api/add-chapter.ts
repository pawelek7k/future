import Joi from "joi";

const chapterSchema = Joi.object({
    content: Joi.object({
        paragraphs: Joi.array().items(
            Joi.object({
                id: Joi.number().required(),
                text: Joi.string().required(),
            })
        ).required(),
    }).required()
});

