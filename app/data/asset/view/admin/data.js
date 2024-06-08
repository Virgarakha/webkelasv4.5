function cari() {
  var name = document.getElementById("search").value.trim();
  var profile = document.getElementById("profile");
  profile.innerHTML = "";
  var popUp = document.createElement("div");
  popUp.style.position = "fixed";
  popUp.style.top = "50%";
  popUp.style.left = "50%";
  popUp.style.transform = "translate(-50%, -50%)";
  popUp.style.backgroundColor = "white";
  popUp.style.padding = "20px";
  popUp.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  popUp.setAttribute("data-aos", "fade-up");
  popUp.setAttribute("data-aos-duration", "500");

  if (name === "Adit") {
    popUp.innerHTML = `
    <p style="color: green;">Admin</p>
    <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
    <h3>Achmad Maulana Aditya</h3>
    <p>Nomor : 085730394536</p>
    <p>Umur : 17</p>
    <p>Alamat : Tanggul</p>
    <p>Sekolah : Smkn 6 jember</p>
    <p>Jurusan : RPL</p>
    <p>Point : 20.5</p>
    <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
  `;
  } else if (name === "Adith") {
    popUp.innerHTML = `
    <p style="color: green;">Developer</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Adith Dwi Putra Suparwanto</h3>
      <p>Nomor : 085733456535</p>
      <p>Umur : 16</p>
      <p>Alamat : Djatiroto</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Putra") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Aditya Putra Ar-Ruham</h3>
      <p>Nomor : 081515634481</p>
      <p>Umur : 16</p>
      <p>Alamat : Sumberbaru</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Ferdy") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Achmad Ferdy Pratama</h3>
      <p>Nomor : none</p>
      <p>Umur : 16</p>
      <p>Alamat : Sumberjo</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Lana") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Ahmad Maulana Farsah</h3>
      <p>Nomor : 08978373492</p>
      <p>Umur : 16</p>
      <p>Alamat : Gambirono</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Nabil") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Ahmad Mufti Nabil</h3>
      <p>Nomor : 081235765191</p>
      <p>Umur : 16</p>
      <p>Alamat : Tanggul</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Ridwan") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Ahmad Riduwan</h3>
      <p>Nomor : 085850288556</p>
      <p>Umur : 16</p>
      <p>Alamat : Bangsalsari</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Fatar") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3> Al Fatar Oriza Nanda Irawan</h3>
      <p>Nomor : 085746532962</p>
      <p>Umur : 16</p>
      <p>Alamat : Wringinagung</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Alif") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3> Alif Maqsudi</h3>
      <p>Nomor : 082228315872</p>
      <p>Umur : 16</p>
      <p>Alamat : Bangsalsari</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Anas") {
    popUp.innerHTML = `
    <p style="color: green;">Developer</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Anas Maulana Hisyam</h3>
      <p>Nomor : 082332691319</p>
      <p>Umur : 15</p>
      <p>Alamat : Jamintoro</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Gio") {
    popUp.innerHTML = `
    <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Andika Zeva Giovani</h3>
      <p>Nomor : 085730144507</p>
      <p>Umur : 15</p>
      <p>Alamat : Karangbayat</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Aulia") {
    popUp.innerHTML = `
    <p style="color: green;">Admin</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Aruni Suci Aulia</h3>
      <p>Nomor : 085753750254</p>
      <p>Umur : 16</p>
      <p>Alamat : Sumberagung</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Rakha") {
    popUp.innerHTML = `
      <p style="color: green;">Developer</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Audryan Virga R.K</h3>
      <p>Nomor : 081333794278</p>
      <p>Umur : 15</p>
      <p>Alamat : Sumberagung</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Bambang") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Audryan Virga R.K</h3>
      <p>Nomor : 081333794278</p>
      <p>Umur : 15</p>
      <p>Alamat : Gembongan</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else if (name === "Bunga") {
    popUp.innerHTML = `
      <p style="color: green;">Admin</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Bunga Shinta Eka Y.P</h3>
      <p>Nomor : 085731691374</p>
      <p>Umur : 16</p>
      <p>Alamat : Wringinagung</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Delila") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Delila Thoriq Risky</h3>
      <p>Nomor : 085333837483</p>
      <p>Umur : 16</p>
      <p>Alamat : Bangsalsari</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Denny") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Denny Setiawan Pratama</h3>
      <p>Nomor : 082142907529</p>
      <p>Umur : 16</p>
      <p>Alamat : Bangsalsari</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Dyah") {
    popUp.innerHTML = `
      <p style="color: green;">Admin</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Dyah Ayu Asmawati</h3>
      <p>Nomor : 088231533547</p>
      <p>Umur : 16</p>
      <p>Alamat : Darungan</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Dimas") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Dimas Farel Sarwoko</h3>
      <p>Nomor : 085737280049</p>
      <p>Umur : 16</p>
      <p>Alamat : Bangsalsari</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Diva") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Diva Hadi</h3>
      <p>Nomor : 083833228797</p>
      <p>Umur : 16</p>
      <p>Alamat : none</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Tania") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Duwi Iftita Nia Sari</h3>
      <p>Nomor : 085707060024</p>
      <p>Umur : 16</p>
      <p>Alamat : none</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Elva") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Elvania Shafa Riyanto</h3>
      <p>Nomor : 082139482148</p>
      <p>Umur : 16</p>
      <p>Alamat : Pondok Walo</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Faizza") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Faizzatur Rohmah</h3>
      <p>Nomor : 082139482148</p>
      <p>Umur : 16</p>
      <p>Alamat : none</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Fannisa") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Fannisa Nurul Qoriah</h3>
      <p>Nomor : 085732346737</p>
      <p>Umur : 16</p>
      <p>Alamat : none</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Farel") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Farel Trio Saputra</h3>
      <p>Nomor : 081805469985</p>
      <p>Umur : 16</p>
      <p>Alamat : Djatiroto</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Fathur") {
    popUp.innerHTML = `
    <p style="color: green;">Admin</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Fathur Rossid</h3>
      <p>Nomor : 0888801605468</p>
      <p>Umur : 17</p>
      <p>Alamat : Bangsalsari</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  
  else if (name === "Fika") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Fika Nurul Hidayah</h3>
      <p>Nomor : 085230492326</p>
      <p>Umur : 16</p>
      <p>Alamat : Balung</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Gabrial") {
    popUp.innerHTML = `
      <p style="color: green;">Developer</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Gabrial Fitrah Pradana</h3>
      <p>Nomor : 085733280495</p>
      <p>Umur : 16</p>
      <p>Alamat : Ngampelrejo</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Haidar") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Haidzar Aly</h3>
      <p>Nomor : 08818451647</p>
      <p>Umur : 17</p>
      <p>Alamat : Gembongan</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Aini") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Hikmah Tulaini</h3>
      <p>Nomor : 0895622238803</p>
      <p>Umur : 16</p>
      <p>Alamat : none</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Ibriel") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Ibriel Irsadul Firdaus</h3>
      <p>Nomor : 081230175647</p>
      <p>Umur : 16</p>
      <p>Alamat : none</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Irgi") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Irgi Saputra</h3>
      <p>Nomor : 0881026062813</p>
      <p>Umur : 17</p>
      <p>Alamat : none</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  else if (name === "Irza") {
    popUp.innerHTML = `
      <p style="color: gray;">Siswa</p>
      <img style="width: 50px; border-radius: 100%;" src="img/pp.jpg">
      <h3>Irza Adya Salsabila</h3>
      <p>Nomor : 085855656382</p>
      <p>Umur : 16</p>
      <p>Alamat : Pondokjoyo</p>
      <p>Sekolah : Smkn 6 jember</p>
      <p>Jurusan : RPL</p>
      <p>Point : 20.5</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  } else {
    popUp.innerHTML = `
    <h3 style="color: red; text-align: center;">Teman tidak ditemukan</h3>
    <p style="color: gray; text-align: center;">pastikan anda menggunakan kata kunci dengan benar</p>
    <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
  }
  
  
  profile.appendChild(popUp);

  var closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", function () {
    profile.removeChild(popUp);
  });
}
