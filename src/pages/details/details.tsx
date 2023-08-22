import { useContext, useState } from "react";
import { AuthContext } from "../../utils/auth";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { IUserData } from "../membership/membership";
import { useMutation, useQuery } from "react-query";

import instance from "../../utils/http/interceptor";
import { GET_ONE_USER_DATA } from "../../service/application/query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DELETE_USER } from "../../service/application/mutation";

export function Details() {
  const schema: yup.ObjectSchema<IUserData> = yup.object({
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

    startDate: yup.string().optional(),
    endDate: yup.string().optional(),
  });
  const { userData } = useContext(AuthContext);

  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const { data, isLoading, refetch } = useQuery(
    "datajhgfjg",
    () => GET_ONE_USER_DATA(id ?? ""),
    {
      enabled: !!id,
      onSuccess: (data) => {
        console.log(data, "userData");
        reset({
          firstName: data?.data?.result?.firstName,
          lastName: data?.data?.result?.lastName,
          email: data?.data?.result?.email,
          phoneNumber: data?.data?.result?.phoneNumber,
          startDate: data?.data?.result?.startDate,
          endDate: data?.data?.result?.endDate,
        });
      },
    }
  );

  const editData = async (data: { data: IUserData }) => {
    const updateData = await instance.patch(
      `user/update/${userData?.id}`,
      data.data
    );
    return updateData;
  };

  const update = useMutation("update", editData, {
    onSuccess: () => {
      toast.success("User Updated");
      setEditMode(false);
      refetch();
    },
    onError: (data) => {
      // @ts-ignore
      toast.error(data?.response?.data?.message);
    },
  });

  // @ts-ignore
  const deleteUser = useMutation("delete", () => DELETE_USER(id), {
    onSuccess: () => {
      toast.success("Your Account Has Been Removed");
    },
  });

  const form = useForm<IUserData>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register, formState, reset } = form;

  const { errors } = formState;

  const submitData = (data: IUserData) => {
    update.mutateAsync({ data: data });
  };

  const handleDelete = () => {
    deleteUser.mutateAsync();
    navigate("/login");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div className="flex justify-end  mr-20">
        {editMode === true ? (
          <Button
            onClick={() => setEditMode(false)}
            variant="contained"
            sx={{ background: "#b38b59" }}
          >
            Cancel
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ background: "#b38b59" }}
            onClick={() => setEditMode(true)}
          >
            Edit
          </Button>
        )}
        <Button
          variant="contained"
          className="ml-[10px]"
          onClick={() => setOpen(true)}
        >
          Delete Your Account
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Delete Your Account?</DialogTitle>
          <DialogContentText sx={{ paddingLeft: 3.5, paddingRight: 4 }}>
            Are you Sure Do You Want To Delete Your Account???
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="flex justify-center items-center min-h-[60vh]">
        <Card sx={{ width: 400 }} className="shadow-boxshadow mt-[50px]">
          <CardContent>
            <h1 className="text-center">Your Details</h1>
            <form
              className="flex flex-col gap-4"
              noValidate
              onSubmit={handleSubmit(submitData)}
            >
              <TextField
                {...register("firstName")}
                label="FirstName"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors?.firstName}
                helperText={errors?.firstName?.message}
                disabled={editMode === false ? true : false}
              />

              <TextField
                {...register("lastName")}
                label="lastName"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors?.lastName}
                helperText={errors?.lastName?.message}
                disabled={editMode === false ? true : false}
              />

              <TextField
                {...register("email")}
                label="email"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors?.email}
                helperText={errors?.email?.message}
                disabled={editMode === false ? true : false}
              />

              <TextField
                {...register("phoneNumber")}
                name="phoneNumber"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Phone Number"
                error={!!errors?.phoneNumber}
                helperText={errors?.phoneNumber?.message}
                disabled={editMode === false ? true : false}
              />

              {data?.data?.result?.startDate && data?.data?.result?.endDate && (
                <>
                  <TextField
                    label="Start Date"
                    {...register("startDate")}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
                  <TextField
                    label="End Date"
                    {...register("endDate")}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
                </>
              )}

              <Button
                type="submit"
                variant="contained"
                disabled={editMode === false ? true : false}
              >
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
