import ArrowFunc from "../JavaScriptsAdvance/arrowFunc";
import Closure from "../JavaScriptsAdvance/closure";
import HoistingJS from "../JavaScriptsAdvance/hoisting";
import TypeCheck from "../JavaScriptsAdvance/typeCheck";
import Home from "../page/Home";

const routes = [
  {
    name: 'Home',
    description: '',
    img: 'https://images.viblo.asia/7adb5816-c28a-4531-8cd6-ea09596fb52a.jpg',
    path: '/',
    component: Home,
    display: 'none',
  },
  {
    name: 'Hoisting JS',
    description: '',
    img: 'https://images.viblo.asia/7adb5816-c28a-4531-8cd6-ea09596fb52a.jpg',
    path: '/hoisting',
    component: HoistingJS,
  },
  {
    name: 'Type check',
    description: '',
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pl8LqxGv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zhchycb77n7vz6252uy7.jpg',
    path: '/type-check',
    component: TypeCheck,
  },
  {
    name: 'Closure',
    description: '',
    img: 'https://blog.itnavi.com.vn/uploads/2020/12/Closure-l%C3%A0-g%C3%AC-3.jpg',
    path: '/closure',
    component: Closure,
  },
  {
    name: 'Arrow function',
    description: '',
    img: 'https://i.ytimg.com/vi/h33Srr5J9nY/maxresdefault.jpg',
    path: '/arrow-function',
    component: ArrowFunc,
  },
]

export default routes;
