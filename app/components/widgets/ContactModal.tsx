import SocialContacts from "../entities/SocialContacts";

const ContactModal = () => {
  return (
    <div className="flex flex-col items-center max-w-[640px] w-full bg-surface-100 p-6 pb-10 rounded-xl">
      <h3 className="subtitle-2 max-w-md mt-10 text-surface-500 text-center">
        For booking, contact us in way you like
      </h3>
      <SocialContacts />
    </div>
  );
};

export default ContactModal;
