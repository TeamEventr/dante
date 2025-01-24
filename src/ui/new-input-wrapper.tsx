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

const Input: React.FC<InputWrapperProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  width,
  grow,
  className = "",

}) => {
  return (
    <div className={`relative flex flex-col ${grow? 'flex-grow' : ''}`}>
      {label && <label htmlFor={name} className={` text-eventr-gray-100`}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${width} ${type == 'number' && 'indent-[36px]'} text-lg bg-transparent border-b border-eventr-gray-500 outline-none 
                    p-1.5 ${className}`}
      />
    {type == 'number' && <span className={`absolute left-1.5 top-1.5 text-lg text-eventr-gray-500`}>+91</span>}
    </div>
  );
};

export default Input;