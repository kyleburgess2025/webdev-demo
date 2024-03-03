import { Title, Text, Button } from "@mantine/core";
import "@mantine/core/styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title order={1}>Component Library Showdown!</Title>
      <Text fz="lg" lh="lg">
        This is a simple site to compare the same app built with different UI
        frameworks.
      </Text>
      <Text fz="lg" lh="lg">
        Please navigate to the following pages to see these libraries at work!
      </Text>
      <ul className="flex flex-col items-center justify-between p-24 gap-3">
        <li>
          <Button>
            <Link href="/mui">MUI</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link href="/mantine">Mantine</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link href="/shadcn" className="">
              ShadCN
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
