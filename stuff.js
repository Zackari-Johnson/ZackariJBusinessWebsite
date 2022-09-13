
function audioChange() {
  const audioState = document.getElementById("audioicon").src;
  var fileName = audioState.substring(audioState.lastIndexOf('/') + 1);
  const musicPlayer = document.getElementById("musicplayer");
  musicPlayer.volume = 0.03;
  if (fileName == "volume.png") {
    document.getElementById("audioicon").src = "novolume.png";
    musicPlayer.pause();
  }
  else {
    document.getElementById("audioicon").src = "volume.png";
    musicPlayer.play();
  }
}



// const firstname = [' Mike', ' John', ' Robert', ' David', ' Ababacar', ' William', ' Jeniffer', ' Quantavious', ' Thomas', ' Christopher', ' Sue', ' Andrew', ' Matthew', ' Lisa', ' Osereme', ' Mary', ' Quandale', ' Brian', ' George', ' Patricia', ' Walter', ' Ryan', ' Eric', ' Linda', " Ke'Andre", ' Brandon', ' King', ' Queen', ' Lord', ' Lady', ' Sir', ' Miss', ' Jack', ' Khaleeb' ];
// const lastname = [' Smith', ' Johnson', ' Charles', ' Williamson', ' Doe', ' Dingleberry', ' Nassir', ' Brown', ' Garcia', ' Gallegos', ' Bingleton', ' Beasley', ' Hermandez', ' Gandiz', ' White', ' Knigroes', ' Gurr', ' Oxlong', ' Dicks', ' Chin', ' Chong', ' Nassir', ' Ramirez', ' Puciteit', ' Pucieclin', ' Pucifres', ' Hall', ' Clark', ' Thompson', ' Jones', ' Miller'];

// const getfname = () => `${firstname[Math.floor(Math.random() * firstname.length)]}`;
// const getlname = () => `${lastname[Math.floor(Math.random() * lastname.length)]}`;

// console.log(getfname());
// console.log(getlname());

// document.getElementById("fname").value = getfname();
// document.getElementById("lname").value = getlname();



