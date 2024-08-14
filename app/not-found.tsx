import FramerWrapper from "@/components/framer-wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-transparent">
      <FramerWrapper className="text-center space-y-4">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <p className="text-lg text-muted-foreground">
          Oops! This page could not be found
        </p>
        <Link href="/" className="text-accent-foreground" prefetch={false}>
          Go to Homepage
        </Link>
      </FramerWrapper>
    </section>
  );
}
