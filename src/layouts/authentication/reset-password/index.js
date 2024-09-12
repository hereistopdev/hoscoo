import { useState } from "react";

// react-router-dom components
import { Link, useLocation, useNavigate } from "react-router-dom";

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
import { resetPassword } from "services/api";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const response = await resetPassword(token, password);
        setMessage(response.data);
        setTimeout(() => {
          navigate("/authentication/sign-in");
        }, 1000);
      } catch (error) {
        setMessage("Failed to reset Password");
        console.error(error.response.data);
      }
    } else {
      setMessage("Password should be matched.");
    }
  };

  return (
    <CoverLayout
      title="Reset Password"
      description="Enter your new passwords. We suggest you to set the strong password for your security."
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              New Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Confirm Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
            Reset Password
          </SoftButton>
          {message && <p>{message}</p>}
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default ResetPassword;
