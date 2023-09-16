import Sequelize, { Model } from "sequelize";
import appconfig from "../config/appconfig"

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        field: 'originalName',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio'
          }
        },
      },

      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        field: 'fileName',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio'
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appconfig.url}/images/${this.getDataValue('filename')}`
        }
      }
    }, {
      sequelize,
      tableName: 'fotos'
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
  }
}
