import React, { useState } from "react";
import type { FieldInputProps } from "formik";

interface Props {
  label: string;
  placeholder: string;
  defaultValue?: string;
  selectName: string;
  selectProps?: FieldInputProps<any>;
  disabled?: boolean;
  touched?: any | null;
  error?: any | null;
  onSave?: () => void;
  options?: any | null;
  props?: React.InputHTMLAttributes<HTMLSelectElement>;
}

const SelectWithButton: React.FC<Props> = ({
  label,
  placeholder,
  selectName,
  selectProps,
  disabled = false,
  touched,
  error,
  onSave,
  options,
  props,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col min-w-[280px] max-w-[520px] w-full">
      <label htmlFor={selectName} className="mb-1 text-gray-200 select-none">
        {label}
      </label>
      <div className="flex items-center">
        <select
          id={selectName}
          placeholder={placeholder}
          className={`border border-gray-300/20 outline-none bg-transparent p-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-[#7AAEF1] text-gray-200 px-4 py-2 text-base ${touched && error ? "border-red-600 focus:ring-0" : ""}`}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...selectProps}
          {...props}
        >
          <option className="bg-slate-950 text-gray-200" value="">Seleccione</option>
          {options.map((option: any, index: number) => (
            <option className="bg-slate-950 text-gray-200" key={index} value={option.key}>{option.value}</option>
          ))}
        </select>
        {!disabled && (
          <button
            onClick={onSave}
            className={`border border-gray-300/20 bg-blue-500 h-full text-white p-2 rounded-r hover:bg-blue-600 ${
              isFocused ? "ring-2 ring-[#7AAEF1] outline-none" : ""
            }`}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill={"#FFFFFF"}
                  d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
      {touched && error ? <span className="text-red-600">{error}</span> : null}
    </div>
  );
};

export default SelectWithButton;