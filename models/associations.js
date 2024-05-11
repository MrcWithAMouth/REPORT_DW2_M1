const User = require('./User');
const Phone = require('./Phone');
const Company = require('./Company'); 

function associations() {
    User.hasMany(Phone, { foreignKey: 'user_id', as: 'phones' }); 
    User.belongsTo(Company, { foreignKey: 'company_id', as: 'company' });
    Company.hasMany(User, { foreignKey: 'company_id', as: 'users' });
}

module.exports = associations;
