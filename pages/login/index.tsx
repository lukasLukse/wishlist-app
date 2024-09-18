import Header from "@/components/Header/Header";
import LoginForm from "@/components/LoginForm/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <Header isUserLoggedIn={false} />
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
        Login to Inventory App
      </h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
