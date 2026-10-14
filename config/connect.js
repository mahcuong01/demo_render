const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tmcuonga25032_db_user:cuong123@cluster0.vxrod9b.mongodb.net/users_db?retryWrites=true&w=majority",
    );

    console.log("Kết nối MongoDB Atlas thành công");
  } catch (err) {
    console.error("Lỗi kết nối MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
