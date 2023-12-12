document.addEventListener("DOMContentLoaded", function () {
  const couponsContainer = document.getElementById("coupons-container");
  const viewsContainer = document.getElementById("views-container");
  const cheerUpButton = document.getElementById("cheer-up-button");
  const bringBackButton = document.getElementById("bring-back-button");
  const mainName = document.getElementById("main-name");

  let couponActive = false;

  const coupons = [
    "No-Spam Day📩",
    "You choose what we will watch in the evening 🤗",
    "You choose what we will play in the evening 😊",
    "Unlimited cuteness whenever you need it! 🥰",
    "A saveword! 🐾",
    "No mommy behavior! 🥪🚫",
    "A day without Likwusik ✨",
    "Virtual hugs for cutie pattootie ❤",
    "One wish! 🎁",
  ];

  const views = [
    "<p>Redeem this coupon for a day without Likusik's spamming! Enjoy the peace and quiet as long as you can. 😌<div class='gif-container'><iframe src='pictures/dance.gif' alt='Happy' width='600' marginleft='25' height='500' frameborder='0'></iframe></div></p>",
    "<p>Redeem this coupon and enjoy watching what you want without any guilt!🐱‍🏍</p>",
    "<p>Redeem this coupon and enjoy playing the game that you want!😏</p>",
    "<p>Likusik will be as cute as she can! <div class='gif-container'><iframe src='pictures/cute.gif' alt='Cute' width='600' marginleft='25' height='400' frameborder='0'></iframe></div></p>",
    "<p>Likusik promises, she will stop doing what she was doing before! Pupunia😨<div class='gif-container'><iframe src='pictures/giphy.gif' alt='Sorry' width='360' marginleft='25' height='270' frameborder='0'></iframe></div></p>",
    "<p>If you have not eaten the whole day and told me about that, redeem this coupon and I will try to not be your mommy 😡</p>",
    "<p>Are you tired of Likusik? Do you want to live in peace at least one day? Redeem this code and maybe it will protect you from Likusik for some time!</p>",
    "<p>If you feel that you need a hug, redeem this code :3 <div class='gif-container'><iframe src='pictures/cute.gif' alt='Cute' width='600' marginleft='25' height='400' frameborder='0'></iframe></div> </p>",
    "<p>I have no idea what coupon you would like, so I decided to give you a choice to create the coupon yourself 🤗 </p>",
  ];

  const cheerUp = [
    '<img src="pictures/tittameme.png" alt="Meme Titta">',
    '<iframe src="pictures/hutao.gif" alt="Hutao noot" width="600" marginleft="25" height="300" frameborder="0"></iframe>',
    "It is time to distract yourself with your fitness ball!",
  ];

  cheerUpButton.addEventListener("click", function () {
    couponsContainer.style.display = "none";
    mainName.style.display = "none";
    const randomCheerUp = cheerUp[Math.floor(Math.random() * cheerUp.length)];
    document.getElementById("cheer-up").innerHTML = `<p>${randomCheerUp}</p>`;
    bringBackButton.style.display = "inline-block";
    document.getElementById("cheer-up").style.display = "block";
  });

  bringBackButton.addEventListener("click", function () {
    couponsContainer.style.display = "block";
    mainName.style.display = "block";
    viewsContainer.innerHTML = "";
    bringBackButton.style.display = "none";
    document.getElementById("cheer-up").style.display = "none";
  });

  coupons.forEach((coupon, index) => {
    const couponContainer = document.createElement("div");
    couponContainer.classList.add("coupon-container");

    const couponElement = document.createElement("div");
    couponElement.classList.add("coupon");
    couponElement.textContent = coupon;

    const viewContainer = document.createElement("div");
    viewContainer.classList.add("view-container");

    couponContainer.appendChild(couponElement);
    couponContainer.appendChild(viewContainer);

    couponElement.addEventListener("click", function () {
      if (!couponElement.classList.contains("used") && !couponActive) {
        couponActive = true;

        couponsContainer.childNodes.forEach((otherCoupon, otherIndex) => {
          if (otherIndex !== index) {
            otherCoupon.classList.add("blurred");
          }
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

        redeemButton.addEventListener("click", function () {
          if (coupon === "A day without Likwusik ✨") {
            showLikwusikQuestions();
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
      function handleRedeem() {
        couponActive = false;

        couponsContainer.childNodes.forEach((otherCoupon) => {
          otherCoupon.classList.remove("blurred");
          couponElement.classList.add("used");
          viewContainer.innerHTML = "";
          viewContainer.style.display = "none";
        });
      }

      function showLikwusikQuestions() {
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
          showSecondLikwusikQuestion();
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
            showLikwusikQuestions();
          });

          backButton.addEventListener("click", function () {
            couponActive = false;

            couponsContainer.childNodes.forEach((otherCoupon) => {
              otherCoupon.classList.remove("blurred");
            });

            viewContainer.innerHTML = "";
            viewContainer.style.display = "none";
          });
        });
      }

      function showSecondLikwusikQuestion() {
        viewContainer.innerHTML = `
          <div class="question">
          <iframe src='pictures/whatwhat.gif' alt='Whatwhat' width='400' height='300' frameborder='0'></iframe>
            <p>Do you want to be the whole day without Likwusik?</p>
            <button id="yes-full-day-button">Yes, I do!</button>
            <button id="no-full-day-button">No</button>
          </div>`;

        const yesFullDayButton = document.getElementById("yes-full-day-button");
        const noFullDayButton = document.getElementById("no-full-day-button");

        yesFullDayButton.addEventListener("click", function () {
          showFinalLikwusikMessage(true);
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
            showLikwusikQuestions();
          });

          backButton.addEventListener("click", function () {
            couponActive = false;

            couponsContainer.childNodes.forEach((otherCoupon) => {
              otherCoupon.classList.remove("blurred");
            });

            viewContainer.innerHTML = "";
            viewContainer.style.display = "none";
          });
        });
      }

      function showFinalLikwusikMessage(redeem) {
        viewContainer.innerHTML = `
          <div class="question">
          <iframe src='pictures/redeem.gif' alt='Redeem' width='240' height='220' frameborder='0'></iframe>
            <p>I see :< Just redeem this coupon then<p>
            <button id="yes-redeem-this-button">Redeem</button>
            <button id="no-redeem-this-button">Back</button>
          </div>`;

        const redeemThisButton = document.getElementById(
          "yes-redeem-this-button"
        );
        const noRedeemThisButton = document.getElementById(
          "no-redeem-this-button"
        );

        let buttonX = 0;
        let buttonY = 0;

        let velocityX = 0;
        let velocityY = 0;
        const dampingFactor = 0.1;
        const repulsionForce = 50; // Adjust as needed

        // Add event listener for "Back" button click
        noRedeemThisButton.addEventListener("click", function () {
          couponActive = false;

          couponsContainer.childNodes.forEach((otherCoupon) => {
            otherCoupon.classList.remove("blurred");
          });

          viewContainer.innerHTML = "";
          viewContainer.style.display = "none";
        });

        // Add mousemove event listener to update button position
        document.addEventListener("mousemove", function (event) {
          const mouseX = event.clientX;
          const mouseY = event.clientY;

          const couponDescriptionBounds = viewContainer.getBoundingClientRect();
          const minX = couponDescriptionBounds.left;
          const minY = couponDescriptionBounds.top;
          const maxX = couponDescriptionBounds.right;
          const maxY = couponDescriptionBounds.bottom;

          // Calculate the difference between the button position and the cursor position
          const deltaX = buttonX - mouseX;
          const deltaY = buttonY - mouseY;

          // Calculate the force based on the repulsion force
          const forceX = deltaX / repulsionForce;
          const forceY = deltaY / repulsionForce;

          // Update the velocity based on the force and damping factor
          velocityX -= forceX + velocityX + dampingFactor;
          velocityY -= forceY + velocityY + dampingFactor;

          // Update the button position based on the velocity
          buttonX += velocityX;
          buttonY += velocityY;

          // Ensure the button stays within the boundaries of the coupon description
          buttonX = Math.max(minX, Math.min(buttonX, maxX));
          buttonY = Math.max(minY, Math.min(buttonY, maxY));

          // Update the button position
          redeemThisButton.style.left = `${buttonX}px`;
          redeemThisButton.style.top = `${buttonY}px`;
        });
      }

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
            // Handle empty input, show a message or prompt the user
          }
        });
        backWishButton.addEventListener("click", function () {
          couponActive = false;

          couponsContainer.childNodes.forEach((otherCoupon) => {
            otherCoupon.classList.remove("blurred");
          });

          viewContainer.innerHTML = "";
          viewContainer.style.display = "none";
        });
      }
    });

    couponsContainer.appendChild(couponContainer);
  });

  function displayView(view) {
    viewsContainer.innerHTML = "";
    const viewElement = document.createElement("div");
    viewElement.innerHTML = view;
    viewsContainer.appendChild(viewElement);
  }
});
