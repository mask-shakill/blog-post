import DashboardNav from "./DashboardNav";

const layout = ({ children }) => {
  return (
    <>
      <DashboardNav />

      {children}
    </>
  );
};

export default layout;
