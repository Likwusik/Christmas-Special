document.addEventListener("DOMContentLoaded", function () {
  const couponsContainer = document.getElementById("coupons-container");
  const viewsContainer = document.getElementById("views-container");
  const cheerUpButton = document.getElementById("cheer-up-button");
  const bringBackButton = document.getElementById("bring-back-button");
  const mainName = document.getElementById("main-name");

  let couponActive = false;

  //localStorage.clear();

  //LocalStorage logic
  if (localStorage.getItem("usedCoupons") === null) {
    localStorage.setItem("usedCoupons", "[]");
  }

  // Reset button logic
  document
    .getElementById("reset-button")
    .addEventListener("click", function () {
      localStorage.setItem("usedCoupons", "[]");
      let coupons = document.getElementsByClassName("coupon");
      for (let i = 0; i < coupons.length; i++) {
        coupons.item(i).classList.remove("used");
      }
    });

  // Coupon name - you can add custom coupons or change the example that I did
  const coupons = [
    "A day outside for you! 😊",
    "You choose what we will watch next 🤗",
    "You choose what we will play next 👻",
    "Unlimited cuteness whenever you need it! 🥰",
    "A saveword!",
    "Food for you 🥪",
    "A day without me ✨",
    "Virtual hug",
    "One wish! 🎁",
    // add more if you need
  ];

  // Coupon description - you can add custom coupon description or change the example that I did
  const views = [
    "<p>Redeem this coupon for a day when you choose what we will do outside! Enjoy this as long as you can. 😌<div class='gif-container center-image'><img src='pictures/dayOutside.gif' alt='Day outside' frameborder='0' width:200 height:200></div></p>",
    "<p>Redeem this coupon and enjoy watching what you want without any guilt!</p>",
    "<p>Redeem this coupon and enjoy playing the game that you want!</p>",
    "<p>I will be as cute as I can! <div class='gif-container center-image'><img src='pictures/cuuute.gif' alt='Cuuute'></div></p>",
    "<p>I promise, I will stop doing what I was doing before!<div class='gif-container center-image'><img src='pictures/saveword.gif' alt='Sorry'  frameborder='0'></div></p>",
    "<p>Redeem this coupon if you want to eat something special<div class='gif-container center-image'><img src='pictures/food.gif' alt='Food' frameborder='0'></div></p>",
    "<p>Are you tired of me? Do you want to live in peace at least one day? Redeem this coupon and maybe it will protect for some time!</p>",
    "<p>If you feel that you need a hug, redeem this coupon <div class='gif-container center-image'><img src='pictures/good.gif' alt='Good' frameborder='0'></div> </p>",
    "<p>I have no idea what coupon you would like, so I decided to give you a chance to create the coupon yourself 🤗 </p>",
    // add more if you need
  ];

  // CheerUp phrases - you can add custom phrases/memes/videos or change the example that I did
  const cheerUp = [
    '<a href="https://www.youtube.com/watch?v=_BtXPQimVhg&t=2030s">No stress</a>',
    '<a href="https://www.youtube.com/watch?v=Q5BNLaZWdck">Oooo-o-o-oooo-oo</a>',
    "Everything will be alright! Just text to me and we solve the problem together",
    "Hello! Smile😊",
    "I wanted to add here a lot of memes, but I have no idea what could be funny. Imagine that there is a reaaaally funny meme!",
    '<img src="pictures/meme.jpg" alt="Meme"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/important.jpg" alt="Important"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/flower.jpg" alt="Flower"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    // add more if you need
  ];

  // CheerUp phrases appear randomly after you click the cheerUp button
  cheerUpButton.addEventListener("click", function () {
    couponsContainer.style.display = "none";
    mainName.style.display = "none";
    document.getElementById("reset-button").style.display = "none";

    const randomCheerUp = cheerUp[Math.floor(Math.random() * cheerUp.length)];
    document.getElementById("cheer-up").innerHTML = `<p>${randomCheerUp}</p>`;
    bringBackButton.style.display = "inline-block";
    document.getElementById("cheer-up").style.display = "block";
  });

  // Back button logic
  bringBackButton.addEventListener("click", function () {
    couponsContainer.style.display = "block";
    mainName.style.display = "block";
    document.getElementById("reset-button").style.display = "block";
    viewsContainer.innerHTML = "";
    bringBackButton.style.display = "none";
    document.getElementById("cheer-up").style.display = "none";
  });

  // Coupon description apprearing logic
  coupons.forEach((coupon, index) => {
    const couponContainer = document.createElement("div");
    couponContainer.classList.add("coupon-container");

    const couponElement = document.createElement("div");
    couponElement.setAttribute("id", "coup");
    couponElement.classList.add("coupon");
    couponElement.classList.add("hover");
    couponElement.textContent = coupon;

    const viewContainer = document.createElement("div");
    viewContainer.classList.add("view-container");

    couponContainer.appendChild(couponElement);
    couponContainer.appendChild(viewContainer);

    handleRedeem(true);

    function handleRedeem(initial = false) {
      let used = isCouponUsed(index);
      if ((!initial && !used) || (initial && used)) {
        couponActive = false;

        couponsContainer.childNodes.forEach((otherCoupon) => {
          otherCoupon.classList.remove("blurred");
        });

        couponElement.classList.add("used");
        viewContainer.innerHTML = "";
        viewContainer.style.display = "none";

        // Mark the coupon as used
        markCouponAsUsed(index);
      }
    }

    // Function to check if a coupon is already used
    function isCouponUsed(coupon) {
      const usedCoupons = JSON.parse(localStorage.getItem("usedCoupons"));
      return usedCoupons.includes(coupon);
    }

    // Function to mark a coupon as used
    function markCouponAsUsed(coupon) {
      const usedCoupons = JSON.parse(localStorage.getItem("usedCoupons"));

      usedCoupons.push(coupon);
      localStorage.setItem("usedCoupons", JSON.stringify(usedCoupons));
    }

    // Coupon using logic
    couponElement.addEventListener("click", function () {
      if (!couponElement.classList.contains("used") && !couponActive) {
        couponActive = true;

        couponsContainer.childNodes.forEach((otherCoupon, otherIndex) => {
          if (otherIndex !== index) {
            otherCoupon.classList.add("blurred");
          }
          otherCoupon.querySelector("#coup").classList.remove("hover");
        });

        viewContainer.innerHTML = `
          <div class="view">
            ${views[index]}
            <button id="redeem-button">Redeem the Coupon</button>
            <button id="back-button">Back</button>
          </div>`;

        viewContainer.style.display = "block";

        const redeemButton = document.getElementById("redeem-button");
        const backButton = document.getElementById("back-button");

        // Exeptions "A day without me" and "One wish"
        redeemButton.addEventListener("click", function () {
          if (coupon === "A day without me ✨") {
            showQuestions();
          } else if (coupon === "One wish! 🎁") {
            showUserInput();
          } else {
            handleRedeem();
          }
        });

        backButton.addEventListener("click", function () {
          couponActive = false;

          couponsContainer.childNodes.forEach((otherCoupon) => {
            otherCoupon.classList.remove("blurred");
          });

          viewContainer.innerHTML = "";
          viewContainer.style.display = "none";
        });
      }

      // Special logic for "A day without me" coupon
      function showQuestions() {
        viewContainer.innerHTML = `
          <div class="question">
            <iframe src='pictures/what.gif' alt='What' width='400' height='300' frameborder='0'></iframe>
            <p>Are you sure?</p>
            <button id="yes-button">Yes</button>
            <button id="no-button">No</button>
          </div>`;

        const yesButton = document.getElementById("yes-button");
        const noButton = document.getElementById("no-button");

        yesButton.addEventListener("click", function () {
          showSecondQuestion();
        });

        noButton.addEventListener("click", function () {
          viewContainer.innerHTML = `
            <div class="view">
              ${views[index]}
              <button id="redeem-button">Redeem the Coupon</button>
              <button id="back-button">Back</button>
            </div>`;

          const redeemButton = document.getElementById("redeem-button");
          const backButton = document.getElementById("back-button");

          redeemButton.addEventListener("click", function () {
            showQuestions();
          });

          backButton.addEventListener("click", function () {
            couponActive = false;

            couponsContainer.childNodes.forEach((otherCoupon) => {
              otherCoupon.classList.remove("blurred");
              otherCoupon.querySelector("#coup").classList.add("hover");
            });

            viewContainer.innerHTML = "";
            viewContainer.style.display = "none";
          });
        });
      }

      function showSecondQuestion() {
        viewContainer.innerHTML = `
          <div class="question">
          <iframe src='pictures/whatwhat.gif' alt='Whatwhat' width='400' height='300' frameborder='0'></iframe>
            <p>Do you want to be the whole day without me?</p>
            <button id="yes-full-day-button">Yes, I do!</button>
            <button id="no-full-day-button">No</button>
          </div>`;

        const yesFullDayButton = document.getElementById("yes-full-day-button");
        const noFullDayButton = document.getElementById("no-full-day-button");

        yesFullDayButton.addEventListener("click", function () {
          showFinalMessage(true);
        });

        noFullDayButton.addEventListener("click", function () {
          viewContainer.innerHTML = `
            <div class="view">
              ${views[index]}
              <button id="redeem-button">Redeem the Coupon</button>
              <button id="back-button">Back</button>
            </div>`;

          const redeemButton = document.getElementById("redeem-button");
          const backButton = document.getElementById("back-button");

          redeemButton.addEventListener("click", function () {
            showQuestions();
          });

          backButton.addEventListener("click", function () {
            couponActive = false;

            couponsContainer.childNodes.forEach((otherCoupon) => {
              otherCoupon.classList.remove("blurred");
              otherCoupon.querySelector("#coup").classList.add("hover");
            });

            viewContainer.innerHTML = "";
            viewContainer.style.display = "none";
          });
        });
      }

      function showFinalMessage(redeem) {
        viewContainer.innerHTML = `
          <div class="question">
          <iframe src='pictures/redeem.gif' alt='Redeem' width='240' height='220' frameborder='0'></iframe>
            <p>I see. Just redeem this coupon then<p>
            <button id="yes-redeem-this-button">Redeem</button>
            <button id="no-redeem-this-button">Back</button>
          </div>`;

        const redeemThisButton = document.getElementById(
          "yes-redeem-this-button"
        );
        const noRedeemThisButton = document.getElementById(
          "no-redeem-this-button"
        );

        //Button escaping logic
        redeemThisButton.addEventListener("mousemove", function (event) {
          redeemThisButton.classList.add("yes-redeem-this-button-style");

          const buttonWidth = redeemThisButton.clientWidth;
          const buttonHeight = redeemThisButton.clientHeight;

          // Get the position of the cursor
          const mouseX = event.clientX;
          const mouseY = event.clientY;

          // Get the position of the button
          const buttonX = redeemThisButton.offsetLeft + buttonWidth / 2;
          const buttonY = redeemThisButton.offsetTop + buttonHeight / 2;

          // Calculate the distance between the cursor and the button
          const deltaX = mouseX - buttonX;
          const deltaY = mouseY - buttonY;
          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

          const thresholdPercentage = 2;

          const thresholdDistance =
            (Math.min(viewContainer.clientWidth, viewContainer.clientHeight) *
              thresholdPercentage) /
            100;

          if (distance < thresholdDistance) {
            // If the cursor is too close, move the button away
            redeemThisButton.style.left =
              buttonX -
              deltaX +
              thresholdDistance / distance -
              buttonWidth / 2 +
              "px";
            redeemThisButton.style.top =
              buttonY -
              deltaY +
              thresholdDistance / distance -
              buttonHeight / 2 +
              "px";
          } else {
            // Otherwise, set the button's position based on the cursor
            redeemThisButton.style.left = mouseX - buttonWidth / 2 + "px";
            redeemThisButton.style.top = mouseY - buttonHeight / 2 + "px";
          }
        });

        noRedeemThisButton.addEventListener("click", function () {
          couponActive = false;
          redeemThisButton.classList.remove("yes-redeem-this-button-style");

          couponsContainer.childNodes.forEach((otherCoupon) => {
            otherCoupon.classList.remove("blurred");
            otherCoupon.querySelector("#coup").classList.add("hover");
          });

          viewContainer.innerHTML = "";
          viewContainer.style.display = "none";
        });
      }

      //Logic for "One wish" coupon
      function showUserInput() {
        viewContainer.innerHTML = `
          <div class="question">
            <label for="user-input">Enter your wish:</label>
            <input type="text" id="user-input" placeholder="Your wish here">
            <button id="submit-wish-button">Submit</button>
            <button id="back-wish-button">Back</button>
          </div>`;

        const submitWishButton = document.getElementById("submit-wish-button");
        const backWishButton = document.getElementById("back-wish-button");

        submitWishButton.addEventListener("click", function () {
          const userInput = document.getElementById("user-input").value;
          if (userInput.trim() !== "") {
            // Use the user's input to replace the coupon name
            couponElement.textContent = userInput;
            handleRedeem();
          } else {
          }
        });
        backWishButton.addEventListener("click", function () {
          couponActive = false;

          couponsContainer.childNodes.forEach((otherCoupon) => {
            otherCoupon.classList.remove("blurred");
            otherCoupon.querySelector("#coup").classList.add("hover");
          });

          viewContainer.innerHTML = "";
          viewContainer.style.display = "none";
        });
      }
    });

    couponsContainer.appendChild(couponContainer);
  });
});
