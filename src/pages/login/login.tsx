import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { LOGIN } from "../../service/application/mutation";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../utils/auth";

export interface ILogin {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
export function Login() {
  const [type, setType] = useState("password");
  const [visibility, setVisibility] = useState(false);
  const { handleSetUserData } = useContext(AuthContext);
  const changeType = () => {
    setType("text");
    setVisibility(true);
  };

  const changeToText = () => {
    setType("password");
    setVisibility(false);
  };

  const navigate = useNavigate();

  const form = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register, formState } = form;
  const { errors } = formState;

  const login = useMutation("login", LOGIN, {
    onSuccess: (data) => {
      toast.success(data?.message);
      handleSetUserData?.(data?.result?.user, data?.result?.accessToken);
      return navigate("/home");
    },
    onError: (data: any) => {
      toast.error(data?.response.data?.message);
    },
  });

  const submitData = (data: ILogin) => {
    login.mutateAsync(data);
  };

  const navigateToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] ">
        <Card sx={{ width: 400 }} className="shadow-boxshadow">
          <CardContent>
            <form
              onSubmit={handleSubmit(submitData)}
              className="flex flex-col gap-4"
              noValidate
            >
              <h1 className="text-center text-4xl mb-5">Login</h1>
              <TextField
                label="email"
                className="border-red-500"
                {...register("email")}
                error={!!errors?.email}
                helperText={errors?.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="password"
                type={type}
                {...register("password")}
                error={!!errors?.password}
                helperText={errors?.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" className="cursor-pointer">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: visibility ? (
                    <InputAdornment position="end" className="cursor-pointer">
                      <Visibility onClick={changeToText} />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end" className="cursor-pointer">
                      <VisibilityOff onClick={changeType} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" variant="contained" color="primary">
                LOGIN
              </Button>
              <div>
                <p className="text-center text-sm">
                  Forgot Password?{" "}
                  <a className="text-primary underline cursor-pointer">
                    Reset Password
                  </a>
                </p>
              </div>
              <Button
                variant="contained"
                sx={{ background: "#b38b59" }}
                onClick={navigateToSignUpPage}
              >
                SignUp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
