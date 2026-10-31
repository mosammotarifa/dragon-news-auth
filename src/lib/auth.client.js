import { auth } from "@/lib/auth"; // path to your auth file

import { createAuthClient } from "better-auth/react";

export const { POST, GET } = toNextJsHandler(auth);

export const { signIn, signUp, useSession } = createAuthClient()