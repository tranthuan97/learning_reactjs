import { Button, Card } from 'antd';
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

  return (
    <div className="my-3" style={{ height: 800, overflow: 'auto' }}>
      {
        listTasks.length > 0 &&
        <Card style={{ background: '#5888b7' }}>
          {
            listTasks.map((item, index) => {
              const displayDEACTIVE = item.active ? 'block' : 'none';
              const displayACTIVE = item.active ? 'none' : 'block';
              const textDecoration = item.active ? 'none' : 'line-through';
              return (
                <Card style={{ background: '#9fc7ef' }} className="my-2" key={index} type="inner" title={<h5 style={{ fontWeight: 600, color: 'brown' }}>{item.date}</h5>} extra={renderActions(index, displayDEACTIVE, displayACTIVE)}>
                  <div style={{ textDecoration, color: 'purple' }}>{item.taskName}</div>
                </Card>
              )
            })
          }
        </Card>
      }
    </div>
  );
};

export default TaskList;