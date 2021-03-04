const Joi = require('joi');




exports.getContactVld = (body) => {
    const mySchema = {
        _id: Joi.string().length(24),
        name: Joi.string().min(2).max(50),
        phone: Joi.string().min(8).max(50),
        email: Joi.string().min(8).max(50).email(),
    };

    const schema = Joi
        .object().keys(mySchema)
        .or(...Object.keys(mySchema));

    return schema.validate(body);
}


exports.createContactVld = (body) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        phone: Joi.string().min(8).max(50).required(),
        email: Joi.string().min(8).max(50).required().email(),
    });

    return schema.validate(body);
}


exports.updateContactVld = (id, body) => {
    const schema = Joi.object({
        id: Joi.string().length(24).required(),
        name: Joi.string().min(2).max(50).optional(),
        phone: Joi.string().min(8).max(50).optional(),
        email: Joi.string().min(8).max(50).optional().email(),
    });

    const newBody = {
        id, ...body
    }

    return schema.validate(newBody);
}


exports.deleteContactVld = (id) => {
    const schema = Joi.object({
        id: Joi.string().length(24).required()
    });

    return schema.validate({id});
}