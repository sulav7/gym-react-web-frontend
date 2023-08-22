import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { addApplication } from "../../service/application/mutation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ISignUp {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const schema: yup.ObjectSchema<ISignUp> = yup.object({
  firstName: yup
    .string()
    .required("FirstName is required")
    .min(3, "First Name should be of at least 3 digit"),
  lastName: yup
    .string()
    .required("Lastname is required")
    .min(3, "Last Name should be of at least 3 digit"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: yup
    .string()
    .required("Phone is required")
    .min(10, "Phone number should be of at least 10 digits"),

  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password should be of at least 6 digits"),

  confirmPassword: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Password must match"),
});
export function Register() {
  const [type, setType] = useState("password");

  const createUser = useMutation("data", addApplication, {
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);
      reset();
    },
    onError: (data: any) => {
      toast.error(data.response.data.message);
    },
  });

  const form = useForm<ISignUp>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  const changePasswordType = () => {
    setType("password");
  };

  const submitData = (data: ISignUp) => {
    console.log(data);
    createUser.mutateAsync(data);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <Card sx={{ width: 400 }} className="shadow-boxshadow">
          <CardContent>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(submitData)}
            >
              <h1 className="text-center">
                Create an <span className="text-primary">Account</span>
              </h1>
              <TextField
                label="email"
                fullWidth
                {...register("email")}
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
              <TextField
                label="firstName"
                fullWidth
                {...register("firstName")}
                error={!!errors?.firstName}
                helperText={errors?.firstName?.message}
              />

              <TextField
                label="lastName"
                fullWidth
                {...register("lastName")}
                error={!!errors?.lastName}
                helperText={errors?.lastName?.message}
              />

              <TextField
                label="Phone Number"
                fullWidth
                {...register("phoneNumber")}
                error={!!errors?.phoneNumber}
                helperText={errors?.phoneNumber?.message}
              />
              <TextField
                label="password"
                {...register("password")}
                type={type}
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
                {...register("confirmPassword")}
                label="Confirm Password"
                type={type}
                fullWidth
                error={!!errors?.confirmPassword}
                helperText={errors?.confirmPassword?.message}
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
              <Button type="submit" variant="contained" color="primary">
                SignUp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
