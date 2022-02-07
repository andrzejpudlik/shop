import { Link } from 'react-router-dom';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 90%;
  border-radius: 20%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Text = styled.p`
  line-height: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const Price = styled.p`
  line-height: 1.5rem;
  font-weight: 900;
  text-align: center;
  color: #088178;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #088178;
    color: #fff;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={item.img} />
        <Text>{item.title}</Text>
        <Price>{`$${item.price}`}</Price>
      </Wrapper>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;