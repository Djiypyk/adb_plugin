import { PropsWithChildren, ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/ROUTES";
import { useSession } from "@/entities/session/queries";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isLoading, isError } = useSession();

    if (isLoading) {
      return <UiPageSpinner />;
    }
    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }
    return <Component {...props} />;
  };
}
