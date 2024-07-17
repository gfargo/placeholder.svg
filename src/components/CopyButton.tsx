"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { useCallback } from "react";

type CopyButtonProps = {
  label: string;
  value: string;
} & ButtonProps;

export const CopyButton = ({
  label,
  value,
  className,
  ...props
}: CopyButtonProps) => {
  const copyToClipboard = useCallback(async () => {
    await navigator.clipboard.writeText(value);
    toast({
      title: `Copied ${label}`,
      description: value.startsWith("<") ? "SVG copied to clipboard" : value,
      variant: "default",
      duration: 5000,
    });
  }, [label, value]);

  return (
    <Button
      className={cn("group relative h-6 w-6 text-xs", className)}
      size="icon"
      variant="outline"
      onClick={copyToClipboard}
      {...props}
    >
      <ClipboardCopyIcon className="h-3 w-3" />
    </Button>
  );
};
