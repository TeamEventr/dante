import React from "react";
import Icon from "./icon-wrapper";

interface InputWrapperProps {
  label?: string;
  type: string;
  name: string;
  value?: string | number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width: string;
  grow?: boolean;
  className?: string;
}


interface PasswordWrapperProps {
    label?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    width: string;
    className?: string;
}

export const Input: React.FC<InputWrapperProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  width,
  grow,
}) => {
  return (
    <div className={`relative flex flex-col ${grow? 'flex-grow' : ''}`}>
      {label && <label htmlFor={name} className={`text-sm text-eventr-gray-800`}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${width} ${type == 'number' && 'indent-[36px]'} 
        bg-transparent border-b border-eventr-gray-500 outline-none`}
      />
    {type == 'number' && <span className={`absolute left-1.5 top-5 text-eventr-gray-500`}>+91</span>}
    </div>
  );
};


export const Password: React.FC<PasswordWrapperProps> = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    width,
}) => {
    const [isPassVisible, setPassVisible] = React.useState(false);

    return (
        <div className="relative flex flex-col">
            {label && <label htmlFor={name} className={`text-sm text-eventr-gray-800`}>{label}</label>}
            <input
                type={isPassVisible ? "text" : "password"}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${width} 
                bg-transparent border-b border-eventr-gray-500 outline-none pb-1.5`}
                />
            <button
                type="button"
                onClick={() => setPassVisible(!isPassVisible)}
                className={`absolute right-2 bottom-2 flex items-center text-eventr-gray-200`}
            >
                {isPassVisible ? <Icon icon='visibility' size="20px"/> : <Icon icon='visibility_off' size="20px"/>}
            </button>
        </div>
    );
};

