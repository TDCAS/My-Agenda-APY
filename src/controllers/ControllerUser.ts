import User from '../models/User';

class ControllerUser {
  // eslint-disable-next-line spaced-comment
  //create
  async create(req:any, res:any) {
    /* 
    URL 
    {{ _.url }}/users/

    Estrutura do body
      {
      "nome":"fuland",
      "email": "fortes2@gmail.com",
      "password":"123456"
      }
*/
    try {
      const novoUser = await User.create(req.body);
      
      return res.json(novoUser);
      // res.status(401).json({
      //   tudoCerto: true,
      // });
    } catch (e) {
      return res.status(400).json({errors: ['erro na requisição']});
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }
      await user.destroy();
      return res.json({ message: ['usuario apafo'] });
    } catch (e) {
      console.log(e);
      return res.json({ message: ['erro na requisicao'] });
    }
  }
}

export default new ControllerUser();
