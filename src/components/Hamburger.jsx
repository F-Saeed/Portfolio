import { MenuIcon, MenuDash } from './styles/Hamburger.style';

const Hamburger = (props) => {
  const { menustate, setMenuState } = props;

  return (
    <MenuIcon
      menustate={menustate ? 1 : 0}
      onClick={() => setMenuState(!menustate)}
    >
      <MenuDash menustate={menustate ? 1 : 0}></MenuDash>
    </MenuIcon>
  );
};

export default Hamburger;
