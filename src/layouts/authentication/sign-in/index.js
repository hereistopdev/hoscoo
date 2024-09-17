import { useContext, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import Socials from "../components/Socials";
import axios from "axios";
import { AuthContext } from "store/AuthContext";
import { signIn } from "services/api";

function SignIn() {
  const { setUser } = useContext(AuthContext);

  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await signIn(email, password);

      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        console.log("Hi", response.data);
        setUser({
          userID: response.data.userId,
          displayName: response.data.name,
          email: response.data.email,
          photoURL: undefined,
        });
        navigate("/dashboard");
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
      setError(err.response?.data.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftTypography
            component={Link}
            to="/authentication/forget-pass"
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Forgot password?
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftTypography>{error && error}</SoftTypography>
        <SoftBox mt={3} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Sign In with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
