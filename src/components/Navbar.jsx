function Navbar() {
  return (
    <header className="flex justify-between items-center border-b pb-4">
      <h1 className="text-5xl font-bold">question mark</h1>
      <nav className="space-x-10">
        <a href="/home" className="text-green-600 text-2xl ">
          HOME
        </a>
        <a href="/profile" className="text-green-600 text-2xl ">
          PROFILE
        </a>
        <a href="/leaderboard" className="text-green-600 text-2xl ">
          LEADERBOARD
        </a>
        <a href="/logout" className="text-green-600 text-2xl ">
          LOGOUT
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
