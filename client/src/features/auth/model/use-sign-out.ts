import { useMutation } from "@tanstack/react-query";
import { authControllerSignOut } from "@/shared/api/generated";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/ROUTES";

export function useSignOut() {
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.replace(ROUTES.SIGN_IN);
    },
  });
  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
