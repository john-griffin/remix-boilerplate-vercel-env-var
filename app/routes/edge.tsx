import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@vercel/remix";

export const loader = async ({ params }: LoaderArgs) => {
  const sampleEnvVar = process.env.SAMPLE_ENV_VAR;
  return json({ sampleEnvVar });
}

export const config = { runtime: "edge" };

export default function Edge() {
  const { sampleEnvVar } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Sample Env Var: <code>{sampleEnvVar}</code>
    </div>
  );
}
