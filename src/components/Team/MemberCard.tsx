import type { TeamContentMember } from "@/static/data/TeamContent";
import { memo } from "react";

interface Props {
  data: TeamContentMember;
}

const MemberCard = ({ data }: Props) => {
  return (
    <li className="relative flex shrink-0 flex-col w-full overflow-hidden rounded-4xl">
      <img
        className="min-w-full aspect-square object-cover rounded-4xl"
        src={data.image}
        alt={data.name}
      />
      <div className="flex flex-col gap-y-4 p-4 w-full">
        <div>
          <h2 className="font-semibold">{data.name}</h2>
          <p className="text-sm text-foreground-secondary">{data.role}</p>
        </div>

        <p className="text-xs text-foreground-secondary">{data.description}</p>
      </div>
    </li>
  );
};

export default memo(MemberCard);
