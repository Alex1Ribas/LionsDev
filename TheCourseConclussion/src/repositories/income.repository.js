import Income from '../models/income.model.js';

export default {
    create(data){
        return Income.create(data);
    },
    findAll(){
        return Income.find();
    },
    findById(id){
        return Income.findById(id);
    },
    findByUser(user) {
        return Income.find({user}).lean();
    },
    updateById(id, data){
        return Income.findByIdAndUpdate(id, {$set: data}, {new: true, runValidators: true});
    },
    deleteById(id){
        return Income.findByIdAndDelete(id);
    },
};
