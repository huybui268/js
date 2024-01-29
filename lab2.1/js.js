// Mảng kết hợp sự kiện trong trận đấu [phút, tên hành động]
let suKienTranDau = [
    [10, 'Ghi bàn'],
    [20, 'Thay người'],
    [30, 'Nhận thẻ vàng'],
    [40, 'Ghi bàn'],
    [50, 'Thay người'],
    [60, 'Nhận thẻ vàng'],
    [70, 'Ghi bàn'],
    [80, 'Thay người'],
    [90, 'Kết thúc trận đấu']
];

// Bước 1: Tạo mảng các sự kiện khác nhau
let suKienKhacNhau = Array.from(new Set(suKienTranDau.map(item => item[1])));
console.log("Bước 1: Mảng các sự kiện khác nhau:", suKienKhacNhau);

// Bước 2: Xóa thẻ vàng ở phút 64
const phutCanXoa = 64;
suKienTranDau = suKienTranDau.filter(item => item[0] !== phutCanXoa || item[1] !== 'Nhận thẻ vàng');
console.log("Bước 2: Xóa thẻ vàng ở phút 64:", suKienTranDau);

// Bước 3: Tính trung bình mỗi 9 phút
const soSuKien = suKienTranDau.length;
const thoiGianMotTranDau = 90;
const trungBinhMoi9Phut = soSuKien / (thoiGianMotTranDau / 9);
console.log(`Bước 3: ${soSuKien} sự kiện xảy ra, trung bình mỗi 9 phút.`);

// Bước 4: Lặp toàn bộ mảng sự kiện và in ra màn hình
suKienTranDau.forEach(item => {
    const phut = item[0];
    const suKien = item[1];
    
    // Đánh dấu đối với mỗi sự kiện trong hiệp 1 hay hiệp 2
    const hiep = phut <= thoiGianMotTranDau / 2 ? "FIRST HALF" : "SECOND HALF";
    
    console.log(`[${hiep}] ${phut}: ${suKien}`);
});
