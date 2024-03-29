import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useAppSelector } from "../store";

export function Player() {
  const modules = useAppSelector((state) => state.player.course.modules);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Leave feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="absolute divide-y-2 divide-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-950 top-0 bottom-0 right-0 w-80 border-l border-zinc-800 bg-zinc-900">
            {modules.map((module, index) => {
              return (
                <Module
                  key={module.id}
                  moduleNumber={index}
                  title={module.title}
                  lessonAmount={module.lessons.length}
                />
              );
            })}
          </aside>
        </main>
      </div>
    </div>
  );
}
