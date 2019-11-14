import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SexoService from "../../../services/Sexo/SexoService";

class ModalSexo extends Component {
	
	state = {};
	
	constructor() {
		super();
		this.state = {
			open: false,
			
			id_sexo: '',
			sexo: '',
			activo: '',
		};
	}
	
	open = () => {
		let item = this.props.item;
		this.setState({
			open: true,
			
			id_sexo: item.id_sexo || '',
			sexo: item.sexo || '',
			activo: item.activo || '',
		});
		if (item.id_sexo > 0) {
			this.show(item);
		}
	};
	
	close = () => {
		this.setState({
			open: false,
			
			id_sexo: '',
			sexo: '',
			activo: '',
		});
	};
	
	
	show = (item) => {
		SexoService.show(item).then(response => {
			this.setState({
				id_sexo: response.data.id_sexo || '',
				sexo: response.data.sexo || '',
				activo: response.data.activo || '',
			});
		}).catch(error => {
			alert(error.mensaje);
		});
	};
	
	save = () => {
		if (this.state.id_sexo > 0) {
			this.update();
		} else {
			this.create();
		}
	};
	
	create = () => {
		SexoService.create(this.state).then(response => {
			alert(response.mensaje);
			this.props.RefrechList();
			this.close();
		}).catch(error => {
			alert(error.mensaje);
		});
	};
	
	update = () => {
		SexoService.update(this.state).then(response => {
			alert(response.mensaje);
			this.props.RefrechList();
			this.close();
		}).catch(error => {
			alert(error.mensaje);
		});
	};
	
	render() {
		return (
			<div>
				
				<span onClick={this.open}>
					{this.props.componente}
				</span>
				
				<Dialog
					open={this.state.open}
					onClose={() => this.close()}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					
					<DialogTitle>
						Modal sexo
					</DialogTitle>
					
					<DialogContent>
						<Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
								<TextField
									label="ID"
									type="text"
									margin="normal"
									variant="outlined"
									fullWidth
									disabled={true}
									value={this.state.id_sexo}
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
								<TextField
									label="Sexo"
									type="text"
									margin="normal"
									variant="outlined"
									fullWidth
									value={this.state.sexo}
									onChange={(e) => {
										this.setState({
											sexo: e.target.value
										});
									}}
									disabled={this.props.tipo === 'view'}
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
								<TextField
									label="Activo"
									type="text"
									margin="normal"
									variant="outlined"
									fullWidth
									value={this.state.activo}
									onChange={(e) => {
										this.setState({
											activo: e.target.value
										});
									}}
									disabled={this.props.tipo === 'view'}
								/>
							</Grid>
						</Grid>
					</DialogContent>
					
					<DialogActions>
						<Button onClick={() => this.close()} color="primary">
							Cerrar
						</Button>
						<Button onClick={() => this.save()} color="primary" autoFocus>
							Crear
						</Button>
					</DialogActions>
				
				</Dialog>
			</div>
		);
	};
}


ModalSexo.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.number.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]),
	tipo: PropTypes.string.isRequired,
	item: PropTypes.object.isRequired,
	RefrechList: PropTypes.func.isRequired,
	componente: PropTypes.element.isRequired
};

export default ModalSexo;
