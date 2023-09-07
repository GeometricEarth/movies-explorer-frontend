import './Button.css';

export default function Button({ text, classList, type = 'button', children }) {
  return (
    <button className={'button ' + classList} type={type}>
      {children}
    </button>
  );
}
