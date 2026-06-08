import { jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || "development-secret-change-me"
);

export async function createAdminToken(email: string) {
  return new SignJWT({
    email,
    role: "admin",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyAdminToken(token: string | undefined) {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, secret);

    if (payload.role !== "admin") {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}