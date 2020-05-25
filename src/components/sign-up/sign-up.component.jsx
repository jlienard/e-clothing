import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {displayName, email, password, confirmPassword} = userInfo;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

  const { user } = auth.createUserWithEmailAndPassword(email, password);
    createUserProfileDocument(user, { displayName });
    console.log(createUserProfileDocument);
  };

  return(
    <div className='sign-up'>
      <h2 className='title'>Je n'ai pas de compte</h2>
      <span>S'inscrire avec email et mot de passe</span>
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={handleChange}
        label="nom d'utilisateur"
        required
      />
      <FormInput
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        label='email'
        required
      />
      <FormInput
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        label='mot de passe'
        required
      />
      <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
        label='confirmer mot de passe'
        required
      />
      <CustomButton type='submit'>s'inscrire</CustomButton>
    </form>
    </div>
  );
}

export default SignUp;