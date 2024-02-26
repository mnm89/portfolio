"use client";
import { IconCard } from "@/ui/components/icon-card";
import { skills, tools } from "@/ui/helpers";

export function ProfessionalSkills() {
  return (
    <div className="py-8">
      <h1 className="flex flex-nowrap gap-2 text-xl md:text-4xl justify-center">
        Professional
        <strong className="text-fuchsia-400 text-center">Skills</strong>
      </h1>
      <div className="flex flex-wrap gap-8 py-8 justify-center">
        {skills.map((s) => (
          <IconCard key={s.label} icon={s.icon} label={s.label} />
        ))}
      </div>
      <h1 className="flex flex-nowrap gap-2 text-xl md:text-4xl justify-center">
        <strong className="text-fuchsia-400 text-center">Tools</strong>I use
      </h1>
      <div className="flex flex-wrap gap-8 py-8 justify-center">
        {tools.map((s) => (
          <IconCard key={s.label} icon={s.icon} label={s.label} />
        ))}
      </div>
    </div>
  );
}
