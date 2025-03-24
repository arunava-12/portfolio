import { experiences } from "@/app/data";
import { DotIcon } from "lucide-react";
import Badge from "../ui/Badge";
import { Detail } from "./Detail";

export const Experiences = () => {
  return (
    <>
      {experiences.map(
        ({ companyName, details, duration, id, roles, tags }, i) => (
          <div
            key={id}
            className={`border-b-[1px] border-secondary ${
              details ? "p-4" : "p-6"
            }`}
          >
            <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between text-white mix-blend-difference">
              <div className="flex-grow">
                <h2 className="tracking-widest text-lg break-words  font-sans">
                  {companyName}
                </h2>
                <div className="flex justify-center sm:justify-start items-center mt-2">
                  <DotIcon size={30} />
                  <p className="tracking-widest break-words text-sm  font-serif">
                    {duration}
                  </p>
                </div>
              </div>
              <p className="tracking-widest break-words text-sm font-sans sm:basis-1/5">
                {roles.join(", ")}
              </p>
              <div className="flex items-center flex-wrap gap-2 sm:basis-1/5">
                {tags.map((tech, i) => (
                  <Badge className="bg-secondary" key={i} title={tech} />
                ))}
              </div>
            </div>

            <Detail key={i} details={details} />
          </div>
        )
      )}
    </>
  );
};
