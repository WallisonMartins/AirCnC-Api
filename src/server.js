import app from './app';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ebw4o.mongodb.net/week09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(3333);