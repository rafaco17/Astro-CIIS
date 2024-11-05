import React, { useState } from "react";
import type { FieldInputProps } from "formik";
import IconEye from "../../../../../assets/icons/IconEye";
import IconEyeOff from "../../../../../assets/icons/IconEyeOff";

interface Props {
  label: string;
  placeholder: string;
  defaultValue?: string;
  inputName: string;
  inputProps?: FieldInputProps<any>;
  disabled?: boolean;
  touched?: any | null;
  error?: any | null;
  onSave?: () => void;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputPasswordWithButton: React.FC<Props> = ({
  label,
  placeholder,
  defaultValue,
  inputName,
  inputProps,
  disabled = false,
  touched,
  error,
  onSave,
  props,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col min-w-[280px] max-w-[520px] w-full">
      <label htmlFor={inputName} className="mb-1 text-gray-200 select-none">
        {label}
      </label>
      <div className="flex items-center relative">
        <input
          id={inputName}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`border border-gray-300/20 bg-transparent p-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-[#7AAEF1] text-gray-200 px-4 py-2 text-base ${touched && error ? "border-red-600 focus:ring-0" : ""}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          {...inputProps}
          {...props}
        />
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
                  fill={"#7AAEF1"}
                  d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"
                />
              </svg>
            </div>
          </button>
        )}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-10 pr-3 flex items-center text-gray-400"
        >
          {showPassword ? (
            <IconEye size={24} color="white" />
          ) : (
            <IconEyeOff size={24} color="white" />
          )}
        </button>
      </div>
      {touched && error ? <span className="text-red-600">{error}</span> : null}
    </div>
  );
};

export default InputPasswordWithButton;
