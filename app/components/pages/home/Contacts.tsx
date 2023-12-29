import SocialContacts from "../../entities/SocialContacts";

const Contacts = () => {
  return (
    <section id="contacts" className="section flex flex-col items-center">
      <h3 className="subtitle-2 mt-24 text-center">
        Have another question? Don’t hesitate to ask
      </h3>
      <div className="flex">
        <SocialContacts />
      </div>
    </section>
  );
};

export default Contacts;
