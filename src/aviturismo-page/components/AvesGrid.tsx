import { AvesCard } from "./AvesCard";
import type { Ave } from "../interface/Ave";

interface Props {
  aves: Ave[];
}

export const AvesGrid = ({ aves }: Props) => {
  return (
    <div className="w-screen grid  [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4  p-4 bg-darkGreen">
      {aves.map((ave) => (
        <AvesCard key={ave.ave_id} ave={ave}></AvesCard>
      ))}
    </div>
  );
};
