function SocialLink({ href, icon, styleIcon }) {
  return (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className={styleIcon}>
        <i className={icon}></i>
      </a>
    </li>
  );
}
export default SocialLink;
