import { lazy } from "react";

const BackgroundHeading = lazy(() => import("./components/BackgroundHeading"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const TodoList = lazy(() => import("./components/TodoList"));
// State
// interface CounterState {
//   value: number;
// }
// interface UserState {
//   isUserSignedIn: boolean;
// }

// Actions - to tell to redux what to do to the state
// const increment = { type: "INCREMENT", payload: 1 }; // type always will be of type string the name of  the action
// const decrement = { type: "DECREMENT", payload: 1 }; // PAYLOAD ANY DATA TO SEND THE REDUX TO DO IT'S JOB
//  IF HAVE TO ONLY INCREMENT BY ONE WE CAN DELETE 1 SO WE DON'T NEED A PAYLOAD
//  IF HE HAVE ANOTHER AMOUNT TO INCREMENT WHICH IS NOT ONLY 1 THEN WE SPECIFY AN ACTION WITH PAYLOAD
// const incrementByAmount = { type: "INCREMENT", payload: 10 }; // for example increment the amount by 10

// Reducers - responsible for taking an action and then depending on the type of the action they make the update in the redux store, they will use the type of the action to know what updates to do, and optionally they they will use the payload to do those specific specific actions to update the redux store
// Reducers and Redux in general - reducers will never directly make an update to the redux store reducers take the state and copy it and they are making changes only to the copy of the state which will have the unchanged properties of the state and only then change the state by the whole copy - which is immutability
// We will never change the state directly, we always need to use this concept of copy

function App() {
  return (
    <div className="min-h-screen bg-[#f1d4b3] flex flex-col justify-center items-center font-sans">
      <BackgroundHeading />
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.8)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
