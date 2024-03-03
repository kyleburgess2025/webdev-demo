import { Button, Group, Stepper, Title } from "@mantine/core";
import { Breadcrumbs, Anchor } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import DataDisplay from "@/components/mantine/data";

export default function MantinePage() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col items-center min-h-[85vh] justify-around">
      <Breadcrumbs>
        <Anchor href="/">Home</Anchor>
        <Anchor href="/mui">Mantine</Anchor>
      </Breadcrumbs>
      <Title order={1}>Mantine</Title>
      {active === 0 && <DataDisplay />}
      <div className="bottom-5 absolute w-screen p-10">
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
      </div>
    </div>
  );
}
