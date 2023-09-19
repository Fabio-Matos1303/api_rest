"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveriam existir
router.get('/', _UserController2.default.index);
router.get('/:id', _UserController2.default.show);

router.post('/', _UserController2.default.store);
router.put('/:id', _UserController2.default.update);
router.delete('/:id', _UserController2.default.delete);

exports. default = router;

/**
 * index -> Listar todos os usuários -> GET
 * store/create -> Criar um novo usuário -> POST
 * show -> Visualizar um usuário -> GET
 * update -> Atualizar um usuário -> PATCH ou PUT
 * delete -> Deletar um usuário -> DELETE
 */
