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
    "<p>Redeem this coupon for a day without Likusik's spamming! Enjoy the peace and quiet as long as you can. 😌<div class='gif-container center-image'><img src='pictures/spam.gif' alt='Spam' frameborder='0' width:200 height:200></div></p>",
    "<p>Redeem this coupon and enjoy watching what you want without any guilt!🐱‍🏍</p>",
    "<p>Redeem this coupon and enjoy playing the game that you want!😏</p>",
    "<p>Likusik will be as cute as she can! <div class='gif-container center-image'><img src='pictures/cuuute.gif' alt='Cuuute'></div></p>",
    "<p>Likusik promises, she will stop doing what she was doing before! Pupunia😨<div class='gif-container center-image'><img src='pictures/pupunia.gif' alt='Sorry'  frameborder='0'></div></p>",
    "<p>If you have not eaten the whole day and told me about that, redeem this coupon and I will try not to be your mommy 😡<div class='gif-container center-image'><img src='pictures/mom.gif' alt='Mom' frameborder='0'></div></p>",
    "<p>Are you tired of Likusik? Do you want to live in peace at least one day? Redeem this coupon and maybe it will protect you from Likusik for some time!</p>",
    "<p>If you feel that you need a hug, redeem this coupon :3 <div class='gif-container center-image'><img src='pictures/good.gif' alt='Good' frameborder='0'></div> </p>",
    "<p>I have no idea what coupon you would like, so I decided to give you a choice to create the coupon yourself 🤗 </p>",
  ];

  const cheerUp = [
    '<img src="pictures/tittameme.png" alt="Meme Titta" style="display: block; margin: auto; max-width: 100%; max-height: 100%;">',
    '<img src="pictures/hutao.gif" alt="Hutao noot" width="600" height="300" frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    "It is time to distract yourself with your fitness ball!",
    '<img src="pictures/hutao1.jpg" alt="Hutao 1"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/hutao2.jpg" alt="Hutao 2"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/hutao3.jpg" alt="Hutao 3"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/hutao4.jpg" alt="Hutao 4"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<a href="https://www.youtube.com/watch?v=h5JiF3YPs54&list=PLrl-lHUjZCqcYoAZVA4BkaeMixMzDCd7C&index=16&t=321s">Froggy Songs for you</a>',
    '<a href="https://www.youtube.com/watch?v=FSOj7UKsVe8&list=PLrl-lHUjZCqcYoAZVA4BkaeMixMzDCd7C&index=124">I love you so-so-so-so mucchhhh</a>',
    '<a href="https://www.youtube.com/watch?v=Q5BNLaZWdck&list=PLrl-lHUjZCqcYoAZVA4BkaeMixMzDCd7C&index=123">Oooo-o-o-oooo-oo :3</a>',
    '<img src="pictures/sayu.jpg" alt="Sayu"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    "- That dog is so cute! <br>- Who? <br>- Dog! <br> - ... <br>- Haw haw! <br> - Ahh, <i>dooog...<i>",
    "Sowen! Everything will be alright! Just text to Likusik and she will make you feel better :3",
    "Hello, Hazimausowen! Smile😊",
    "I wanted to add here a lot of memes, but I have no idea what could be okay. Imagine that there is a reaaaally funny meme!",
    '<img src="pictures/meme.jpg" alt="Meme"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/cheese.jpg" alt="Cheese"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/kitty.jpg" alt="Kitty"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/important.jpg" alt="Important"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
    '<img src="pictures/flower.jpg" alt="Flower"  frameborder="0" margin: auto; max-width:auto; max-height:auto;>',
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
          });

          viewContainer.innerHTML = "";
          viewContainer.style.display = "none";
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
