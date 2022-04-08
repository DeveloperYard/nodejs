const express = require('express');
const User = require('../models/User.js');
const passport = require('passport');
const multer = require('multer');
const cloudinary = require('cloudinary');
const router = express.Router();

// Multer setup

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  }
});

const imageFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return callback(new Error("Only image files are allowed!"), false);
  }
  callback(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

// cloudinary file setup

cloudinary.config({
  cloud_name: process.env.CLOUDYNARY_CLOUD_NAME,
  api_key: process.env.CLOUDYNARY_API_KEY,
  api_secret: process.env.CLOUDYNARY_API_SECRET,
});

// middleware

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticate()) {
    return next();
  }
  req.flash("error", "You needed to be logged in to do that!");
  res.redirect("/user/login");
}

// routers

// User router

router.post('/user/register', upload.single("image"), (req, res) => {
  if (
    req.body.username &&
    req.body.firstName &&
    req.body.lastName &&
    req.body.password
  ) {
    let newUser = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    if (req.file) {
      cloudinary.uploader.upload(req.file.path, result => {
        newUser.profile = result.secure_url;
        return createUser(newUser, req.body.password, req, res);
      })
    }
    else {
      newUser.profile = process.env.DEFAULT_PROFILE_PIC;
      return createUser(newUser, req.body.password, req, res);
    }
  }
});
