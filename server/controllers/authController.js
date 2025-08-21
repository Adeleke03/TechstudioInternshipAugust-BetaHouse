import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
// import { requireRole } from "../middlewares/roles.js";

// console.log('JWT_SECRET:', JWT_SECRET);
export const signIn = async (req, res) => {
  const JWT_SECRET=process.env.JWT_SECRET;
    const {email,password} = req.body;
    try {
        const user = await  User.findOne({email});
        if (!user) {
            return res.status(401).send('User not found');
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if (!isPasswordMatch) {
            return res.status(401).send('Invalid email or password')
        }
        //Generate JWT
        const token = jwt.sign({
            userId: user._id, email: user.email, role: user.role
        },JWT_SECRET,{expiresIn: '2h'})
      res.status(200).json({message:'Login successful', token});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password,role } = req.body;
  try {
    const existingUser = await User.findOne({email});
    if (existingUser) {
        return res.status(400).send("Email is already taken");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || 'user'
    });
    await user.save();
    res.status(201).send("User successfully registered");
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error')
  }
};


