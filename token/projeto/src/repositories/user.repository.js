import User from '../models/user.model';

export default{
    create(data){
        return User.create(data);
    },
    findAll(){
        return User.find();
    },
    findeById(id){
        return User.findeById(id);
    },
    updateById(id, data){
        return User.updateByIdAndUpdate(id,data, {new: true, runValidators: true});
    },
    deleteById(id){
        return User.findeByIdAndDelete(id);
    },
    findByEmail(email){
        return User.findOne({email})
    },
};

//usa model mongoose a prtir do Schema para executar uma função, arquivo baseado no CRUD