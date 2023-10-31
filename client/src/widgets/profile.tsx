import { SignOutButton } from "@/features/auth";
import { useSession } from "@/entities/session/queries";

export function Profile() {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <div className='flex gap-2 items-center'>
      {session?.email}
      <SignOutButton />
    </div>
  );
}
