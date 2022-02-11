  // array
  const randomcolor1 = Array('red', 'green', 'pink', 'blue',)
  const randomcolor2 = Array('purple', 'brown', 'orange', 'yellow', 'Chocolate')
  const choose1 = randomcolor1[Math.floor(Math.random() * randomcolor1.length)];
  const choose2 = randomcolor2[Math.floor(Math.random() * randomcolor2.length)];

  const final = Array(choose1, choose2)
  const final1 = final[Math.floor(Math.random() * final.length)];


  const tex1 = document.getElementById('text1')
  const tex2 = document.getElementById('text2')
  const question = document.getElementById('question')
  const ans = document.getElementById('ans')

  const questioncolor = question.style.backgroundColor = final1
  const text1color = tex1.innerHTML = choose2
  const text2color = tex2.innerHTML = choose1


  const randomtextcolor1 = Array(text1color, text2color)
  const choosetextcolor1 = randomtextcolor1[Math.floor(Math.random() * randomtextcolor1.length)];
  const text1tcolor = tex1.style.color = choosetextcolor1



  // const choosetextcolor2
  if (choosetextcolor1 == text1color) {
      choosetextcolor2 = text2color
      console.log("color", choosetextcolor2)
  }
  else {
      choosetextcolor2 = text1color
      console.log("color", choosetextcolor2)
  }
  const text2tcolor = tex2.style.color = choosetextcolor2


  // score
  if (sessionStorage.clickcount) {
      document.getElementById("point").innerText = sessionStorage.clickcount;
  }
  else {
      document.getElementById("point").innerText = 0
  }




  function choosetxt1() {
      if (questioncolor == text1color) {
          ans.innerHTML = "Passed"


          if (sessionStorage.clickcount) {
              sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
          } else {
              sessionStorage.clickcount = 1;
          }
          document.getElementById("point").innerHTML = sessionStorage.clickcount;






          window.setTimeout(function () {
              window.location.reload();
          }, 0000);

      }
      else {
          ans.innerHTML = "Failed"

          if (sessionStorage.clickcount > 0) {
              sessionStorage.clickcount = Number(sessionStorage.clickcount) - 1;
          }

          else if (sessionStorage.clickcount == 0) {
              sessionStorage.clickcount = 0;
          }


          else {
              sessionStorage.clickcount = 1;
          }


          document.getElementById("point").innerHTML = sessionStorage.clickcount;




          window.setTimeout(function () {
              window.location.reload();
          }, 0000);
      }

  }


  function choosetxt2() {
      if (questioncolor == text2color) {

          ans.innerHTML = "Passed"

          if (sessionStorage.clickcount) {
              sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
          } else {
              sessionStorage.clickcount = 1;
          }
          document.getElementById("point").innerHTML = sessionStorage.clickcount;





          window.setTimeout(function () {
              window.location.reload();
          }, 0000);
      }
      else {
          ans.innerHTML = "Failed"


          if (sessionStorage.clickcount > 0) {
              sessionStorage.clickcount = Number(sessionStorage.clickcount) - 1;
          }

          else if (sessionStorage.clickcount == 0) {
              sessionStorage.clickcount = 0;
          }


          else {
              sessionStorage.clickcount = 1;
          }


          document.getElementById("point").innerHTML = sessionStorage.clickcount;









          window.setTimeout(function () {
              window.location.reload();
          }, 0000);
      }
  }

  // reload


  timeLeft = 5;

  function countdown() {
      timeLeft--;
      document.getElementById("seconds").innerHTML = String(timeLeft);
      if (timeLeft > 0) {
          setTimeout(countdown, 1000);
      }
      else {

          // score

          if (sessionStorage.clickcount > 0) {
              sessionStorage.clickcount = Number(sessionStorage.clickcount) - 1;
          }

          else if (sessionStorage.clickcount == 0) {
              sessionStorage.clickcount = 0;
          }


          else {
              sessionStorage.clickcount = 1;
          }




          window.setTimeout(function () {
              window.location.reload();
          }, 0000);
      }
  };

  setTimeout(countdown, 500);


  // 
