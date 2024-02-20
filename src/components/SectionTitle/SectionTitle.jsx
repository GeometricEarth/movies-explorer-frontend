import './SectionTitle.css';

export default function SectionTitle({ classList = 'section-title_underline-color_gray', children }) {
  return (
    <h2 className={"section-title " + classList}>{children}</h2>
  )
}