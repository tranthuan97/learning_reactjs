import { Button, Input } from 'antd';
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
    <div>
      <Input
        value={task}
        onKeyDown={saveText}
        onChange={taskHandle}
        placeholder="Enter your task"
        style={{ width: 500, paddingInline: 10 }}
      />
      <Button
        onClick={saveText}
        style={{ width: 100, marginInline: 10 }}
      >Add</Button>
      <Button
        onClick={deleteAll}
        style={{ width: 100,  }}
      >Delete all</Button>
    </div>
  );
};

export default TaskInput;