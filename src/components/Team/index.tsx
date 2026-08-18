import Section from "../ui/Section";
import Header from "../ui/Header";
import MemberCard from "./MemberCard";

import { TEAM_CONTENT } from "@/static/data/TeamContent";

const Team = () => {
  const { title, members } = TEAM_CONTENT;
  return (
    <Section id="team" className="max-w-7xl mx-auto">
      <Header title={title} />

      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
        {members.map((member) => (
          <MemberCard key={member.id} data={member} />
        ))}
      </ul>
    </Section>
  );
};

export default Team;
