//bài 1: điểm tổng kết

document.getElementById('btnKetQua1').onclick = function() {
    //input:
    var diemChuan = +document.getElementById('diemChuan').value
    var doiTuong = document.getElementById('doiTuong').value
    var khuVuc = document.getElementById('khuVuc').value

    var diem1 = +document.getElementById('diemMon1').value
    var diem2 = +document.getElementById('diemMon2').value
    var diem3 = +document.getElementById('diemMon3').value

    //output:
    var Tong = 0
    var diemUuTien = 0
    var xepLoai = ''


    //progress

    //tính điểm tổng kết:
    diemUuTien = diemUuTien1(khuVuc, doiTuong)

    Tong = diemTongKet(diem1, diem2, diem3) + diemUuTien


    //điều kiện xếp loại:

    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        xepLoai = 'rớt vì có môn 0 điểm'
    } else if (Tong >= diemChuan) {
        xepLoai = 'đậu'
    } else {
        xepLoai = 'rớt vì không đủ điểm chuẩn'
    }

    //xuất kết quả

    document.getElementById('tongDiem').innerHTML = Tong + '. bạn đã ' + xepLoai
}

//bài 2: tính tiền điện

document.getElementById('btnTinhTien').onclick = function() {
    //input:
    var khach = document.getElementById('tenNguoiDung').value
    var soKw = +document.getElementById('soKw').value

    //output:
    var TongTienDien = 0
    TongTienDien = tienDien(500, 650, 850, 1100, 1300, soKw)


    //progress
    document.getElementById('ketQua2').innerHTML = 'của khách hàng ' + khach + ' là ' + TongTienDien.toLocaleString() + 'vnd'
}


//bài 3: tính thuế thu nhập cá nhân


document.getElementById('btnTinhTienThue').onclick = function() {
    //input
    var ten = document.getElementById('tenNguoiDung1').value
    var tienThuNhap = document.getElementById('tienThue').value
    var nguoiPhuThuoc = document.getElementById('nguoiPhuThuoc').value

    //output
    var tienThue1 = 0
    tienThue1 = tongThuNhapNam(tienThuNhap, nguoiPhuThuoc)

    //progress
    document.getElementById('ketQua3').innerHTML = 'của khách hàng ' + ten + ' là: ' + tienThue1.toLocaleString() + 'vnđ'

}

//bài 4: tính tiền cáp


//khi chọn doanh nghiệp mới mở thẻ input số kết nối
function soKetNoi1(obj) {
    var value = obj.value
    if (value === 'vip') {
        document.getElementById('soKetNoi').style.display = 'block'
    } else {
        document.getElementById('soKetNoi').style.display = 'none'
    }
}



document.getElementById('btnTinhTienCap').onclick = function() {
    //input:
    var maKH = document.getElementById('maKhachHang').value
    var loaiKhachHang = document.getElementById('loaiKhachHang').value
    var soKenhVip = document.getElementById('kenhVip').value
    var soKetNoi = document.getElementById('soKetNoi').value

    //output:
    var tongTien = 0

    //progress
    tongTien = TienCap(loaiKhachHang, soKetNoi, soKenhVip)

    document.getElementById('ketQua4').innerHTML = ' mã ' + maKH + ' là: ' + tongTien.toFixed(2) + '$'
}