import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

const MyForm = styled.form`
  width: '50%';
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Paper = styled.div`
  width: 50%;
  margin: auto;
  background: white;
  box-shadow: 10px 10px 15px black;
  margin-top: 10%;
`;

interface Props {}

interface FormField {
  email: String;
  address: String;
}

const form: React.FC<Props & InjectedFormProps<FormField, Props>> = (props) => {
  const formSubmit = (values: FormField) => {
    console.log(values);
  };
  return (
    <Paper>
      <MyForm onSubmit={props.handleSubmit(formSubmit)}>
        <label htmlFor='email'>Email</label>
        <Field
          id='email'
          name={'Email'}
          component='input'
          type='email'
          css={{ margin: '0.5rem' }}
        />

        <label htmlFor='email'>Address</label>
        <Field name={'Address'} component='input' css={{ margin: '0.5rem' }} />
        <button type='submit'>Submit</button>
      </MyForm>
    </Paper>
  );
};

export default reduxForm<FormField, Props>({
  form: 'reduxDorm',
})(form);
