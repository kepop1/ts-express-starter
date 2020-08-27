import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  colors: {
    brandColor1: {
      type: String,
      required: true,
    },
    brandColor2: {
      type: String,
      required: true,
    },
    brandColor1Text: {
      type: String,
      required: true,
    },
    brandColor2Text: {
      type: String,
      required: true,
    },
    headerColor: {
      type: String,
      required: true,
    },
    lightText: {
      type: String,
      required: true,
    },
    darkText: {
      type: String,
      required: true,
    },
    entryPointBackground: {
      type: String,
      required: true,
    },
  },
  companyName: {
    type: String,
    required: true,
  },
  welcomeMessage: {
    type: String,
    required: true,
  },
});

const Widget = mongoose.model('Widget', schema);

export default Widget;
