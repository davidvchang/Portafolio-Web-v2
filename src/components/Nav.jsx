
const Nav = ({text, onClick}) => {
  return (
    <button className="hover:text-emerald-400 hover:transition duration-300 cursor-pointer" onClick={onClick}>{text}</button>
  )
}

export default Nav
