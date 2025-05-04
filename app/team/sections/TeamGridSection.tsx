import { TeamMember, TeamMemberCard } from './TeamMemberCard';

export function TeamGridSection({ groupedMembers, categories }: { groupedMembers: { [key: string]: TeamMember[] }, categories: string[] }) {
  return (
    <>
      {categories.map(category => (
        groupedMembers[category] && groupedMembers[category].length > 0 && (
          <section key={category} className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center border-b pb-3">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {groupedMembers[category].map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        )
      ))}
      {groupedMembers['Other'] && groupedMembers['Other'].length > 0 && (
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center border-b pb-3">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {groupedMembers['Other'].map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
