import { useState } from 'react';
import { send } from 'emailjs-com';
import { MainDiv, Section, Heading } from './styles/general.style';
import * as S from './styles/Contact.style';
import { EnvelopeFill as Envelope } from '@styled-icons/bootstrap/EnvelopeFill';

const Contact = () => {
  const [toSend, setToSend] = useState({
    fromName: '',
    fromEmail: '',
    message: '',
  });

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_x8nx494',
      'template_i3tj34r',
      toSend,
      'user_0AOtYFrdhep4Q5WnSgWXI'
    )
      .then((response) => {
        console.log('Success!', response.status, response.text);
        setToSend({
          fromName: '',
          fromEmail: '',
          message: '',
        });
      })
      .catch((err) => {
        console.log('Failed...', err);
      });
  };

  return (
    <MainDiv>
      <Section>
        <Heading>Interested in working with me, Let's Connect!</Heading>
        <S.ContactForm onSubmit={onSubmit}>
          <S.NameInputDiv>
            <p>Name</p>
            <input
              type='text'
              name='fromName'
              value={toSend.fromName}
              onChange={handleChange}
            />
          </S.NameInputDiv>
          <S.EmailInputDiv>
            <p>Email</p>
            <input
              type='text'
              name='fromEmail'
              value={toSend.fromEmail}
              onChange={handleChange}
            />
          </S.EmailInputDiv>
          <S.TextAreaDiv>
            <p>Message</p>
            <textarea
              type='text'
              name='message'
              value={toSend.message}
              onChange={handleChange}
            />
          </S.TextAreaDiv>
          <S.SubmitButton type='submit'>
            <Envelope />
            Submit
          </S.SubmitButton>
        </S.ContactForm>
      </Section>
    </MainDiv>
  );
};

export default Contact;
