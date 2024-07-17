import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-row items-center justify-between border-t p-2 text-xs font-mono">
      <span className="opacity-60">
        by{" "}
        <Link href="https://github.com/gfargo/" target="_blank" className="ml-1">
          gfargo
        </Link>
      </span>
      <Link
        href="https://github.com/gfargo/placeholder.svg"
        className="opacity-60 hover:opacity-100"
        target="_blank"
      >
        <GitHubLogoIcon className="h-4 w-4" />
      </Link>
    </footer>
  );
};
