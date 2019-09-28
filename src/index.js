const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is up on " + port);
});

// app.use((req, res, next) => {
//   if (req.method==='GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("The server is now on maintenence mode.");
// });

// File upload
// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     // cb(new Error("File must be a PDF"));
//     // cb(undefined, true)
//     // cb(undefined, false)

//     // match(regular expression)
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a Word document"));
//     }
//     cb(undefined, true);
//   }
// });
// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

// Populate
// const Task = require("./models/task");
// const User = require("./models/user");
// const main = async () => {
//   // const task = await Task.findById("5d8b4026e3ccd1416a3be5df");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5d8b3f5bef19e14159070a48");
//   await user.populate("myTasks").execPopulate();
//   console.log(user.myTasks);
// };
// main();
