import { Button, Input } from 'antd';
import React from 'react';

const fetcher = (page) => {
  return new Promise((resolve, reject) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(json => resolve(json)).catch(err => reject(err));
  });
}

const TaskInput = ({ saveTaskToList, deleteAll }) => {
  const [task, setTask] = React.useState('')
  const [random, setRandom] = React.useState(Math.floor(Math.random() * 300))
  const [randomImageList, setRandomImageList] = React.useState([]);
  const taskHandle = (e) => {
    setTask(e.target.value)
  }

  const saveText = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && task) {
      const randomImg = randomImageList[random]
      saveTaskToList({ name: task, img: randomImg.download_url })
      setTask('');
      const newRamdom = Math.floor(Math.random() * 300);
      setRandom(newRamdom);
    }
  }

  React.useEffect(() => {
    Promise.all([fetcher(1), fetcher(2), fetcher(3)]).then((values) => {
      setRandomImageList(values.flat())
    });
  }, [])

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