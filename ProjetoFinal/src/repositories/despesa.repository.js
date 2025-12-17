import Despesa from '../models/despesa.model.js';

export default{
    create(data){
        return Despesa.create(data);
    },
    findAll(){
        return Despesa.find();
    },
    findById(id){
        return Despesa.findById(id);
    },
    updateById(id, data){
        return Despesa.findByIdAndUpdate(id, {$set: data}, {new: true, runValidators: true});
    },
    deleteById(id){
        return Despesa.findByIdAndDelete(id);
    },
};
