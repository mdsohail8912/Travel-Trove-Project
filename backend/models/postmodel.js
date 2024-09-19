import mongoose from "mongoose";

const infoSchema = mongoose.Schema(
    {
        tittle: {
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true
        },
        rating:{
            type: String,
            
        },
        cost:{
            type: Number,

        },
        
    },{
        timestamps: true,
    }
);

export const info = mongoose.model('message', infoSchema);