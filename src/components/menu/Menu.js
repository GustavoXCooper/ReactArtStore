import styled from "styled-components";
import {Link} from 'react-router-dom';
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <MenuBody>
      <SizeRestriction>
        <CustomLink to='/gallery'>
          <MenuItem 
            text='Art Gallery'
          />
        </CustomLink>
        <CustomLink to='/about-me'>
          <MenuItem 
            text='About Me'
          />
        </CustomLink>
      </SizeRestriction>
    </MenuBody> 
  );
}  
const SizeRestriction = styled.div`
  width: 90vw;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: left;
  flex-direction: row;
  list-style-type: none;
`

const CustomLink = styled(Link)`
  text-decoration: none;
`
const MenuBody = styled.ul`
  justify-content: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  background-color: #000;
`

export default Menu;
  