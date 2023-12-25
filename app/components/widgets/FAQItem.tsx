import { FaqItemType } from "../sections/home/FAQ";
import Image from "next/image";

const FAQItem: React.FC<FaqItemType> = ({ item, activeIndex, setIndex }) => {
  const isItemActive = item.id === activeIndex;
  const onClick = () => {
    if (isItemActive) {
      setIndex(-1);
      return;
    }
    setIndex(item.id);
  };
  return (
    <div className="flex flex-col max-w-[900px] w-full">
      <div
        onClick={onClick}
        className="flex justify-between border border-black border-1 rounded-md p-4 my-4 cursor-pointer"
      >
        <span className="text-xl font-bold">{item.question}</span>
        <div>
          <Image
            src={`${
              isItemActive
                ? "/icons/ic_faq_minus.svg"
                : "/icons/ic_faq_plus.svg"
            }`}
            width={24}
            height={24}
            alt="Plus icon"
          />
        </div>
      </div>

      <p
        className={`${isItemActive ? "block" : "hidden"} transition transform`}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default FAQItem;
