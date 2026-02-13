import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { FaCheckCircle, FaCopy } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import Section from '../components/Section';
import Toast, { type ToastType } from '../components/Toast';
import { siteConfig } from '../content/site';
import { trackEvent } from '../utils/analytics';
import {
  initialContactValues,
  validateContact,
  type ContactErrors,
  type ContactFormValues,
} from '../utils/contactValidation';

const Contact = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAt] = useState(() => Date.now());
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    isOpen: boolean;
    type: ToastType;
    title: string;
    message?: string;
  }>({
    isOpen: false,
    type: 'info',
    title: '',
  });

  const characterCount = useMemo(() => formValues.message.trim().length, [formValues.message]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.person.email);
    setToast({
      isOpen: true,
      type: 'success',
      title: 'Email copied',
      message: `${siteConfig.person.email} is now in your clipboard.`,
    });
    trackEvent('contact_copy_email');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage('Please resolve the highlighted fields before submitting.');
      return;
    }

    const elapsed = Date.now() - submittedAt;
    if (formValues.company.trim().length > 0 || elapsed < 1500) {
      setStatusMessage('Submission blocked. Please try again in a moment.');
      setToast({
        isOpen: true,
        type: 'error',
        title: 'Submission not accepted',
        message: 'The form detected suspicious behavior and blocked this request.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Sending your message…');

    try {
      const payload = new URLSearchParams({
        'form-name': 'contact',
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      setFormValues(initialContactValues);
      setErrors({});
      setStatusMessage('Thanks for your message. I will get back to you soon.');
      setToast({
        isOpen: true,
        type: 'success',
        title: 'Message sent',
        message: 'Thanks for reaching out — I will reply as soon as possible.',
      });
      trackEvent('contact_submit_success');
    } catch {
      setStatusMessage('Message failed to send. Please email me directly.');
      setToast({
        isOpen: true,
        type: 'error',
        title: 'Submission failed',
        message: 'Please try again or reach out via email.',
      });
      trackEvent('contact_submit_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section
        id='contact'
        label='Contact'
        title='Let’s build something meaningful'
        subtitle='Send a message, copy my email instantly, or book a quick intro chat.'
      >
        <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <Card>
            <form method='POST' name='contact' onSubmit={handleSubmit} noValidate>
              <input type='hidden' name='form-name' value='contact' />
              <input
                type='text'
                name='company'
                value={formValues.company}
                onChange={handleChange}
                className='hidden'
                autoComplete='off'
                tabIndex={-1}
                aria-hidden='true'
              />

              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='sm:col-span-1'>
                  <label
                    htmlFor='contact-name'
                    className='mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200'
                  >
                    Name
                  </label>
                  <input
                    id='contact-name'
                    className='w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name ? (
                    <p id='contact-name-error' className='mt-1 text-xs text-rose-500'>
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className='sm:col-span-1'>
                  <label
                    htmlFor='contact-email'
                    className='mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200'
                  >
                    Email
                  </label>
                  <input
                    id='contact-email'
                    className='w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
                    type='email'
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email ? (
                    <p id='contact-email-error' className='mt-1 text-xs text-rose-500'>
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className='mt-4'>
                <label
                  htmlFor='contact-message'
                  className='mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200'
                >
                  Message
                </label>
                <textarea
                  id='contact-message'
                  className='w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
                  name='message'
                  rows={7}
                  value={formValues.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : 'contact-message-help'
                  }
                />
                <p
                  id='contact-message-help'
                  className='mt-1 text-xs text-slate-500 dark:text-slate-400'
                >
                  {characterCount}/1200 characters
                </p>
                {errors.message ? (
                  <p id='contact-message-error' className='mt-1 text-xs text-rose-500'>
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className='mt-5 flex flex-wrap items-center gap-3'>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='disabled:cursor-not-allowed disabled:opacity-70'
                >
                  {isSubmitting ? 'Sending…' : siteConfig.cta.secondary}
                </Button>
                <p className='text-sm text-slate-600 dark:text-slate-300' aria-live='polite'>
                  {statusMessage}
                </p>
              </div>
            </form>
          </Card>

          <Card>
            <h3 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>
              Alternative contact options
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300'>
              Prefer direct outreach? Use one of these quick actions.
            </p>

            <div className='mt-5 space-y-3'>
              <button
                type='button'
                onClick={handleCopyEmail}
                className='flex w-full items-center justify-between rounded-lg border border-slate-300 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800'
              >
                <span>{siteConfig.person.email}</span>
                <span className='inline-flex items-center gap-2 text-xs'>
                  <FaCopy size={12} aria-hidden='true' /> Copy
                </span>
              </button>

              <a
                href={siteConfig.cta.scheduleUrl}
                target='_blank'
                rel='noreferrer'
                className='flex w-full items-center justify-between rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800'
                onClick={() => trackEvent('contact_schedule_click')}
              >
                <span>Schedule a chat</span>
                <FaCheckCircle size={14} aria-hidden='true' />
              </a>

              <a
                href='mailto:julian.macleod96@gmail.com'
                className='flex w-full items-center justify-between rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800'
                onClick={() => trackEvent('contact_mailto_click')}
              >
                <span>Open email client</span>
                <FaCheckCircle size={14} aria-hidden='true' />
              </a>
            </div>
          </Card>
        </div>
      </Section>

      <Toast
        isOpen={toast.isOpen}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast((current) => ({ ...current, isOpen: false }))}
      />
    </>
  );
};

export default Contact;
