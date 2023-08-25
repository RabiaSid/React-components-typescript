type ButtonProps = {
  label: string;
  onClick: (...args: any[]) => any;
};

export default function AppButton(props: ButtonProps) {
const { label, onClick } = props

  return <button onClick={onClick} type="button" className="btn btn-outline-primary">{label}</button>;
}
