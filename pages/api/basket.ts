import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getBasket();
    case 'PUT':
      return updateBasket();
    case 'DELETE':
      return deleteBasket();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  function getBasket() {
    /**
     * pseudo-code only to demostrate the work flow
     */
    try {
      const data = db.getBasket(req.body.userID);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  function updateBasket() {
    /**
     * pseudo-code only to demostrate the work flow
     */
    try {
      const payload = newBasket;
      const data = db.updateBasket(req.body.userID, {payload});
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  function deleteBasket() {
    /**
     * pseudo-code only to demostrate the work flow
     */
    try {
      const data = db.deleteBasket(req.body.userID);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
