import React from 'react';
import { Card, Skeleton, Avatar, Row, Col, Empty } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

const TaskList = ({ listTasks, deleteTask }) => {
  const title = (item) => <h5 style={{ fontWeight: 600, color: 'brown' }}>{item.date}</h5>

  return (
    <div className="my-3">
      {listTasks.length > 0 ?
        <Card>
          <Row gutter={[16, 16]}>
            {listTasks.map((item, index) => {
              return (
                <Col key={index} >
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="The item does not exist"
                        src={item.img}
                      />
                    }
                    actions={[
                      <DeleteOutlined onClick={() => deleteTask(index)} key="delete" />,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={title(item)}
                      description={item.taskName}
                    />
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Card> :
        <Empty />
      }

    </div>
  );
};

export default TaskList;