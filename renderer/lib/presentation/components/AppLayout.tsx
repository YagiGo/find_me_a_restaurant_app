import React, {FC, ReactNode} from 'react';
import TopBar from './TopBar';
import { Col, Row } from 'react-bootstrap';
import MapView from './MapView';
import Style from '../style/AppLayout.module.scss';
interface Props {
    children: ReactNode
}
const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className={`${Style.layout}`}>
      <Row className='p-0'>
        <TopBar />
      </Row>
      <Row className='p-0'>
        <Col lg={8} className={`${Style.map}`}>
          <MapView />
        </Col>
        <Col lg={4} className={`${Style.list}`}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
