import axios from "axios";

const GATEWAY_URL =
  process.env.GATEWAY_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://uniz-gateway.vercel.app/api/v1"
    : "http://localhost:3000/api/v1");
const MAIL_SERVICE_URL = process.env.MAIL_SERVICE_URL || `${GATEWAY_URL}/mail`;
const INTERNAL_SECRET = process.env.INTERNAL_SECRET || "uniz-core";

export const sendOtpEmail = async (
  email: string,
  username: string,
  otp: string,
): Promise<boolean> => {
  try {
    console.log(`Attempting to send OTP email via: ${MAIL_SERVICE_URL}/send`);
    const res = await axios.post(
      `${MAIL_SERVICE_URL}/send`,
      {
        type: "otp",
        to: email,
        data: { username, otp },
      },
      {
        headers: { "x-internal-secret": INTERNAL_SECRET },
      },
    );
    return res.data.success;
  } catch (error: any) {
    console.error(`Failed to send OTP email via Mail Service:`, {
      url: `${MAIL_SERVICE_URL}/send`,
      error: error.message,
      response: error.response?.data,
    });
    return false;
  }
};

export const sendLoginNotification = async (
  email: string,
  username: string,
  ipAddress?: string,
): Promise<boolean> => {
  try {
    const res = await axios.post(
      `${MAIL_SERVICE_URL}/send`,
      {
        type: "login_alert",
        to: email,
        data: { username, ip: ipAddress },
      },
      {
        headers: { "x-internal-secret": INTERNAL_SECRET },
      },
    );
    return res.data.success;
  } catch (error) {
    console.error(`Failed to send login notification via Mail Service:`, error);
    return false;
  }
};

export const sendPasswordChangeNotification = async (
  email: string,
  username: string,
): Promise<boolean> => {
  try {
    const res = await axios.post(
      `${MAIL_SERVICE_URL}/send`,
      {
        type: "password_change",
        to: email,
        data: { username },
      },
      {
        headers: { "x-internal-secret": INTERNAL_SECRET },
      },
    );
    return res.data.success;
  } catch (error) {
    console.error(
      `Failed to send password change notification via Mail Service:`,
      error,
    );
    return false;
  }
};

export const sendProfileUpdateNotification = async (
  email: string,
  username: string,
  updatedFields: string[],
): Promise<boolean> => {
  try {
    const res = await axios.post(
      `${MAIL_SERVICE_URL}/send`,
      {
        type: "profile_update",
        to: email,
        data: { username, updatedFields },
      },
      {
        headers: { "x-internal-secret": INTERNAL_SECRET },
      },
    );
    return res.data.success;
  } catch (error) {
    console.error(
      `Failed to send profile update notification via Mail Service:`,
      error,
    );
    return false;
  }
};
