const Footer = () => {
  return (
    <footer>
      <div className=" flex items-center flex-col mt-20">
        <div className="flex">
          <div className="flex">
            <nav className="mx-16">Home</nav>
            <nav className="mx-16">Destinations</nav>
          </div>
          <div className="mx-16">LOGO</div>
          <div className="flex">
            <nav className="mx-16">About us</nav>
            <nav className="mx-16">Contacts</nav>
          </div>
        </div>
        <div className="mt-8 h-[1px] bg-black max-w-[80%] w-full" />
        <div className="mt-24 mb-10">
          <p>© 2010 — 2020 Privacy — Terms</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
