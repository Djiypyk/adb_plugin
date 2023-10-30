import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSession } from "@/entities/session/queries";

export function HomePage() {
  const { data } = useSession();
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
    </div>
  );
}
