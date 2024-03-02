import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Welcome to the Next.js UI Framework Showdown
      </h1>
      <p className="text-lg">
        This is a simple site to compare the same app built with different UI
        frameworks.
      </p>
      <p className="text-lg">
        Please navigate to the following pages to see these libraries at work!
      </p>
      <ul className="flex flex-col items-center justify-between p-24">
        <li>
          <Link href="/mui">MUI</Link>
        </li>
        <li>
          <Link href="/mantine">Mantine</Link>
        </li>
        <li>
          <Link href="/shadcn" className="">
            ShadCN
          </Link>
        </li>
      </ul>
    </div>
  );
}
