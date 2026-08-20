const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'img');
const destDir = path.join(__dirname, 'public', 'img');

if (!fs.existsSync(srcDir)) {
  console.log('Thư mục img không tồn tại hoặc đã được di chuyển trước đó!');
  process.exit(0);
}

// Tạo thư mục public nếu chưa có
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Di chuyển img sang public/img
try {
  fs.renameSync(srcDir, destDir);
  console.log('Đã di chuyển thành công thư mục img vào public/img!');
} catch (err) {
  console.error('Lỗi khi di chuyển thư mục:', err);
}
