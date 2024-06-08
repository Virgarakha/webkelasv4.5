function foto() {
    var name = document.getElementById("ft").value.trim();
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
  
    if (name === "polije") {
      popUp.innerHTML = `
      <h1 style="color: green; text-align: center;">POLIJE</h1>
        <p style="text-align: center;">28 - 05 - 2024</p>
      <img style=" margin-top : 10px; width: 150px; border-radius: 10%;" src="img/polije1.jpg">
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
    `;
    } else {
      popUp.innerHTML = `
      <h3 style="color: red; text-align: center;">Ops!</h3>
      <p style="color: gray; text-align: center;">Foto yang anda cari tidak ditemukan</p>
      <button id="closeBtn" style="color: white; background-color: red; margin: 10px 0; padding: 5px 10px; border-radius: 5px;">Close</button>
      `;
    }
    
    
    profile.appendChild(popUp);
  
    var closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", function () {
      profile.removeChild(popUp);
    });
  }
