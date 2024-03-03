import { Button, Group, Stepper, Title, Affix } from "@mantine/core";
import { Breadcrumbs, Anchor } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import DataDisplay from "@/components/mantine/data";
import Inputs from "@/components/mantine/inputs";
import Link from "next/link";

export default function MantinePage() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col items-center min-h-[80vh] justify-around">
      <Breadcrumbs>
        <Anchor href="/">Home</Anchor>
        <Anchor href="/mui">Mantine</Anchor>
      </Breadcrumbs>
      <Title order={1}>Mantine</Title>
      {active === 0 && <Inputs />}
      {active === 1 && <DataDisplay />}
      {active === 2 && (
        <Button variant="contained" color="primary">
          <Link href="/">Go Back Home</Link>
        </Button>
      )}
      <Affix position={{ bottom: 20, right: 20 }} className="w-[95vw]">
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step
            label="Inputs"
            description="Inputs in Mantine"
          ></Stepper.Step>
          <Stepper.Step
            label="Data Display"
            description="Data Display in Mantine"
          ></Stepper.Step>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button
            variant="default"
            onClick={() => setActive(active - 1)}
            disabled={active == 0}
          >
            Back
          </Button>
          <Button onClick={() => setActive(active + 1)} disabled={active == 2}>
            Next step
          </Button>
        </Group>
      </Affix>
    </div>
  );
}
