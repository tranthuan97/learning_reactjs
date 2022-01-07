import ArrowFunc from "../JavaScriptsAdvance/arrowFunc";
import Closure from "../JavaScriptsAdvance/closure";
import HoistingJS from "../JavaScriptsAdvance/hoisting";
import TypeCheck from "../JavaScriptsAdvance/typeCheck";

const routes = [
  {
    name: 'Hoisting JS',
    path: '/hoisting',
    component: HoistingJS,
  },
  {
    name: 'Type check',
    path: '/type-check',
    component: TypeCheck,
  },
  {
    name: 'Closure',
    path: '/closure',
    component: Closure,
  },
  {
    name: 'Arrow function',
    path: '/arrow-function',
    component: ArrowFunc,
  },
]

export default routes;
