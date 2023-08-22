import { Box, Button, Modal, TextField } from "@mui/material";
import { PricingData } from "./pricingData";
import { ArrowForward } from "@mui/icons-material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { isAuthenticated } from "../../utils/token.utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/auth";
import { useMutation, useQuery } from "react-query";
import { GET_PRICING_DATA } from "../../service/application/query";
import { IUserData } from "../membership/membership";
import instance from "../../utils/http/interceptor";
import { toast } from "react-hot-toast";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 16,

  p: 4,
};

const PricingCards = () => {
  const [open, setOpen] = useState(false);

  const [id, setId] = useState("");

  const { userData } = useContext(AuthContext);
  const [isDisbale, setIsDisbable] = useState(false);

  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery("Data", GET_PRICING_DATA, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const UPDATE = async (data: { data: IUserData }) => {
    const updatePlan = await instance.patch(`user/updatePlan/${id}`, data.data);
    return updatePlan;
  };

  const update = useMutation("update", UPDATE, {
    onSuccess: () => {
      setIsDisbable(true);
      toast.success("Package has been enrolled");
      refetch();
    },
  });

  const form = useForm<IUserData>({
    defaultValues: {
      startDate: "",
    },
  });

  const { register, handleSubmit } = form;

  const onGetStartedBtnClick = (pricingId: string) => {
    if (isAuthenticated()) {
      setOpen(true);
      setId(pricingId);
    } else {
      navigate("/login");
    }
  };

  const submitData = (data: IUserData) => {
    console.log("hello", data);
    update.mutateAsync({ data: data });

    setOpen(false);
  };

  if (isLoading) {
    return <>Loading....</>;
  }
  return (
    <>
      <div className="flex items-center justify-evenly flex-wrap ">
        {data.map(
          (item: {
            planType: string;
            price: string;
            duration: string;
            id: string;
          }) => (
            <div
              key={item?.id}
              className="min-h-[420px] w-[300px] text-center shadow-boxshadow max-md:mb-[50px] md:mb-[50px]"
            >
              <h2>{item?.planType}</h2>
              <p className="mb-[20px]">
                <span className="text-2xl">$</span>
                <span className="text-4xl text-primary ">{item?.price}</span>
              </p>
              <h2>
                {item?.duration} <span className="text-primary">Months</span>
              </h2>
              <ul className="list-none p-0">
                {PricingData.map((item, index) => (
                  <li className="mb-4" key={index}>
                    <ArrowForward className="align-middle text-primary text-sm" />{" "}
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="contained"
                className="mt-5"
                onClick={() => onGetStartedBtnClick(item?.id)}
                disabled={userData?.planId ? true : false}
              >
                Enroll
              </Button>

              <Modal
                open={open}
                onClose={() => {
                  setOpen(false);
                  setId("");
                }}
              >
                <Box sx={style}>
                  <h1>Select Your Date</h1>
                  <form onSubmit={handleSubmit(submitData)}>
                    <TextField
                      type="date"
                      label="Start Date"
                      focused
                      fullWidth
                      sx={{ marginBottom: 3 }}
                      {...register("startDate")}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 3 }}
                    >
                      Save And Exit
                    </Button>

                    <Button
                      variant="contained"
                      sx={{ background: "#b38b59" }}
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </form>
                </Box>
              </Modal>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default PricingCards;
