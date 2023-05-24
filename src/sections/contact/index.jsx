import './index.css';
import { useState } from 'react';
import FormInput from '../../components/formInput';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Button from '../../components/button';

const Contact = () => {
  const initialValues = {
    name: '',
    lastname: '',
    phonenumber: '',
    textarea: '',
  };

  const [inputValue, setInputValue] = useState(initialValues);
  const [error, setError] = useState({});
  const [isSubitted, setIsSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = handelError(inputValue);
    setError(errors);
    setIsSubmitted(true);
    if (Object.keys(errors).length === 0) {
      setInputValue(initialValues);
    }
  };

  const handelError = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }
    if (!values.lastname) {
      errors.lastname = 'Last name is required';
    } else if (values.lastname.length < 3) {
      errors.lastname = 'Last name must be at least 3 characters';
    }
    if (!values.phonenumber) {
      errors.phonenumber = 'Phone number is required';
    } else if (values.phonenumber.length < 10) {
      errors.phonenumber = 'Phone number must be at least 10 characters';
    }
    if (!values.textarea) {
      errors.textarea = 'Textarea is required';
    } else if (values.textarea.length < 10) {
      errors.textarea = 'Textarea must be at least 10 characters';
    }
    return errors;
  };

  return (
    <div className='contact'>
      <div className='container'>
        <Heading color='black' level={2} className='heading'>
          CONTACT
        </Heading>
        <Text color='black' className='text'>
          Questions or concerns? Just fill out the form below and our support
          <br /> team will get back to you within 24 hours.
        </Text>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='wrapper'>
          {Object.keys(error).length === 0 && isSubitted ? (
            <div className='element'>
              Thank you, your message has been sent.
            </div>
          ) : null}
          <div className='input-wrapper'>
            <FormInput
              name='name'
              onChange={onChange}
              placeholder='First Name'
              value={inputValue.name}
            />
            <p className='msg-error'>{error.name}</p>
          </div>
          <div className='input-wrapper'>
            <FormInput
              name='lastname'
              onChange={onChange}
              placeholder='Last Name'
              value={inputValue.lastname}
            />
            <p className='msg-error'>{error.lastname}</p>
          </div>
        </div>
        <FormInput
          name='phonenumber'
          onChange={onChange}
          placeholder='Phone Number'
          value={inputValue.phonenumber}
          type='number'
        />
        <p className='msg-error'>{error.phonenumber}</p>
        <FormInput
          name='textarea'
          onChange={onChange}
          placeholder='What Service are you interested in?'
          value={inputValue.textarea}
        />
        <p className='msg-error'>{error.textarea}</p>
        <Button style='secondary' type='submit'>
          Submit Now
        </Button>
      </form>
    </div>
  );
};

export default Contact;
