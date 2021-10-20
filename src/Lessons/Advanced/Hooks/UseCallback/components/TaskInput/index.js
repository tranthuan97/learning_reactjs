import { Button, Col, Input, Row } from 'antd';
import React from 'react';

const TaskInput = ({ saveTaskToList, deleteAll }) => {
  const [task, setTask] = React.useState('')
  const taskHandle = (e) => {
    setTask(e.target.value)
  }
  const saveText = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && task) {
      saveTaskToList(task)
      setTask('');
    }
  }
  return (
    <div className="d-md-flex">
      <Input
        className="flex--grow-1 mr-md-2 mt-1"
        value={task}
        onKeyDown={saveText}
        onChange={taskHandle}
        placeholder="Enter your task"
        style={{ width: '100%' }}
      />
      <div className="d-flex">
        <div className="mt-1">
          <Button
            onClick={saveText}
          >Add</Button>

        </div>
        <div className="ml-1 mt-1">
          <Button
            onClick={deleteAll}
          >Delete all</Button>
        </div>
      </div>

    </div>
  );
};

export default TaskInput;