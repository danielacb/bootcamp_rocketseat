import { useRouter } from "next/router";

export default function Episode(params) {
  const router = useRouter();

  return <h2>{router.query.slug}</h2>;
}
