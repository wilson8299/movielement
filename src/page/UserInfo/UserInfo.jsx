import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { Field, Input, Label, ErrorMessage, Submit } from "./UserInfo.style";
import { useChagePasswordMutation } from "@/services/authApiSlice";
import { setUserInfo } from "@/store/authSlice";
import { userInfo } from "@/store/authSlice";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Required")
    .min(8, "Must be 8~16 characters")
    .max(16, "Must be 8~16 characters")
    .matches(/[a-z]+/, "Must contain one lowercase character")
    .matches(/[A-Z]+/, "Must contain one uppercase character")
    .matches(/[@$!%*#?&/]+/, "Must contain one special character")
    .matches(/\d+/, "Must contain one number"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password and Confirm Password does not match"),
});

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(userInfo);
  const [changepasswordPost, { isLoading }] = useChagePasswordMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await changepasswordPost(data).unwrap();
      dispatch(setUserInfo(response));
      toast.success("Your password has been reset successfully!");
      reset({
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error("Failed to change password.");
      console.error("Failed to change password.", err.status, err.data);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label>Name:</Label>
          <Input type="text" defaultValue={user.name} disabled />
        </Field>
        <Field>
          <Label>Email:</Label>
          <Input type="text" defaultValue={user.email} disabled />
        </Field>
        <Field>
          <Label>New Password:</Label>
          <Input type="password" {...register("password")} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </Field>
        <Field>
          <Label>Confirm Password:</Label>
          <Input type="password" {...register("confirmPassword")} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        </Field>
        <Submit type="submit" value="Submit" />
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Fragment>
  );
};

export default UserInfo;
