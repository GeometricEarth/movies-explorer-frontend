import './Button.css';

export default function Button({ classList, type = 'button', onClick, children }) {

  return (
    <button className={'button ' + classList} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
