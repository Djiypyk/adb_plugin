import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { ROUTES } from "@/shared/constants/ROUTES";
import { UiLink } from "@/shared/ui/ui-link";
import { useSignUpForm } from "@/features/auth/model/use-sign-up-form";

export function SignUpForm() {
  const { register, isLoading, handleSubmit, errorMessage } = useSignUpForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton disabled={isLoading}>Sign Up</UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_IN}>
        Sign In
      </UiLink>
      {errorMessage && <div className="text-rose-500 text-center text-xl">{errorMessage}</div>}
    </form>
  );
}
