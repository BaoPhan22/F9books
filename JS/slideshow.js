var banner = [];
var index = 0;
var sohinh = 4;
for (var i = 0; i < sohinh; i++) {
  banner[i] = new Image();
  banner[i].src = "img/banner" + i + ".png";
}

function prev() {
  index--;
  if (index < 0) {
    index = banner.length - 1;
  }
  var anh = document.getElementById("anh");
  anh.src = banner[index].src;
//   document.getElementById("hienthi").innerHTML =
//     index + 1 + "/" + banner.length;
}prev();
function next() {
    index++;
    if (index >= banner.length) {
        index = 0;
    }
    var anh = document.getElementById('anh');
    anh.src = banner[index].src;
    // document.getElementById('hienthi').innerHTML = index + 1 + "/" + banner.length;
    
}next();  
// 
// 