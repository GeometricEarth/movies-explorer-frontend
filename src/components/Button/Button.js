import './Button.css';

export default function Button({
  classList,
  type = 'button',
  onClick,
  children,
  disabled,
}) {
  return (
    <button
      className={'button ' + classList}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
