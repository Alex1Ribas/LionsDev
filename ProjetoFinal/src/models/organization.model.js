import mongoose from 'mongoose';

const OrganizationSchmea = new mongoose.Schema({
    corporateName:{type: String, require: true, trim: true},
    fantasyName:  {type: String, require: true, trim: true},
    city:         {type: String, require: true, trim: true},  
    sector:       {type: String, require: true, trim: true},
    password:     {type: String, require: true, select: false },
    email:        {type: String, require: true, trim: true, unique: true, lowerase: true},
    Role:         {type: String, enum: ["ADMIN", "USER"], default: "ADMIN"}
}, {timestamps: true});

export default mongoose.model('Organization', OrganizationSchmea);