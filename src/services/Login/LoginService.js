import {HttpRequest} from '../../settings/HttpRequest/HttpRequest';
import {ReactLocalStorageService} from '../../settings/ReactLocalStorageService/ReactLocalStorageService';

export const LoginService = {
	Login: (form) => {
		let params = {
			username: form.username,
			password: form.password,
		};
		return new Promise((resolve, reject) => {
			HttpRequest.post('_Log_In', params, {authentication: false}).then((response) => {
				let Usr = {
					token: response.data.token || '',
					expiracion: response.data.expiracion || '',
					username: response.data.username || '',
					id_sexo: response.data.id_sexo || '',
					password: response.data.password || '',
					id_usuario: response.data.id_usuario || '',
					nombre: response.data.nombre || '',
					apellido_paterno: response.data.apellido_paterno || '',
					apellido_materno: response.data.apellido_materno || '',
				};
				ReactLocalStorageService.set('Usr', Usr);
				resolve(response);
			}).catch((error) => {
				reject(error);
			});
		});
	}
};
