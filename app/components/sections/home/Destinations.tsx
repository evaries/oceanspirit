import Image from "next/image";
import Button from "../../atoms/PrimaryButton";
import Link from "next/link";

const Destinations = () => {
  return (
    <section>
      <h3 className="subtitle-1 mt-20 text-center">Destinations</h3>
      <div className="grid grid-cols-2 gap-14 mt-24">
        <div className="image flex justify-end">
          <Image
            src="/images/destintaion-lombok.png"
            width={500}
            height={500}
            alt="destination"
          />
        </div>
        <div className="content max-w-[500px] w-full">
          <h3 className="subtitle-2">G-land</h3>
          <p className="p mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="mt-5">
            <li>Beaches</li>
            <li>Beaches</li>
            <li>Beaches</li>
            <li>Beaches</li>
          </ul>
          <div className="grid grid-cols-2 gap-5 mt-9 max-w-fit">
            <Button type="primary" text="Book" />
            <Link href={"/destination/g-land"}>
              <Button type="secondary" text="Learn more" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-14 mt-24">
        <div className="content flex justify-end flex-col justify-self-end max-w-[500px] w-full">
          <h3 className="subtitle-2">Lombok</h3>
          <p className="p mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="mt-5">
            <li>Beaches</li>
            <li>Beaches</li>
            <li>Beaches</li>
            <li>Beaches</li>
          </ul>
          <div className="grid grid-cols-2 gap-5 mt-9 max-w-fit">
            <Button type="primary" text="Book" />
            <Link href={"/destination/lombok"}>
              <Button type="secondary" text="Learn more" />
            </Link>
          </div>
        </div>
        <div className="image flex justify-start">
          <Image
            src="/images/destintaion-lombok.png"
            width={500}
            height={500}
            alt="destination"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-14 mt-24">
        <div className="image flex justify-end">
          <Image
            src="/images/destintaion-lombok.png"
            width={500}
            height={500}
            alt="destination"
          />
        </div>
        <div className="content max-w-[500px] w-full">
          <h3 className="subtitle-2">Sumbawa</h3>
          <p className="p mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="mt-5">
            <li>Beaches</li>
            <li>Beaches</li>
            <li>Beaches</li>
            <li>Beaches</li>
          </ul>
          <div className="grid grid-cols-2 gap-5 mt-9 max-w-fit">
            <Button type="primary" text="Book" />
            <Link href={"/destination/sumbawa"}>
              <Button type="secondary" text="Learn more" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Destinations;
