import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log();
  console.log(`Server is running on port ${port}`);
  console.log(process.env.APP_URL);
});
