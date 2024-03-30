import express from 'express';
import MLOutput from './models/mlOutputModel.js';
import User from './models/userModel.js';

const router = express.Router();

const testRouter = async (req, res) => {
    const user = await User.findById('66080db053ff31bccb2fe7b7');
    res.json(user);
};

const testRouter2 = async (req, res) => {
    let fakeData = [true, false];
    const fakeMLOutput = {
        data: fakeData,
        createdAt: Date.now(),
    };
    const user = await User.findById('66080db053ff31bccb2fe7b7');
    // const fakeUser = {
    //     username: 'John Doe',
    //     email: 'abc@xyz.com',
    // };
    // const newEntry = new User(fakeUser);
    const newEntry = new MLOutput(fakeMLOutput);
    const ml_id = await newEntry.save();
    user.mlOutput.push(ml_id);
    await user.save();
    res.send('success');
};

// User API endpoints
const createUser = async (req, res) => {
    const { username, email, password, profilePic } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: "Username is already taken." });
      }
  
      const existingEmail = await User.findOne({ email });
  
      if (existingEmail) {
        return res.status(400).json({ error: "Email is already taken." });
      }
  
      const newUser = new User({
        username,
        email,
        password,
        profilePic,
      });

      const savedUser = await newUser.save();
      
      res.status(201).json({ message: "User created successfully", user: savedUser });
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while creating the user." });
    }
  };

const getUserWithId = async (req, res) => {
    try {
      const userId = req.query.userId;
      const user = await User.findOne({ _id: userId })
        .populate("dependants")
        .populate("ecgReadings")
        .populate("mlOutput");
  
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const getUserWithUsername = async (req, res) => {
    try {
      const username = req.query.username;
      console.log(username);
      const user = await User.findOne({ username: username })
        .populate("dependants")
        .populate("ecgReadings")
        .populate("mlOutput");
  
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const editProfile = async (req, res) => {
    const { userId } = req.params;
    const { email, username, password, profilePic } = req.body;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
  
      user.email = email;
      user.username = username;
      user.password = password;
      user.profilePic = profilePic;
  
      await user.save();
  
      res.status(200).json({
        message: "User profile updated successfully.",
        user: {
          id: user.id,
          username: user.username,
          password: user.password,
          email: user.email,
          profilePic: user.profilePic,
        },
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while updating the user profile." });
    }
};

router.route('/').get(testRouter).post(testRouter2)
router.route('/getUserWithId').get(getUserWithId);
router.route('/getUserWithUsername').get(getUserWithUsername);
router.route('/createUser').post(createUser);
router.route('/editProfile/:userId').patch(editProfile);

router.route('/ecg').put(updateECG);

router.route('MLOutput').put(updateMLOutput);

export default router;
