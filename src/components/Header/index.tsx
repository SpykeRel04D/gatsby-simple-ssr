import React from 'react';

import { Container } from './styles';

const Header = props => <>{props.children ? props.children : <Container></Container>}</>;

export default Header;
