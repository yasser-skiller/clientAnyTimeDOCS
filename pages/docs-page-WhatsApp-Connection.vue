<template>
  <article class="docs-article">
          <section class="docs-section">
            	<h1 class="docs-heading">WhatsApp Connection</h1>
              <h3 class="section-heading">Step 1</h3>
              <p>
                After you login yoy need to connect your WhatsApp to our service (If you not connected yet)
                You will get a QR Code to scan, Just like WhatsApp web connection.
              </p>
              <img class=" border" :src="require(`~/assets/images/whatsConnection_2.png`)">
              <small class="text-center mt-2">if your WhatsApp is multi-Device, you may need to scan the QR twice.</small>
          </section>
          <section class="docs-section">
              <h3 class="section-heading">Step 2</h3>
              <p>After you scan the code wait until you successfully connected.</p>
              <img class=" border" :src="require(`~/assets/images/whatsConnection_1.png`)">
          </section>
          <p class="mt-3">
            <span class="text-them">Note:</span> You can disconnect the connection from the disconnect button If you want to change the number or use another device or for any reason do you want, But you will not be able to use our service probably.
            <br>
            You will not receive new messages, you will not be able to send messages or add new contacts, and your users will not be able to send messages too.
          </p>

			  </article>
</template>
