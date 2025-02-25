
const Nav = ({link, text}) => {
  return (
    <a href={link} className="hover:text-emerald-400 hover:transition duration-300">{text}</a>
  )
}

export default Nav
