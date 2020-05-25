import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ 
    email: '', 
    password: '' 
  });

  const { email, password } = userInfo;

  const handleSubmit = event => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value })
  };

  return (
    <div className='sign-in'>
      <h2>J'ai déjà un compte</h2>
      <span>Se connecter avec email et mot de passe</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='mot de passe'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Se connecter </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Compte Google </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;