const navList = [
  {
    path: "",
    name: "Home",
  },
];
const Layout: React.VFC = () => {
  return (
    <div className="flex justify-between  px-4">
      <div>
        <img src="" />
      </div>
      <div className="flex p-3">
        <p className="text-2">Home</p>
        <p className="text-3">Portfolio</p>
        <p className="text-4">Network</p>
        <p className="text-5">Team</p>
        <p className="text-6">Voice</p>
      </div>
    </div>
  );
};

export default Layout;
