import Expense from '../models/expense.model.js';

export default {
    create(data){
        return Expense.create(data);
    },
    findAll(){
        return Expense.find();
    },
    findById(id){
        return Expense.findById(id);
    },
    findByUser(user) {
        return Expense.find({user}).lean();
    },
    updateById(id, data){
        return Expense.findByIdAndUpdate(id, {$set: data}, {new: true, runValidators: true});
    },
    deleteById(id){
        return Expense.findByIdAndDelete(id);
    },
};
