export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  company: string;
}

export type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

export const initialContactValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
  company: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = (values: ContactFormValues): ContactErrors => {
  const nextErrors: ContactErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(values.email.trim())) {
    nextErrors.email = 'Please enter a valid email address.';
  }

  const messageLength = values.message.trim().length;
  if (!messageLength) {
    nextErrors.message = 'Please add a message.';
  } else if (messageLength < 20) {
    nextErrors.message =
      'Please include at least 20 characters so I can better understand your request.';
  } else if (messageLength > 1200) {
    nextErrors.message = 'Message is too long. Please keep it under 1200 characters.';
  }

  return nextErrors;
};
