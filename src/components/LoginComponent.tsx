import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';

import { TextField, Button } from '@material-ui/core';

import { loginWithEmailPasswordThunk, loginWithGoogleThunk } from '@store/auth';
import { useDispatch } from 'react-redux';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled(TextField).attrs({
  variant: 'outlined',
})`
  & > * {
    font-size: 2rem;
  }
  margin-bottom: 2rem;
`;

const DefaultButton = styled(Button).attrs({
  variant: 'contained',
  size: 'large',
})`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const SubmitButton = styled(DefaultButton).attrs({
  type: 'submit',
  color: 'primary',
})``;

const GoogleLoginButton = styled(DefaultButton).attrs({
  type: 'button',
})``;

const LoginFormComponent: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { username, password } = data;
    dispatch(loginWithEmailPasswordThunk(username, password));
  };

  const googleLogin = () => {
    dispatch(loginWithGoogleThunk());
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={Field}
          type="text"
          name="username"
          label="아이디"
          control={control}
          defaultValue="yangtopia@gmail.com"
        />
        <Controller
          as={Field}
          type="password"
          name="password"
          label="비밀번호"
          control={control}
          defaultValue="Wlsrb0312!@"
        />
        <SubmitButton>로그인</SubmitButton>
      </Form>
      <GoogleLoginButton onClick={googleLogin}>구글 로그인</GoogleLoginButton>
    </Wrap>
  );
};

export default LoginFormComponent;
