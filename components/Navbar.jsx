const Navbar = () => {
  return (
    <div className="justify-between items-center flex gap-5 py-12 mb-24 max-md:flex-wrap">
      <img
        src="/assets/logo.svg"
        className="max-md:h-[30px] my-auto"
        alt="Logo"
      />
      <a href="https://app.nada.bot" target="_blank" className="btn-main">
        <div>Launch App</div>
      </a>
    </div>
  );
};

export default Navbar;
