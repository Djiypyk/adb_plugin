import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authControllerSignOut } from "@/shared/api/generated";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/ROUTES";
import { useResetSession } from "@/entities/session/queries";

export function useSignOut() {
  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.replace(ROUTES.SIGN_IN);
      resetSession();
    },
  });
  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
