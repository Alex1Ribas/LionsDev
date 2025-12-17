import Receita from '../models/receita.model.js';

export default{
    create(data){
        return Receita.create(data);
    },
    findAll(){
        return Receita.find();
    },
    findById(id){
        return Receita.findById(id);
    },
    updateById(id, data){
        return Receita.findByIdAndUpdate(id, {$set: data}, {new: true, runValidators: true});
    },
    deleteById(id){
        return Receita.findByIdAndDelete(id);
    },
};
