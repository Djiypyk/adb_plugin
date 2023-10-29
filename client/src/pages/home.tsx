import { Inter } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from '@/shared/ui/ui-text-field';

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  // const { data } = useQuery({
  //   queryKey: ["session"],
  //   queryFn: () => authControllerGetSessionInfo(),
  // });
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <UiButton variant="primary">primary</UiButton>
      <UiButton variant="secondary">secondary</UiButton>
      <UiButton variant="outlined">outlined</UiButton>
      <UiButton disabled variant="primary">
        primary disabled
      </UiButton>
      <UiTextField/>
    </main>
  );
}
