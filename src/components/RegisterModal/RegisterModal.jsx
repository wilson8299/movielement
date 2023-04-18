import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BsPersonPlusFill } from "react-icons/bs";
import { useRegisterMutation } from "@/services/authApiSlice";
import { setUserInfo } from "@/store/authSlice";
import {
  ModalStyle,
  OverlayStyle,
  Title,
  Field,
  Input,
  Label,
  ErrorMessage,
  Operate,
} from "./RegisterModal.style";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
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

const RegisterModal = memo(({ modalIsOpen, setModalIsOpen }) => {
  const dispatch = useDispatch();
  const [registerPost, { isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const closeModal = () => {
    setModalIsOpen(false);
    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const onSubmit = async (data) => {
    try {
      const info = await registerPost(data).unwrap();
      dispatch(setUserInfo(info));
      closeModal();
    } catch (err) {
      console.error("Failed to register", err.status, err.data);
    }
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      contentLabel="RegisterModal"
    >
      <Title>
        <BsPersonPlusFill />
        <h3>Create account!</h3>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label>Name:</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </Field>
        <Field>
          <Label>Email:</Label>
          <Input type="text" {...register("email")} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </Field>
        <Field>
          <Label>Password:</Label>
          <Input type="password" {...register("password")} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </Field>
        <Field>
          <Label>Confirm Password:</Label>
          <Input type="password" {...register("confirmPassword")} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        </Field>

        <Operate>
          <button onClick={closeModal}>Close</button>
          <input disabled={isLoading} type="submit" value="Create" />
        </Operate>
      </form>
    </Modal>
  );
});

export default RegisterModal;
