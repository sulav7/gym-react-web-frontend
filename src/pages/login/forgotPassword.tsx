import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { FORGOT_PASSWORD } from "../../service/application/mutation";
import * as yup from "yup";
import { toast } from "react-hot-toast";

export interface IForgotPassword {
  email: string;
}

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Format"),
});
export function ForgotPassword() {
  const forgotPassword = useMutation("forgotPassword", FORGOT_PASSWORD, {
    onSuccess: (data) => {
      toast.success("link send to your email");
      reset();
    },
    onError: (data: any) => {
      toast.error(data?.response?.data?.message);
    },
  });

  const form = useForm<IForgotPassword>();

  const { register, handleSubmit, reset, formState } = form;

  const { errors } = formState;

  const submitEmail = (data: IForgotPassword) => {
    forgotPassword.mutateAsync(data);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="shadow-boxshadow min-w-[450px] text-center">
          <h1>Please Provide Your Email</h1>
          <form onSubmit={handleSubmit(submitEmail)}>
            <TextField
              label="email"
              fullWidth
              {...register("email")}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
            <Button type="submit">Reset Password</Button>
          </form>
        </div>
      </div>
    </>
  );
}
