import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Sidebar>
      <Menu>
      <MenuItem component={<Link to="/documentation" />}> 테스트 </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Header;