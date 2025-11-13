import userService from "../services/user.service.js";

export const UserController = {
  async create(req, res, next) {
    try {
      const result = await userService.createUser(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },


  async Login(req, res, next){
    try{
      const result = await userService.loginUser(req.body);
      return res.status(200).json(result);
    } catch (err){
    return next(err)
  };
},

  async list(req, res, next) {
    try {
      const result = await userService.listUser();
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const result = await userService.searchUser(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const result = await userService.updateUser(req.params, req.body);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const result = await userService.removeuser(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};