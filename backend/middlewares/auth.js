import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Login again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  

    if (decoded && decoded.id) {
      req.user = { id: decoded.id };   
      next();   
    } else {
      return res.status(401).json({ success: false, message: "Invalid token payload" });
    }
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default userAuth;
