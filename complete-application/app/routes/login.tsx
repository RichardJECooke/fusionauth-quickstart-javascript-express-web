import type { LoaderFunction } from "@remix-run/node"
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.authenticate("FusionAuth", request, {
    successRedirect: "/account",
    failureRedirect: "/",
  });
};
