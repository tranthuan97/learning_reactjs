import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const UseCallback = props => {
  const [listItem, setListItem] = React.useState([]);

  const saveTask = (task) => {
    const data = [...listItem]
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes()
    const fullday = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    data.unshift({ date: time + ' - ' + fullday, taskName: task, active: true });
    setListItem(data);
  }
  const deleteAll = (task) => {
    setListItem([]);
  }

  const deleteTask = (index) => {
    listItem.splice(index, 1);
    const data = [...listItem]
    setListItem(data);
  }

  const action = (index, active) => {
    const data = [...listItem]
    data[index].active = active
    setListItem(data);
  }

  return (
    <div className="d-flex justify-content-center">
      <div style={{ maxWidth: 1000 }}>
        <div style={{ width: '100%' }}>
          <h1> Todo list</h1>
          <TaskInput saveTaskToList={saveTask} deleteAll={deleteAll} />
          <TaskList
            listTasks={listItem}
            deleteTask={deleteTask}
            action={action} />
        </div>
      </div>
    </div>
  );
};

export default UseCallback;