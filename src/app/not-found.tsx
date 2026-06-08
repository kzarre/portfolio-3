import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">
        This post doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/"
        className="text-sm font-semibold text-[#0095f6] hover:underline"
      >
        Back to profile
      </Link>
    </div>
  );
}
