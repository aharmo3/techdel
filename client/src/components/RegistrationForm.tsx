import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Form, { FormContext } from "./Form";
import FormInput from "./FormInput";

import Grid from "@mui/material/Unstable_Grid2";
import { API, LS_KEYS } from "../constants";
import useFetch from "../useFetch";


type FormProp =  {[key: string]: any;}

export default function RegistrationForm() {
  const REGISTER_FORM = {
    username: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { fetchData } = useFetch(API.REGISTER);
  const handleSubmit = async (form: FormProp) => {
    const options = {
      method: "POST",
      body: {
        username: form.username,
        password: form.password,
        email: form.email,
      },
    };
    fetchData(options, (data) => {
      navigate("/login");
      window.location.reload();
    });
  };
  return (
    <Form
      submit={(form) => {
        handleSubmit(form);
      }}
      formInitialValues={REGISTER_FORM}
    >
      <FormInput label="Email" name="email" type="email" />
      <FormInput label="Username" name="username" />
      <FormInput label="Password" name="password" type="password" />

      <Grid sm={12}>
        <Button size="large" variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </Form>
  );
}
