import AdminNavbar from "../navbar/admin/AdminNavbar";

interface ChildProps {
  children: React.ReactNode;
}
const AdminLayout: React.FC<ChildProps> = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
      <footer>
        <p>This is footer</p>
      </footer>
    </>
  );
};

export default AdminLayout;