import userService from "../services/user.service";

export const UserController = {
  async create(req, res, next) {
    try {
      const result = await userService.ceateUser(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
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
      const result = await userService.searchUser(req.params.id);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const result = await userService.updateUser(req.params.id);
      return res.json(result);
    } catch {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const result = await userService.removeuser(req.params.id);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};

//Resposavel pelo prompt no caso onde recebe as informações direcionando para o service onde de fato passa pelas validaçoes e execução
