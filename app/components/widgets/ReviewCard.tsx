import Image from "next/image";

export type ReviewCardProps = {
  name: string;
  review: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review }) => {
  return (
    <div className="flex flex-col p-5 w-full max-w-[420px] h-[230px] rounded-xl shadow-lg">
      <div className="flex flex-row">
        <Image
          src={"/icons/ic_avatar.svg"}
          width={46}
          height={46}
          alt="avatar"
        />
        <span className="ml-3">{name}</span>
      </div>
      <p className="mt-7">{review}</p>
    </div>
  );
};
export default ReviewCard;
