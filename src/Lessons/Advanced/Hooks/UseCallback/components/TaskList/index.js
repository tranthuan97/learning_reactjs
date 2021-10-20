import { Button, Card, Skeleton } from 'antd';
import React from 'react';

const TaskList = ({ listTasks, deleteTask, action }) => {
  const renderActions = (index, displayDEACTIVE, displayACTIVE) => {
    return (
      <div className="d-flex">
        <p style={{ display: displayDEACTIVE }}>
          <Button onClick={() => action(index, false)} style={{ width: 100 }}>DEACTIVE</Button>
        </p>
        <p style={{ display: displayACTIVE }}>
          <Button onClick={() => action(index, true)} style={{ width: 100 }}>ACTIVE</Button>
        </p>
        <p className="ml-1">
          <Button onClick={() => deleteTask(index)} style={{ width: 100 }}>DELETE</Button>
        </p>
      </div>
    )
  }

  const title = (item) => <h5 style={{ fontWeight: 600, color: 'brown' }}>{item.date}</h5>

  return (
    <div className="my-3" style={{ height: 500, overflow: 'auto' }}>
      {listTasks.length > 0 ?
        <Card style={{ background: '#5888b7' }}>
          {listTasks.map((item, index) => {
            const displayDEACTIVE = item.active ? 'block' : 'none';
            const displayACTIVE = item.active ? 'none' : 'block';
            const textDecoration = item.active ? 'none' : 'line-through';
            return (
              <Card
                key={index}
                type="inner"
                className="my-2"
                title={title(item)}
                style={{ background: '#9fc7ef' }}
                extra={renderActions(index, displayDEACTIVE, displayACTIVE)}>
                <div style={{ textDecoration, color: 'purple' }}>{item.taskName}</div>
              </Card>
            )
          })}
        </Card> :
        <Skeleton active />
      }
    </div>
  );
};

export default TaskList;