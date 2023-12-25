const Contacts = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="subtitle-2 mt-24">
        Have another question? Don’t hesitate to ask
      </h3>
      <div className="flex mt-14">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 mx-4 bg-black rounded-full"
              ></div>
            );
          })}
      </div>
    </section>
  );
};

export default Contacts;
