import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import routes from '../routes';
import CardLink from '../components/CardLink';

const Home = () => {

  const renderCardLink = (item: any, index: number) => {
    if (item.display === 'none') return '';
    return <Col key={index}><CardLink title={item.name} coverImg={item.img} path={item.path} avatar={''} description={''} style={{}} action={undefined} /></Col>
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        {routes.map(renderCardLink)}
      </Row>
    </div>
  );
};

Home.propTypes = {

};

export default Home;