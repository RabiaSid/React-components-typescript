type SelectProps = {
  options: any[];
  value: string;
  onChange: (...args: any[]) => any;
};

export default function AppSelect(props: SelectProps) {
  const { options, value, onChange } = props;
  return (
    <select value={value} onChange={onChange} className="custom-select shadow">
      {options.map((option, index) => (
        <option key={index} value={option.value} className="">
          {option.label}
        </option>
      ))}
    </select>
  )
}
