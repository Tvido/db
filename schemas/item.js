const {Schema, Types, model} = require("mongoose");
const Joi = require("joi");

const ItemSchema = Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 2,
        },
        email: {
            type: String,
            required: true,
            minlength: 2,
        },
        phoneNumber: {
            type: Number,
            required: true,
            minlength: 2,
        },
        region: {
            type: String,
            required: true,
            minlength: 2,
        },
        owner: {
            type: Types.ObjectId,
            ref: "candidate",
            required: true
        },
    },
    {versionKey: false, timestamps: true}
);

const joiSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(2).required(),
    phoneNumber: Joi.number().min(2).required(),
    region: Joi.string().min(2).required(),
    owner: Joi.required(),
});

const Item = model('item', ItemSchema);

module.exports = {Item, joiSchema};