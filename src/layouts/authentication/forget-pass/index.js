import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { requestPasswordReset } from "services/api";

function ForgetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await requestPasswordReset(email);
      setMessage("Password reset link sent");
    } catch (error) {
      setMessage("Failed to send reset link");
      console.error(error.response.data);
    }
  };

  return (
    <CoverLayout
      title="Forgot password?"
      description="Enter your email below, you will receive an email with instructions on how to reset your password in a few mintues."
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
            Start recovery
          </SoftButton>
          {message && <p>{message}</p>}
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            You don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Create an account
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default ForgetPass;
