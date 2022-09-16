const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            maxlength: 280, 
            minlength: 1, 
        }, 
        createdAt: {
            type: Date, 
            default: Date.now,
            get: () => Date.now,
        }, 
        username: {
            type: String, 
            required: true,
        },
        reactions: [reactionSchema],
    }
);

const Thought = model('Reaction', thoughtSchema);

module.exports = Thought;