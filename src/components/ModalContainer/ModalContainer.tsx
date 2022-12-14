import { BtnComponent } from '../Button/style';
import Form from '../../styles/Form/Form';
import { ContainerModal } from './styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechContext } from '../../contexts/TechContext';

interface IForm {
	title: string;
	status: string;
	id: string;
}

const techSchema = yup.object({
	status: yup.string().required('ta errado acerta essa porra'),
});

const ModalContainer = () => {
	const { modal, handleTechs, hideModal } = useContext(TechContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({ resolver: yupResolver(techSchema) });

	return (
		<ContainerModal>
			<div className='bg-modal'>
				<div>
					<div className='close-modal'>
						<h1>Cadastrar Tecnologia</h1>

						<button type='submit' onClick={hideModal}>
							X
						</button>
					</div>
				</div>
				<Form onSubmit={handleSubmit(handleTechs)}>
					<label htmlFor='title'>Título</label>
					<input id='title' type='text' placeholder='Título' {...register('title')} />
					<p>{errors.title?.message}</p>
					<label htmlFor='status'>Selecionar Status</label>
					<select {...register('status')}>
						<option value='iniciante'>Iniciante</option>
						<option value='intermediário'>Intermediário</option>
						<option value='avançado'>Avançado</option>
					</select>
					<BtnComponent backgroundColor='var(--primary-color)' type='submit'>
						Enviar
					</BtnComponent>
				</Form>
			</div>
		</ContainerModal>
	);
};

export default ModalContainer;
