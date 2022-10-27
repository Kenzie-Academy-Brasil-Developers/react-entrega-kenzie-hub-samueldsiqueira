import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { loginSchema } from '../../validators/schemas';
import Form from '../../components/Form/Form.ts';
import { BtnComponent } from '../../components/Button/style';
import './style.js';

import { LoginContainer } from './style.js';




const Login = () => {



  const { onSubmitFunction } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });






  return (
    <>
      <LoginContainer>
        <h1 className='brand'> Kenzie Hub</h1>

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' placeholder='E-mails' {...register('email')} />
          <p>{errors.email?.message}</p>

          <label htmlFor='password'>Senha</label>
          <input id='password' name='password' type='password' placeholder='Senha' {...register('password')} />
          <p>{errors.password?.password}</p>

          <BtnComponent className='btn-large' type='submit'>
            Entrar
          </BtnComponent>
          <div className='register-description'>
            <p>Ainda não possui uma conta?</p>
            <Link className='btn-large signin-button ' to='/register'>
              Cadastre-se
            </Link>
          </div>
        </Form>
      </LoginContainer>

    </>
  );
};

export default Login;
