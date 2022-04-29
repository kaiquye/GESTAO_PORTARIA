const Connection = require('../../config/database');

class RepositoriesVisitantes {

    /**
     * @REGRAS um funcionario cadastrarar todos os veiculos que chegarem. Tera uma fila e 
     * serão chamados em ordem. 
     * não pode ter a mesma placa,
     * não pode ter o mesmo numero de telefone,
     * usar IN para procura no banco de dados;
     * @PARAMS username, sector, phone, status_truck, plate_vehicle, plate_truck, services, auth, sector_area
     * @IDEA Quando um motorista for cadastrado, o cadastro dele deverá fica salvo. (ATIVO - INATIVO)
     * apos ser liberado o cadastro dele devera fica inativo.
     */

    async Create(username, sector /*setor responsavel*/, phone, status_truck, plate_vehicle, plate_truck, active, services, auth) {
        return Connection('visitantes').insert({ username, sector, phone, status_truck, plate_vehicle, plate_truck, services, auth, active });
    }
    async FindByPhone(phone) {
        return Connection('visitantes').where('phone', phone);
    }
    async AlterStatus(phone, status) {
        return Connection('visitantes').update({ status: status }).where('phone', phone);
    }
    // async FindBy() {
    //     return Connection('visitantes').insert({});
    // } 
}

module.exports = new RepositoriesVisitantes()

