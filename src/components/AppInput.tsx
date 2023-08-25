type InputProps = {
  placeholder: string;
  value: string;
  onChange: (...args: any[]) => any;
};

export default function AppInput(props: InputProps) {
const { placeholder, value, onChange } = props

  return (
    <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="edit_input "
  />
  )
}
