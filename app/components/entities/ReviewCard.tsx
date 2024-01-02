import * as React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ReviewCardProps = {
  name: string;
  review: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ name, review }) => {
  return (
    <Card className="max-w-[350px] w-full h-fit">
      <CardHeader>
        <div className="flex flex-row">
          <Image
            src={"/icons/ic_avatar.svg"}
            width={46}
            height={46}
            alt="avatar"
          />
          <span className="ml-3 flex items-center">{name}</span>
        </div>
        {/* <CardTitle>Create project</CardTitle> */}
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{review}</p>
      </CardContent>
    </Card>
  );
};
