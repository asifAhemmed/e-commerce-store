import express from "express";


const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Sign Up");
}
);


export default router;
