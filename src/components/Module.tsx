import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
  moduleNumber: number;
  title: string;
  lessonAmount: number;
}

export function Module({ title, lessonAmount, moduleNumber }: ModuleProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleNumber + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs  text-zinc-400">{lessonAmount} lessons</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Redux Fundamentals" duration="12:12" />
          <Lesson title="Redux Fundamentals" duration="12:12" />
          <Lesson title="Redux Fundamentals" duration="12:12" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}