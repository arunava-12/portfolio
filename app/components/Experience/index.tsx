import { Experiences } from "./Experiences";
import { Header } from "./Header";

export default function Experience() {
  return (
    <div id="experience" className="cursor-auto md:cursor-none p-10 mb-20">
      <Header />
      <Experiences />
    </div>
  );
}
