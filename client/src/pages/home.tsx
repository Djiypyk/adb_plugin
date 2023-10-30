import { UiHeader } from "@/shared/ui/ui-header";
import { useQuery } from "@tanstack/react-query";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { SignOutButton } from "@/features/auth";

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader
        right={
          <div>
            {data?.email}
            <SignOutButton />
          </div>
        }
      />
      {/*<div className="grid grid-cols-[200px_1fr]">*/}
      {/*  <aside className="px-5 pt-10">*/}
      {/*    <ToggleBlockingButton />*/}
      {/*  </aside>*/}
      {/*  <main className="pt-10 px-5">*/}
      {/*    <h1 className="text-2xl mb-8">Block list</h1>*/}
      {/*    <AddBlockItemForm />*/}
      {/*    <BlockList className="mt-3" />*/}
      {/*  </main>*/}
      {/*</div>*/}
    </div>
  );
}
