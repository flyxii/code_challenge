import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method != "POST") {
      throw new Error("Request method not allowed");
    }
    const { payment } = req.body;

    if (!payment) {
      throw new Error("Payment is empty");
    }

    /**
     * Logic to submit payment
     * Perhaps call the api from Stripe / PAypal or other services
     */

    return res.status(200).end();
  } catch (err) {
    return res.status(500).end();
  }
}
