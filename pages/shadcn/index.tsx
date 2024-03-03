import Data from "@/components/shadcn/data";
import Inputs from "@/components/shadcn/inputs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function ShadcnPage() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex items-center flex-col justify-around min-h-[90vh] p-4 pt-15">
      <Progress value={50 * active} className="top-5 absolute w-[95vw]" />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        ShadCN Page
      </h1>
      {active == 0 && <Inputs />}
      {active == 1 && <Data />}
      {active == 2 && (
        <div>
          <Button>
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      )}
      <div className="flex justify-between bottom-5 absolute w-screen p-4">
        <Button onClick={() => setActive(active - 1)} disabled={active == 0}>
          Back
        </Button>
        <Button onClick={() => setActive(active + 1)} disabled={active == 2}>
          Next step
        </Button>
      </div>
    </div>
  );
}
