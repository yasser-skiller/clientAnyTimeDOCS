<template>
   <article class="docs-article">
          <section class="docs-section">
            	<h1 class="docs-heading">Settings</h1>
              <!-- <h3 class="section-heading">Step 1</h3> -->
              <p>
                You can import a default steps ready to use with your site url and your custom authentication.
              </p>
              <img class=" border" :src="require(`~/assets/images/setting_1.png`)">
          </section>
          <section class="docs-section">
              <!-- <h3 class="section-heading">Step 2</h3> -->
              <p>
                <span class="text-them">Send Risk setting: </span> this setting is very hepful in API bulk send to delay send sequence of messages, the default value is 5000 millisecond = 5 secends.
              </p>
              <p>
                this mean that if you sent a bulk messages/media from your platform using the token below, every message/media for each customer will be sended in 5 second.
              </p>
              <p>
                but why? this option is help you to keep your whatsapp account unsuspicious and keep account safe from ratted as a spam and maybe get blocked if you send alot of messages in same second.
              </p>
              <p>
                <span class="text-them">Auth Code: </span> this is the secret code to use as authentication to be able to send a messages/media from your whatsapp through an API.
              </p>
              <p>
                if this code got leaked or someone got it, you can immediately revoke the code, just click generate new code.
              </p>


              <img class=" border" :src="require(`~/assets/images/setting_2.png`)">
          </section>


			  </article>
</template>
