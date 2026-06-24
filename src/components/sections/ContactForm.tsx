'use client';

import { FormEvent, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { services } from '@/data/services';
import { clientDb } from '@/lib/firestore-client';
import { ContactDocument } from '@/types';

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ status: 'idle', message: '' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!phone && !email) {
      setState({
        status: 'error',
        message: 'Please share either a phone number or an email address.'
      });
      return;
    }

    if (phone && phone.length < 7) {
      setState({
        status: 'error',
        message: 'Please enter a valid phone number.'
      });
      return;
    }

    setState({ status: 'submitting', message: 'Sending your enquiry...' });

    const now = new Date().toISOString();
    const enquiry: ContactDocument = {
      name,
      ...(phone ? { phone } : {}),
      ...(email ? { email } : {}),
      ...(service ? { service } : {}),
      message,
      status: 'new',
      createdAt: now,
      updatedAt: now
    };

    try {
      if (!clientDb) {
        throw new Error('Firebase is not configured.');
      }

      await addDoc(collection(clientDb, 'contacts'), enquiry);
    } catch {
      setState({
        status: 'error',
        message: 'We could not send your enquiry right now. Please try again.'
      });
      return;
    }

    form.reset();
    setState({
      status: 'success',
      message: 'Thanks. The Innotech team will follow up shortly.'
    });
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" required minLength={2} placeholder="Your name" />
      </label>
      <label>
        Phone
        <input name="phone" minLength={7} placeholder="Phone number" />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="Email address" />
      </label>
      <label>
        Service
        <select name="service" defaultValue="">
          <option value="">Select a service</option>
          {services.map((service) => (
            <option value={service.title} key={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          minLength={10}
          placeholder="Tell us about your project, location, and timeline."
        />
      </label>
      <button className="btn btn-gold" type="submit" disabled={state.status === 'submitting'}>
        {state.status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
      </button>
      <p
        className={`form-message ${state.status === 'error' ? 'error' : ''} ${
          state.status === 'success' ? 'success' : ''
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
