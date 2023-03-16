let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime()

  var timer = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    let docType1 = (document.getElementById("countDown") as HTMLInputElement)
   
    const el: HTMLElement | string = docType1.innerHTML = days + "x" + hours + "x"
    + minutes + "x" + seconds
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(timer);
      docType1.innerHTML = "EXPIRED";
    }
    return el 
  }, 1000);

  export default timer