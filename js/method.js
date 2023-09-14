//tính điểm tổng kết:


function diemTongKet(diem1, diem2, diem3) {

    var tong = diem1 + diem2 + diem3

    return tong
}

function diemUuTien1(khuVuc, doiTuong) {

    switch (khuVuc) {
        case 'a':
            khuVuc = 2
            break
        case 'b':
            khuVuc = 1
            break
        case 'c':
            khuVuc = 0.5
            break
        default:
            khuVuc = 0
    }


    switch (doiTuong) {
        case '1':
            doiTuong = 2.5
            break
        case '2':
            doiTuong = 1.5
            break
        case '3':
            doiTuong = 1
            break
        default:
            doiTuong = 0
    }

    var uuTien = khuVuc + doiTuong

    return uuTien
}




//tính tiền điện:

function tienDien(soTienKw1, soTienKw2, soTienKw3, soTienKw4, soTienKw5, soKw) {

    var tongTien = 0
    if (soKw <= 50) {
        tongTien = soTienKw1 * soKw
    } else if (soKw > 50 && soKw <= 100) {
        tongTien = (soTienKw1 * 50) + ((soKw - 50) * soTienKw2)
    } else if (soKw > 100 && soKw <= 200) {
        tongTien = (soTienKw2 * 100 - (soTienKw1 * 15)) + ((soKw - 100) * soTienKw3)
    } else if (soKw > 200 && soKw <= 350) {
        tongTien = (soTienKw3 * 200 - (soTienKw4 * 25)) + ((soKw - 200) * soTienKw4)
    } else {
        tongTien = (soTienKw5 * (soKw - 350)) + (soTienKw4 * 350 - ((soTienKw5 * 60) - soTienKw1))
    }
    return tongTien
}





//tính thuế thu nhập cá nhân:

function tongThuNhapNam(thuNhap, nguoiPhuThuoc) {
    var tongThuNhap = thuNhap - 4e+6 - nguoiPhuThuoc * 1.6e+6

    if (thuNhap < 10e+6) {
        alert('số tiền nhập không hợp lệ')
        tongThuNhap = 0
    } else {
        if (tongThuNhap < 10e+6) {

        } else if (tongThuNhap >= 10e+6 && tongThuNhap <= 60e+6) {
            tongThuNhap = tongThuNhap * 0.05
        } else if (tongThuNhap > 60e+6 && tongThuNhap <= 120e+6) {
            tongThuNhap = tongThuNhap * 0.1
        } else if (tongThuNhap > 120e+6 && tongThuNhap <= 210e+6) {
            tongThuNhap = tongThuNhap * 0.15
        } else if (tongThuNhap > 210e+6 && tongThuNhap <= 384e+6) {
            tongThuNhap = tongThuNhap * 0.2
        } else if (tongThuNhap > 384e+6 && tongThuNhap <= 624e+6) {
            tongThuNhap = tongThuNhap * 0.25
        } else if (tongThuNhap > 624e+6 && tongThuNhap <= 960e+6) {
            tongThuNhap = tongThuNhap * 0.3
        } else {
            tongThuNhap = tongThuNhap * 0.35
        }
    }
    return tongThuNhap

}



//tính cước mạng:
function TienCap(loaiKhachHang, soKetNoi, soKenhVip) {

    var phiDichVu = 0
    var phiXuLy = 0
    var phiKenhVip = 0


    switch (loaiKhachHang) {
        case 'norman':
            phiXuLy = 4.5
            phiDichVu = 20.5
            phiKenhVip = 7.5

            break
        case 'vip':

            if (soKetNoi > 10) {
                phiDichVu = 75 + ((soKetNoi - 10) * 5)
            } else {
                phiDichVu = 75 + 0
            }
            phiXuLy = 15
            phiKenhVip = 50
            break

    }

    var tong = phiDichVu + phiXuLy + (phiKenhVip * soKenhVip)
    return tong
}