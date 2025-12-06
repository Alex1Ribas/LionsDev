import Relatorio from '../models/relatorio.model.js';

export default{
    create(data){
        return Relatorio.create(data);
    },
    findAll(){
        return Relatorio.find();
    },
    findById(id){
        return Relatorio.findById(id);
    },
    updateById(id, data){
        return Relatorio.findByIdAndUpdate(id,data, {new: true, runValidators: true});
    },
    deleteById(id){
        return Relatorio.findByIdAndDelete(id);
    },
    findByEmail(email){
        return Relatorio.findOne({ email }).select('+password');
    },
};
