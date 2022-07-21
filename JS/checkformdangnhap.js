function kiemtra() {
  var hoTen = document.frm1.fullName.value;
  var sdt = document.frm1.number.value;
  var email = document.frm1.Email.value;
  var mk = document.frm1.passWord.value;
  var nlmk = document.frm1.rePassWord.value;
  var gioiTinh = document.frm1.sex.value;
  var loi = "";

  if (hoTen.length == 0) {
    loi += "Họ tên không được để trống<br>";
  }
  console.log(hoTen);
  if (sdt.length != 10) {
    loi = loi + "SĐT phải có 10 kí tự<br>";
  }
  if (gioiTinh == 0) {
    loi = loi + "Bạn chưa chọn giới tính<br>";
  }
  if (email.length == 0) {
    loi = loi + "Hãy nhập Email<br>";
  }
  if (mk.length == 0) {
    loi = loi + "Hãy nhập Mật khẩu<br>";
  }
  if (nlmk.length == 0) {
    loi = loi + "Hãy nhập lại Mật khẩu<br>";
  }
  if (nlmk != mk) {
    loi += "Nhập lại mật khẩu không đúng"
  }
  if (loi.length > 0) {
    document.getElementById("loi").innerHTML = loi;
  }
  if (loi == "") {
    alert("Chúc mừng bạn đăng ký thành công");
    location.href="index.html";
  }
  return false;
}
