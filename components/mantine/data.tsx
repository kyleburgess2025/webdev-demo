import {
  Alert,
  Burger,
  Loader,
  Pagination,
  RingProgress,
  Tabs,
  rem,
  Notification,
  Group,
  Button,
  Dialog,
  Text,
  TextInput,
  Drawer,
  Accordion,
  HoverCard,
  Modal,
  Card,
  Image,
  Badge,
  Kbd,
  Blockquote,
  ScrollArea,
  SimpleGrid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconInfoCircle,
} from "@tabler/icons-react";

const groceries = [
  {
    emoji: "🍎",
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

export default function DataDisplay() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [menuOpened, { toggle: toggleMenu, close: closeMenu }] =
    useDisclosure(false);
  const [modalOpened, { toggle: toggleModal, close: closeModal }] =
    useDisclosure(false);
  const iconStyle = { width: rem(12), height: rem(12) };
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div>
      <ScrollArea style={{ height: 400 }}>
        <SimpleGrid cols={1} spacing="xl">
          <Burger
            opened={menuOpened}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          />
          <Pagination total={10} />
          <Tabs defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab
                value="gallery"
                leftSection={<IconPhoto style={iconStyle} />}
              >
                Gallery
              </Tabs.Tab>
              <Tabs.Tab
                value="messages"
                leftSection={<IconMessageCircle style={iconStyle} />}
              >
                Messages
              </Tabs.Tab>
              <Tabs.Tab
                value="settings"
                leftSection={<IconSettings style={iconStyle} />}
              >
                Settings
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

            <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

            <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
          </Tabs>
          <Alert
            variant="light"
            color="blue"
            title="Alert title"
            icon={<IconInfoCircle />}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            officiis, quae tempore necessitatibus placeat saepe.
          </Alert>
          <Loader color="blue" />
          <Notification title="We notify you that">
            You are now obligated to give a star to Mantine project on GitHub
          </Notification>
          <RingProgress
            size={120}
            thickness={12}
            roundCaps
            sections={[
              { value: 40, color: "cyan" },
              { value: 15, color: "orange" },
              { value: 15, color: "grape" },
            ]}
          />
          <Dialog
            opened={opened}
            withCloseButton
            onClose={close}
            size="lg"
            radius="md"
          >
            <Text size="sm" mb="xs" fw={500}>
              Subscribe to email newsletter
            </Text>

            <Group align="flex-end">
              <TextInput
                placeholder="hello@gluesticker.com"
                style={{ flex: 1 }}
              />
              <Button onClick={close}>Subscribe</Button>
            </Group>
          </Dialog>
          <Drawer opened={menuOpened} onClose={closeMenu} title="Fruits">
            <Accordion defaultValue="Apples">{items}</Accordion>
          </Drawer>
          <Modal
            opened={modalOpened}
            onClose={closeModal}
            title="Authentication"
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink">On Sale</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
              </Button>
            </Card>
          </Modal>
          <Group justify="center">
            <Button onClick={toggleModal}>Open modal</Button>
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button>Hover to reveal the card</Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Hover card is revealed when user hovers over target element,
                  it will be hidden once mouse is not over both target and
                  dropdown elements
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
            <Button onClick={toggle}>Toggle dialog</Button>
          </Group>
          <div dir="ltr">
            <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
          </div>
          <Blockquote
            color="blue"
            cite="– Forrest Gump"
            icon={<IconInfoCircle />}
            mt="xl"
          >
            You have no courses yet. Create a new course to get started.
          </Blockquote>
        </SimpleGrid>
      </ScrollArea>
    </div>
  );
}
