const { Schema, Types } = require('mongoose'); 

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId(),
        }, 
        reactionBody: {
            type: String, 
            reguired: true, 
            maxlength: 280,
        }, 
        username: {
            type: String, 
            required: true,
        },
        reactions: [reactionSchema],
    }
);

const Reaction = model('reaction', thought)