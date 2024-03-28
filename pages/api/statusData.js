import { getStatus } from "../../components/utils";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function GET(req, res) {
  const data = await getStatus();
  res.status(200).json(data);
}
