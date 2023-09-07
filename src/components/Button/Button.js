import './Button.css';

export default function Button({ classList, type = 'button', navigate, children }) {
  
  return (
    <button className={'button ' + classList} type={type}>
      {children}
    </button>
  );
}
