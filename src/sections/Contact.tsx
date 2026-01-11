import { useState, ChangeEvent } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => alert('Thank you for your message!'))
      .catch((error) => alert(error));
  };

  return (
    <div id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form
        method='POST'
        name='contact'
        className='flex flex-col max-w-[600px] w-full'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or send me an email - julian.macleod96@gmail.com{' '}
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          aria-label='Name'
          name='name'
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='text'
          placeholder='Email'
          aria-label='Email'
          name='email'
          value={formValues.email}
          onChange={handleChange}
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows={10}
          placeholder='Message'
          aria-label='Message'
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
        <button
          type='submit'
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
