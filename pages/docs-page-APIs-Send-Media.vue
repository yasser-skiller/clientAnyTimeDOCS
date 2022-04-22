<template>
  <article class="docs-article">
          <section class="docs-section">
            	<h1 class="docs-heading">Send Media - REST API</h1>

            <p>
              you can program a script or use api like postman to send media from your phone that connected with our servers, you will need the token from Settings Page so that we van authorize you
            <p>
              the api url to send: https://panel.clientanytime.com/api/v1/send_media
            </p>
            <p>Authorization header: Authorization and here put generated code</p>
            <p>Content-Type header: application/json</p>
            <p>don't foreget POST method.</p>

            <img class=" border" :src="require(`~/assets/images/api_5.png`)">

          </section>

          <section class="docs-section">
            <p>
             then send the data in [body] and in JSON format
            </p>
            <p>
             the parameter for the customer number to send: phoneNumber [string]
            </p>
            <p>the parameter for the Message to send: message [string]</p>
            <p>you can append multi files link to send, with limit 16m per file.</p>


            <img class=" border" :src="require(`~/assets/images/api_6.png`)">
            <p>as you can see sent successully.</p>
          </section>

			  </article>
</template>
