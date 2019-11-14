import {HttpRequest} from '../../settings/HttpRequest/HttpRequest';

class SexoService {
	
	static all = () => {
		let params = {};
		return new Promise((resolve, reject) => {
			HttpRequest.post('_Sexo_Datos', params).then((response) => {
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	
	static show = (item) => {
		let params = {
			id_sexo: item.id_sexo
		};
		return new Promise((resolve, reject) => {
			HttpRequest.post('_Sexo_Xid', params).then((response) => {
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	
	static create = (form) => {
		let params = {
			id_sexo: null,
			sexo: form.sexo,
			activo: form.activo,
		};
		return new Promise((resolve, reject) => {
			HttpRequest.post('_Sexo_Agregar', params).then((response) => {
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	
	static update = (form) => {
		let params = {
			id_sexo: form.id_sexo,
			sexo: form.sexo,
			activo: form.activo,
		};
		return new Promise((resolve, reject) => {
			HttpRequest.post('_Sexo_Editar', params).then((response) => {
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	
	static delete = (item) => {
		let params = {
			id_sexo: item.id_sexo
		};
		return new Promise((resolve, reject) => {
			HttpRequest.post('_Sexo_Eliminar', params).then((response) => {
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	
}

export default SexoService;
