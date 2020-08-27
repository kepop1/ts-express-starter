import mongoose from 'mongoose';
import Widget from '../models/Widget';

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/widgets';

const mongooseOptions = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

mongoose.connect(DB_URI, mongooseOptions);

const widgetSeed = [
  {
    colors: {
      brandColor1: '#FFFFFF',
      brandColor2: '#F9FAFA',
      brandColor1Text: '#e8ebeb',
      brandColor2Text: '#d1d7d7',
      headerColor: '#bac3c3',
      lightText: '#a3afaf',
      darkText: '#8c9b9b',
      entryPointBackground: '#707c7c',
    },
    companyName: 'dvelp',
    welcomeMessage: 'welcome to dvelp chat, have fun!',
  },
  {
    colors: {
      brandColor1: '#FFFFFF',
      brandColor2: '#F9FAFA',
      brandColor1Text: '#e8ebeb',
      brandColor2Text: '#d1d7d7',
      headerColor: '#bac3c3',
      lightText: '#a3afaf',
      darkText: '#8c9b9b',
      entryPointBackground: '#707c7c',
    },
    companyName: 'wonderbill',
    welcomeMessage: 'welcome to wb chat, have fun!',
  },
];

Widget.deleteMany({})
  .then(() => Widget.collection.insertMany(widgetSeed))
  .then((data: any) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  });
