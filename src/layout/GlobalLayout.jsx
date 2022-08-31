import { Outlet } from 'react-router-dom';
export const GlobalLayout = () => {
  return (
    <div>
      {/* <GlobalNav /> */}
      <h1>NAVEGADOR</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
