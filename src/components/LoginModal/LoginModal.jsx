import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { useLoginMutation } from "@/services/authApiSlice";
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
} from "./LoginModal.style";

const schema = yup.object().shape({
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
});

const LoginModal = memo(({ modalIsOpen, setModalIsOpen }) => {
  const dispatch = useDispatch();
  const [loginPost, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const closeModal = () => {
    setModalIsOpen(false);
    reset({
      email: "",
      password: "",
    });
  };

  const onSubmit = async (data) => {
    try {
      const info = await loginPost(data).unwrap();
      dispatch(setUserInfo(info));
      closeModal();
    } catch (err) {
      console.error("Failed to login", err.status, err.data);
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
      contentLabel="LoginModal"
    >
      <Title>
        <BsFillPersonCheckFill />
        <h3>Login!</h3>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Operate>
          <button onClick={closeModal}>Close</button>
          <input disabled={isLoading} type="submit" value="Login" />
        </Operate>
      </form>
    </Modal>
  );
});

export default LoginModal;
