import { socialIcons } from "@/app/data";
import { SocialIcon } from "../shared/social-icon";
import { cn } from "@/lib/utils";

export type SocialContactsProps = {
  className?: string;
};

export const SocialContacts: React.FC<SocialContactsProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-flow-col gap-5 justify-center item-center",
        className
      )}
    >
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
