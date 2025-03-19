import { Outlet } from "react-router-dom";

export const App=()=> {
  return (
    <div className="App h-full">
      <h1 className="mx-auto w-fit">My FireBase authentication App</h1>
      <div className="flex justify-center h-[100vh]">
        <Outlet /> 
      </div>
    </div>
  );
}
