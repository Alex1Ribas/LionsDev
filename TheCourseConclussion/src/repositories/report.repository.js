import Report from '../models/report.model.js';

export default {
    create(data){
        return Report.create(data);
    },
    findAll(){
        return Report.find();
    },
    findById(id){
        return Report.findById(id);
    },
    updateById(id, data){
        return Report.findByIdAndUpdate(id, data, {new: true, runValidators: true});
    },
    deleteById(id){
        return Report.findByIdAndDelete(id);
    },
};
