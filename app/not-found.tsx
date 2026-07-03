import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-heading text-8xl font-bold">
            404
          </h1>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
