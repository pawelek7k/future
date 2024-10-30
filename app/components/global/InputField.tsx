import React from "react";

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoComplete?: string;
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  label,
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-neutral-100 text-sm font-medium mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-neutral-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
    />
  </div>
);
