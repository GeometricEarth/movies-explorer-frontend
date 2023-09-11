import './SectionTitle.css';

export default function SectionTitle({ classList = 'section-title__underline_color_gray', children }) {
  return (
    <h2 className={"section-title " + classList}>{children}</h2>
  )
}