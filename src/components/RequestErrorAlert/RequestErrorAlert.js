import './RequestErrorAlert.css';

function RequestErrorAlert({ error }) {
  return <span className="request-error">{error}</span>;
}

export default RequestErrorAlert;
