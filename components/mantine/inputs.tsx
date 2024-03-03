import {
  Autocomplete,
  Button,
  Chip,
  ColorInput,
  CopyButton,
  Fieldset,
  Group,
  JsonInput,
  NumberInput,
  PasswordInput,
  PinInput,
  Rating,
  ScrollArea,
  SegmentedControl,
  SimpleGrid,
  Slider,
  TagsInput,
  TextInput,
} from "@mantine/core";

export default function Inputs() {
  return (
    <div>
      <ScrollArea style={{ height: 400 }}>
        <SimpleGrid cols={2}>
          <ColorInput
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
          />
          <JsonInput
            label="Your package.json"
            placeholder="Textarea will autosize to fit the content"
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={4}
          />
          <NumberInput
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
          />
          <PasswordInput
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
          />
          <PinInput />
          <Rating defaultValue={2} />
          <SegmentedControl data={["React", "Angular", "Vue"]} />
          <Slider
            color="blue"
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
          <Fieldset legend="Personal information">
            <TextInput label="Your name" placeholder="Your name" />
            <TextInput label="Email" placeholder="Email" mt="md" />
          </Fieldset>
          <Chip.Group>
            <Group justify="center">
              <Chip defaultChecked>First chip</Chip>
              <Chip defaultChecked>Second chip</Chip>
              <Chip defaultChecked>Third chip</Chip>
            </Group>
          </Chip.Group>
          <TagsInput
            label="Press Enter to submit a tag"
            placeholder="Enter tag"
          />
          <Autocomplete
            label="Your favorite library"
            placeholder="Pick value or enter anything"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
          <CopyButton value="https://mantine.dev">
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : "blue"} onClick={copy}>
                {copied ? "Copied url" : "Copy url"}
              </Button>
            )}
          </CopyButton>
        </SimpleGrid>
      </ScrollArea>
    </div>
  );
}
