import React from 'react';
import { Card, Avatar } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

type Props = {
  avatar: string,
  action: any,
  coverImg: string,
  title: string,
  description: string,
  style: object,
  path: string,
}

const CardLink = ({ avatar, action, coverImg, title, description, style, path }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(path)}
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={coverImg}
        />
      }
      actions={[
        // <SettingOutlined key="setting" />,
        <EyeOutlined key="View" onClick={() => navigate(path)} />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" />}
        title={title}
        description={description}
      />
    </Card>
  );
};

CardLink.propTypes = {

};

export default CardLink;