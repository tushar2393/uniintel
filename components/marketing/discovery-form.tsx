"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ROLE_OPTIONS = [
  "Practice admin",
  "Office manager",
  "RCM / ops lead",
  "Physician / clinical lead",
  "Other",
] as const;

const WORKFLOW_OPTIONS = [
  "Prior-auth packet prep",
  "Referral chase",
  "Inbox triage",
  "Not sure yet",
] as const;

const SITE_OPTIONS = [
  "1",
  "2–3",
  "4–10",
  "11+",
] as const;

type FormState = {
  fullName: string;
  workEmail: string;
  clinic: string;
  role: string;
  numberOfSites: string;
  workflowInterest: string;
  note: string;
};

const emptyForm: FormState = {
  fullName: "",
  workEmail: "",
  clinic: "",
  role: "",
  numberOfSites: "",
  workflowInterest: "",
  note: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }
  if (!values.workEmail.trim()) {
    errors.workEmail = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail.trim())) {
    errors.workEmail = "Enter a valid work email.";
  }
  if (!values.clinic.trim()) {
    errors.clinic = "Clinic / organization is required.";
  }
  if (!values.role) {
    errors.role = "Select a role.";
  }
  if (!values.workflowInterest) {
    errors.workflowInterest = "Select a primary workflow interest.";
  }

  return errors;
}

function buildMailto(values: FormState): string {
  const subject = `Discovery call — ${values.clinic.trim()}`;
  const lines = [
    "Discovery call request",
    "",
    `Full name: ${values.fullName.trim()}`,
    `Work email: ${values.workEmail.trim()}`,
    `Clinic / organization: ${values.clinic.trim()}`,
    `Role: ${values.role}`,
    `Number of sites: ${values.numberOfSites.trim() || "—"}`,
    `Primary workflow interest: ${values.workflowInterest}`,
    `Brief note: ${values.note.trim() || "—"}`,
  ];

  return `mailto:tushar@uniintel.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-mist/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/30";

const labelClass = "block text-sm font-medium text-slate-200";

export function DiscoveryForm({ className }: { className?: string }) {
  const formId = useId();
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function fieldId(name: keyof FormState) {
    return `${formId}-${name}`;
  }

  function errorId(name: keyof FormState) {
    return `${formId}-${name}-error`;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      const firstKey = Object.keys(nextErrors)[0] as keyof FormState;
      const el = document.getElementById(fieldId(firstKey));
      el?.focus();
      return;
    }

    window.location.href = buildMailto(values);
    setSubmitted(true);
  }

  return (
    <form
      id="discovery-form"
      noValidate
      onSubmit={handleSubmit}
      className={cn(
        "space-y-5 rounded-[1.5rem] border border-white/10 bg-slate-950/[0.45] p-5 sm:p-6",
        className,
      )}
      aria-describedby={submitted ? `${formId}-success` : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={fieldId("fullName")}
          label="Full name"
          required
          error={errors.fullName}
          errorId={errorId("fullName")}
        >
          <input
            id={fieldId("fullName")}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={
              errors.fullName ? errorId("fullName") : undefined
            }
          />
        </Field>

        <Field
          id={fieldId("workEmail")}
          label="Work email"
          required
          error={errors.workEmail}
          errorId={errorId("workEmail")}
        >
          <input
            id={fieldId("workEmail")}
            name="workEmail"
            type="email"
            autoComplete="email"
            required
            value={values.workEmail}
            onChange={(e) => update("workEmail", e.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.workEmail)}
            aria-describedby={
              errors.workEmail ? errorId("workEmail") : undefined
            }
          />
        </Field>
      </div>

      <Field
        id={fieldId("clinic")}
        label="Clinic / organization"
        required
        error={errors.clinic}
        errorId={errorId("clinic")}
      >
        <input
          id={fieldId("clinic")}
          name="clinic"
          type="text"
          autoComplete="organization"
          required
          value={values.clinic}
          onChange={(e) => update("clinic", e.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.clinic)}
          aria-describedby={errors.clinic ? errorId("clinic") : undefined}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={fieldId("role")}
          label="Role"
          required
          error={errors.role}
          errorId={errorId("role")}
        >
          <select
            id={fieldId("role")}
            name="role"
            required
            value={values.role}
            onChange={(e) => update("role", e.target.value)}
            className={cn(inputClass, "appearance-none")}
            aria-invalid={Boolean(errors.role)}
            aria-describedby={errors.role ? errorId("role") : undefined}
          >
            <option value="">Select role</option>
            {ROLE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={fieldId("numberOfSites")}
          label="Number of sites"
          error={errors.numberOfSites}
          errorId={errorId("numberOfSites")}
        >
          <select
            id={fieldId("numberOfSites")}
            name="numberOfSites"
            value={values.numberOfSites}
            onChange={(e) => update("numberOfSites", e.target.value)}
            className={cn(inputClass, "appearance-none")}
          >
            <option value="">Optional</option>
            {SITE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={fieldId("workflowInterest")}
        label="Primary workflow interest"
        required
        error={errors.workflowInterest}
        errorId={errorId("workflowInterest")}
      >
        <select
          id={fieldId("workflowInterest")}
          name="workflowInterest"
          required
          value={values.workflowInterest}
          onChange={(e) => update("workflowInterest", e.target.value)}
          className={cn(inputClass, "appearance-none")}
          aria-invalid={Boolean(errors.workflowInterest)}
          aria-describedby={
            errors.workflowInterest
              ? errorId("workflowInterest")
              : undefined
          }
        >
          <option value="">Select workflow</option>
          {WORKFLOW_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={fieldId("note")}
        label="Brief note"
        error={errors.note}
        errorId={errorId("note")}
      >
        <textarea
          id={fieldId("note")}
          name="note"
          rows={3}
          value={values.note}
          onChange={(e) => update("note", e.target.value)}
          className={cn(inputClass, "resize-y min-h-[5.5rem]")}
          placeholder="Optional context on the queue you want to discuss"
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Book a discovery call
        </Button>
        {submitted ? (
          <p
            id={`${formId}-success`}
            role="status"
            className="text-sm text-accent"
          >
            Opening your email app with the details filled in…
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  errorId,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  errorId: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-mist"> (optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-sm text-accent-2"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
