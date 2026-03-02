"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

interface ContactFormContent {
  emailSubjectPrefix: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  organizationLabel: string;
  organizationPlaceholder: string;
  interestLabel: string;
  interestPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  note: string;
  success: string;
  notProvided: string;
  interests: string[];
}

interface ContactFormProps {
  content: ContactFormContent;
}

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
}

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  organization: "",
  interest: "",
  message: ""
};

export function ContactForm({ content }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setIsSubmitted(false);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${content.emailSubjectPrefix} - ${formData.interest}`;
    const body = [
      `${content.fullNameLabel}: ${formData.fullName}`,
      `${content.emailLabel}: ${formData.email}`,
      `${content.organizationLabel}: ${formData.organization || content.notProvided}`,
      "",
      `${content.interestLabel}: ${formData.interest}`,
      "",
      `${content.messageLabel}:`,
      formData.message
    ].join("\n");

    const mailto = `mailto:info@hiraadinstitute.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form-grid">
        <label className="contact-form-field">
          <span>{content.fullNameLabel}</span>
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={onChange}
            placeholder={content.fullNamePlaceholder}
          />
        </label>

        <label className="contact-form-field">
          <span>{content.emailLabel}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={onChange}
            placeholder={content.emailPlaceholder}
          />
        </label>

        <label className="contact-form-field">
          <span>{content.organizationLabel}</span>
          <input
            name="organization"
            type="text"
            autoComplete="organization"
            value={formData.organization}
            onChange={onChange}
            placeholder={content.organizationPlaceholder}
          />
        </label>

        <label className="contact-form-field">
          <span>{content.interestLabel}</span>
          <select name="interest" required value={formData.interest} onChange={onChange}>
            <option value="">{content.interestPlaceholder}</option>
            {content.interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="contact-form-field">
        <span>{content.messageLabel}</span>
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={onChange}
          placeholder={content.messagePlaceholder}
        />
      </label>

      <div className="contact-form-actions">
        <button type="submit" className="btn btn-primary contact-form-submit">
          {content.submitLabel}
        </button>
        <p className="contact-form-note">{content.note}</p>
      </div>

      {isSubmitted ? <p className="contact-form-success">{content.success}</p> : null}
    </form>
  );
}
