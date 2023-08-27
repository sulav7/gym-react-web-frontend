import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import instance from "../../utils/http/interceptor";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

const scheme = yup.object({
  password: yup
    .string()
    .required("password is required")
    .min(5, "password must be of 6 character"),
  confirmPassword: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "Password must match"),
});
export function ResetPassword() {
  const [type, setType] = useState("password");
  const form = useForm<IResetPassword>({
    resolver: yupResolver(scheme),
  });

  const { resetToken } = useParams();

  const navigate = useNavigate();

  const updatePassword = async (data: {
    data: IResetPassword;
    token: string;
  }) => {
    const update = await instance.patch(
      `auth/resetPassword/${data.token}`,
      data.data
    );
    return update;
  };

  const updateData = useMutation("reset", updatePassword, {
    onSuccess: (data) => {
      console.log(data);
      toast.success("password changed");
      navigate("/login");
    },
    onError: () => {
      navigate("/login");
    },
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const submitData = (data: IResetPassword) => {
    console.log(data);
    console.log(resetToken, "hello");

    updateData.mutateAsync({ data: data, token: resetToken ?? "" });
  };
  const changePasswordType = () => {
    setType("password");
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <form
          className="flex flex-col gap-9 min-w-[450px]"
          onSubmit={handleSubmit(submitData)}
        >
          <h1>Change Your Password</h1>
          <TextField
            label="new password"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            fullWidth
            InputProps={{
              endAdornment:
                type == "password" ? (
                  <Visibility
                    onClick={() => setType("text")}
                    className="cursor-pointer"
                  />
                ) : (
                  <VisibilityOff
                    onClick={changePasswordType}
                    className="cursor-pointer"
                  />
                ),
            }}
          />
          <TextField
            label="confirm password"
            {...register("confirmPassword")}
            error={!!errors?.confirmPassword}
            helperText={errors?.confirmPassword?.message}
            fullWidth
          />
          <Button type="submit">Change Password</Button>
        </form>
      </div>
    </>
  );
}
