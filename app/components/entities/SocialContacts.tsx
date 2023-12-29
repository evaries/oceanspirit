import { socialIcons } from "@/app/data";
import SocialIcon from "../shared/SocialIcon";

const SocialContacts = () => {
  return (
    <div className="grid grid-flow-col gap-5 justify-center item-center mt-8">
      {socialIcons.map((item) => {
        return (
          <a key={item.id} href={item.url} target="_blank">
            <SocialIcon src={item.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialContacts;
