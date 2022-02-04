import { useState } from 'react';
import styled from 'styled-components';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { mobile } from '../../responsive';

const Container = styled.div`
  display: ${(props) => props.visibility ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #088178;
  color: white;
  ${mobile({ height: 60 })};
`;

const Text = styled.p`
  text-align: center;
  font-weight: 500;
  padding-top: 5px;
  ${mobile({ marginRight: 65, paddingTop: 0 })};
`;

const Button = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 8px;
  cursor: pointer;
`;

const Announcement = () => {
  const [visibility, setVisibility] = useState(true);
  return (
    <Container visibility={visibility}>
      <Text>Super Deal! Free Shipping on Orders Over $50</Text>
      <Button>
        <CloseOutlinedIcon 
          onClick={() => setVisibility(false)}
        />
      </Button>
    </Container>
  );
};

export default Announcement;