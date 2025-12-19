const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserModel = require("./models/User");

dotenv.config();

const queryString =
  process.env.MONGODB_URI ||
  "mongodb+srv://dung08122003:dung.tm0812@cluster0.cjqbu.mongodb.net/SimpleCRUDBackend?retryWrites=true&w=majority";

// Sample user data with Vietnamese names
const sampleUsers = [
  {
    name: "Nguyễn Văn An",
    username: "nguyen.van.an",
    email: "nguyenvanan@gmail.com",
    city: "Hà Nội",
    phone: "0912-345-678",
    website: "nguyenvanan.vn",
  },
  {
    name: "Trần Thị Bình",
    username: "tran.thi.binh",
    email: "tranthibinh@gmail.com",
    city: "Hồ Chí Minh",
    phone: "0987-654-321",
    website: "tranthibinh.com.vn",
  },
  {
    name: "Lê Hoàng Cường",
    username: "le.hoang.cuong",
    email: "lehoangcuong@gmail.com",
    city: "Đà Nẵng",
    phone: "0901-234-567",
    website: "lehoangcuong.vn",
  },
  {
    name: "Phạm Minh Đức",
    username: "pham.minh.duc",
    email: "phamminhduc@gmail.com",
    city: "Hải Phòng",
    phone: "0938-765-432",
    website: "phamminhduc.net",
  },
  {
    name: "Hoàng Thị Hà",
    username: "hoang.thi.ha",
    email: "hoangthiha@gmail.com",
    city: "Cần Thơ",
    phone: "0976-543-210",
    website: "hoangthiha.vn",
  },
  {
    name: "Vũ Đức Hùng",
    username: "vu.duc.hung",
    email: "vuduchung@gmail.com",
    city: "Huế",
    phone: "0965-432-109",
    website: "vuduchung.com",
  },
  {
    name: "Đặng Thị Lan",
    username: "dang.thi.lan",
    email: "dangthilan@gmail.com",
    city: "Nha Trang",
    phone: "0923-456-789",
    website: "dangthilan.vn",
  },
  {
    name: "Bùi Văn Long",
    username: "bui.van.long",
    email: "buivanlong@gmail.com",
    city: "Vinh",
    phone: "0945-678-901",
    website: "buivanlong.net",
  },
  {
    name: "Phan Thị Mai",
    username: "phan.thi.mai",
    email: "phanthimai@gmail.com",
    city: "Vũng Tàu",
    phone: "0934-567-890",
    website: "phanthimai.com.vn",
  },
  {
    name: "Đinh Quốc Nam",
    username: "dinh.quoc.nam",
    email: "dinhquocnam@gmail.com",
    city: "Quy Nhơn",
    phone: "0918-901-234",
    website: "dinhquocnam.vn",
  },
  {
    name: "Ngô Thị Oanh",
    username: "ngo.thi.oanh",
    email: "ngothioanh@gmail.com",
    city: "Đà Lạt",
    phone: "0956-789-012",
    website: "ngothioanh.vn",
  },
  {
    name: "Trương Minh Phúc",
    username: "truong.minh.phuc",
    email: "truongminhphuc@gmail.com",
    city: "Biên Hòa",
    phone: "0972-345-678",
    website: "truongminhphuc.com",
  },
  {
    name: "Lý Thị Quỳnh",
    username: "ly.thi.quynh",
    email: "lythiquynh@gmail.com",
    city: "Thái Nguyên",
    phone: "0989-012-345",
    website: "lythiquynh.vn",
  },
  {
    name: "Võ Văn Sơn",
    username: "vo.van.son",
    email: "vovanson@gmail.com",
    city: "Buôn Ma Thuột",
    phone: "0943-210-987",
    website: "vovanson.net",
  },
  {
    name: "Đỗ Thị Tâm",
    username: "do.thi.tam",
    email: "dothitam@gmail.com",
    city: "Phan Thiết",
    phone: "0967-890-123",
    website: "dothitam.vn",
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(queryString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");

    // Clear existing users
    await UserModel.deleteMany({});
    console.log("Cleared existing users");

    // Insert sample users
    const users = await UserModel.insertMany(sampleUsers);
    console.log(`Successfully added ${users.length} users to the database`);

    // Display created users
    console.log("\nCreated users:");
    users.forEach((user, index) => {
      console.log(
        `${index + 1}. ${user.name} (${user.username}) - ${user.email}`
      );
    });

    mongoose.connection.close();
    console.log("\nDatabase connection closed");
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
}

seedDatabase();
