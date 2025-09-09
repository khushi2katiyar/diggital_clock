function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format
  
    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // initial call
  