import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Notification from './components/Notification'
import { LoginOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, loginAction, changeListItemsAction } from 'MiniProjects/TodoList/todoListSlice';

const TodoList = props => {
  const dispatch = useDispatch();
  const { accounts, isRegister, isLogin, listItem, rememberLog } = useSelector(state => state.todolist)
  const saveTask = (task) => {
    const data = [...listItem]
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes()
    const fullday = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear()
    data.unshift({ date: time + ' - ' + fullday, taskName: task, active: true });
    dispatch(addItemAction(data))
    Notification("success", 'Thành công', 'Thêm dữ liệu thành công !')
  }
  const deleteAll = (task) => {
    if (listItem.length > 0) {
      dispatch(addItemAction([]))
      return Notification("warning", 'Thành công', 'Xóa tất cả thành công !')
    }
    Notification("warning", 'Cảnh báo', 'Không có dữ liệu nào để xóa !')
  }

  const deleteTask = (index) => {
    const data = listItem.filter((x, i) => i !== index);
    dispatch(addItemAction(data))
    Notification("warning", 'Thành công', 'Xóa công việc thành công !')
  }

  const action = (index, active) => {
    const data = [...listItem]
    data[index] = { ...data[index], active };
    dispatch(changeListItemsAction(data))
    if (active) {
      Notification("info", 'Thành công', 'Kích hoạt thành công !')
    } else {
      Notification("error", 'Thành công', 'Đã hủy kích hoạt !')
    }
  }

  const logout = () => {
    dispatch(loginAction(false));
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
          />
          <Login
            accounts={accounts}
            isRegister={isRegister}
            rememberLog={rememberLog}
          />
        </div>
      }
    </div>
  );
};

export default TodoList;