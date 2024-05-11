const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');

// Carregar variáveis de ambiente
const {
  DATABASE,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOSTNAME,
  PORT
} = process.env;

const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOSTNAME,
  dialect: 'mysql'
});

async function authenticate(email, password) {
  const user = await sequelize.query(
    'SELECT * FROM User WHERE email = :email AND password = :password',
    {
      replacements: { email, password },
      type: Sequelize.QueryTypes.SELECT
    }
  );

  if (!user || user.length === 0) {
    throw new Error('Authentication failed');
  }

  const token = jwt.sign({ id: user[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

module.exports = {
  authenticate
};