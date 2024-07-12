"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { type SvgProperties } from "./types";
import {
  downloadSvg,
  fileToBase64,
  generateSvgHtml,
  svgToBase64,
} from "./utils";
import { useEffect, useState } from "react";
import { DownloadIcon } from "@radix-ui/react-icons";

export function PlaceholderGenerator() {
  const [backgroundImageBase64, setBackgroundImageBase64] = useState<
    string | null
  >(null);
  const [svgProps, setSvgProps] = useState<SvgProperties>({
    width: 540,
    height: 280,
    backgroundColor: "#f0f0f0",
    overlayText: "Hello World",
    overlayTextColor: "#15162c",
    overlayTextAlignment: "center",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "monospace",
  });
  const [svgHtml, setSvgHtml] = useState<string>("");
  const [base64Svg, setBase64Svg] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;

    setSvgProps((prevProps) => ({
      ...prevProps,
      [id]: value,
    }));
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        setBackgroundImageBase64(base64);
        setSvgProps((prevProps) => ({
          ...prevProps,
          backgroundImageBase64: base64,
        }));
      } catch (error) {
        console.error("Error converting file to Base64:", error);
      }
    }
  };

  useEffect(() => {
    setIsGenerating(true);

    generateSvgHtml(svgProps)
      .then((html) => {
        setSvgHtml(html);
        setBase64Svg(svgToBase64(html));
      })
      .catch((error) => {
        console.error("Error generating SVG:", error);
      });

    setIsGenerating(false);
  }, [svgProps]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-6xl gap-6 p-6">
        <div className="w-full rounded-lg bg-card p-6 shadow-lg">
          <div className="mb-6">
            <h1 className="mb-2 text-2xl font-bold">
              SVG Placeholder Generator
            </h1>
            <p className="text-muted-foreground">
              Generate custom SVG placeholders with various options and
              settings.
            </p>
          </div>
          <form className="grid grid-cols-4 gap-4">
            <div className="col-span-4 flex flex-col">
              <label htmlFor="overlayText" className="mb-1 text-sm font-medium">
                Text
              </label>
              <Input
                id="overlayText"
                type="text"
                value={svgProps.overlayText}
                onChange={handleChange}
                className="rounded-md bg-muted px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="width" className="mb-1 text-sm font-medium">
                Width
              </label>
              <Input
                id="width"
                type="number"
                min="1"
                max="1000"
                value={svgProps.width}
                onChange={handleChange}
                className="rounded-md bg-muted px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="height" className="mb-1 text-sm font-medium">
                Height
              </label>
              <Input
                id="height"
                type="number"
                min="1"
                max="1000"
                value={svgProps.height}
                onChange={handleChange}
                className="rounded-md bg-muted px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="backgroundColor"
                className="mb-1 text-xs font-medium"
              >
                Bg Color
              </label>
              <Input
                id="backgroundColor"
                type="color"
                value={svgProps.backgroundColor}
                onChange={handleChange}
                className="rounded-md bg-muted px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="overlayTextColor"
                className="mb-1 text-xs font-medium"
              >
                Text Color
              </label>
              <Input
                id="overlayTextColor"
                type="color"
                value={svgProps.overlayTextColor}
                onChange={handleChange}
                className="rounded-md bg-muted px-3 py-2 text-sm"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="fontSize" className="mb-1 text-xs font-medium">
                Font Size
              </label>
              <Input
                id="fontSize"
                type="number"
                min="1"
                max="100"
                value={svgProps.fontSize}
                onChange={handleChange}
                className="rounded-md bg-muted px-3 py-2 text-sm"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="fontWeight" className="mb-1 text-xs font-medium">
                Font Weight
              </label>
              <Select
                value={svgProps.fontWeight}
                onValueChange={(value) =>
                  setSvgProps((prevProps) => ({
                    ...prevProps,
                    fontWeight: value as SvgProperties["fontWeight"],
                  }))
                }
              >
                <SelectTrigger className="rounded-md bg-muted px-3 py-2 text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                  <SelectItem value="semibold">Semibold</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="fontFamily" className="mb-1 text-xs font-medium">
                Font Family
              </label>
              <Select
                value={svgProps.fontFamily}
                onValueChange={(value) =>
                  setSvgProps((prevProps) => ({
                    ...prevProps,
                    fontFamily: value,
                  }))
                }
              >
                <SelectTrigger className="rounded-md bg-muted px-3 py-2 text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sans-serif">Sans-Serif</SelectItem>
                  <SelectItem value="serif">Serif</SelectItem>
                  <SelectItem value="monospace">Monospace</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="overlayTextAlignment"
                className="mb-1 text-xs font-medium"
              >
                Text Alignment
              </label>
              <Select
                value={svgProps.overlayTextAlignment}
                onValueChange={(value) =>
                  setSvgProps((prevProps) => ({
                    ...prevProps,
                    overlayTextAlignment: value as "left" | "center" | "right",
                  }))
                }
              >
                <SelectTrigger className="rounded-md bg-muted px-3 py-2 text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="backgroundPattern"
                className="mb-1 text-xs font-medium"
              >
                Background Pattern
              </label>
              <Select
                value={svgProps.backgroundPattern}
                onValueChange={(value) =>
                  setSvgProps((prevProps) => ({
                    ...prevProps,
                    backgroundPattern: value as
                      | "none"
                      | "pattern1"
                      | "pattern2"
                      | "pattern3"
                      | "pattern4"
                      | "pattern5",
                  }))
                }
              >
                <SelectTrigger className="rounded-md bg-muted px-3 py-2 text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="pattern1">Dots</SelectItem>
                  <SelectItem value="pattern2">Lines</SelectItem>
                  <SelectItem value="pattern3">Grid</SelectItem>
                  <SelectItem value="pattern4">4</SelectItem>
                  <SelectItem value="pattern5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="backgroundImage"
                className="mb-1 text-xs font-medium"
              >
                Background Image
              </label>
              {backgroundImageBase64 ? (
                <Button
                  onClick={() => setBackgroundImageBase64(null)}
                  className="w-full"
                >
                  Remove
                </Button>
              ) : (
                <input
                  id="backgroundImage"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="rounded-md bg-muted px-3 py-2 text-sm"
                />
              )}
            </div>
          </form>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => downloadSvg(svgHtml)} className="w-full">
              Generate
            </Button>
          </div>
        </div>
        <div className="flex max-h-screen w-full flex-col gap-4">
          <div className="flex justify-end">
            <Button onClick={() => downloadSvg(svgHtml)}>
              <DownloadIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="border-color-[#f0f0f0] relative flex aspect-video min-h-[380px] w-full justify-center rounded-md border p-4">
            {isGenerating && (
              <div className="absolute inset-0 flex items-center justify-center bg-card">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <span>
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                  Generating...
                </span>
              </div>
            )}
            <img
              src={base64Svg}
              width={"100%"}
              height={"auto"}
              alt="Placeholder"
              className="rounded-md"
            />
          </div>
          <Textarea
            placeholder="HTML Output"
            rows={4}
            className="rounded-md bg-muted px-3 py-2 text-sm"
            value={svgHtml}
            readOnly
          />
          <Textarea
            placeholder="Base64 Output"
            rows={4}
            className="rounded-md bg-muted px-3 py-2 text-sm"
            value={base64Svg}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
