const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  durationworkingout: {
    type: String,
  },
  bio: {
    type: String,
  },
  age: {
    type: Date,
  },
  gender: {
    type: String,
  },
  hometown: {
    type: String,
  },
  professionaltrainer: {
    type: String,
    // required: true,
  },

  interests: {
    type: [String],
    // required: true,
  },

  goals: {
    type: String,
    // required: true,
  },

  education: [
    {
      school: {
        type: String,
      },
      degree: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
