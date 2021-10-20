import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Notification from './components/Notification'
import { LoginOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const UseCallback = props => {
  const [listItem, setListItem] = React.useState([]);
  const [isLogin, setLogin] = React.useState(true)
  const [accounts, setAccounts] = React.useState([])
  const [isRegister, setIsRegister] = React.useState(false);
  const [rememberLog, setRememberLog] = React.useState({
    isRemember: false,
    account: null
  })

  const saveTask = (task) => {
    const data = [...listItem]
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes()
    const fullday = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    data.unshift({ date: time + ' - ' + fullday, taskName: task, active: true });
    setListItem(data);
    Notification("success", 'Thành công', 'Thêm dữ liệu thành công !')
  }
  const deleteAll = (task) => {
    if (listItem.length > 0) {
      setListItem([]);
      return Notification("warning", 'Thành công', 'Xóa tất cả thành công !')
    }
    Notification("warning", 'Cảnh báo', 'Không có dữ liệu nào để xóa !')
  }

  const deleteTask = (index) => {
    listItem.splice(index, 1);
    const data = [...listItem]
    setListItem(data);
    Notification("warning", 'Thành công', 'Xóa công việc thành công !')
  }

  const action = (index, active) => {
    const data = [...listItem]
    data[index].active = active
    setListItem(data);
    if (active) {
      Notification("info", 'Thành công', 'Kích hoạt thành công !')
    } else {
      Notification("error", 'Thành công', 'Đã hủy kích hoạt !')
    }
  }

  const logout = () => {
    setLogin(false)
    Notification("success", 'Chúc mừng', 'Đăng xuất thành công .')
  }

  return (
    <div style={{ width: '100%', paddingInline: 20 }}>
      {isLogin ?
        <div className="d-flex flex-column justify-content-center flex-grow-1 pt-3">
          <div className="d-flex justify-content-between">
            <h3>Todo list</h3>
            <span>
              <Button onClick={logout}>Logout <LoginOutlined /></Button>
            </span>
          </div>
          <TaskInput saveTaskToList={saveTask} deleteAll={deleteAll} />
          <TaskList
            listTasks={listItem}
            deleteTask={deleteTask}
            action={action} />
        </div> :
        <div className="d-flex flex-lg-row flex-column align-items-lg-stretch align-items-center justify-content-center">
            <Register
              accounts={accounts}
              setAccounts={setAccounts}
              setIsRegister={setIsRegister} />
            <Login
              accounts={accounts}
              setLogin={setLogin}
              isRegister={isRegister}
              setIsRegister={setIsRegister}
              rememberLog={rememberLog}
              setRememberLog={setRememberLog}
            />
        </div>
      }
    </div>
  );
};

export default UseCallback;