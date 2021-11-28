import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getProduct();
    case 'PUT':
      return updateProduct();
    case 'DELETE':
      return deleteProduct();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  function getProduct() {
    /**
     * pseudo-code only to demostrate the work flow
     */
    try {
      const data = db.getProduct(req.body.productID);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  function updateProduct() {
    /**
     * pseudo-code only to demostrate the work flow
     */
    try {
      const payload = { quantity: req.body.quantity };
      const data = db.updateProduct(req.body.productID, {payload});
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  function deleteProduct() {
    /**
     * pseudo-code only to demostrate the work flow
     */
    try {
      const data = db.deleteProduct(req.body.productID);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
