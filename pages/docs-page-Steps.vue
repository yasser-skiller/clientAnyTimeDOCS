<template>
    <article class="docs-article">
          <section class="docs-section">
            	<h1 class="docs-heading">Steps</h1>
              <!-- <h3 class="section-heading">Step 1</h3> -->
              <p class="my-3">
                Steps Page allow you with an easy <span class="text-them">drag and drop </span> feature to customize the respond that you want to the customers.
              </p>
              <p>
                Example: you want to set a Special <span class="text-them"> welcome message </span> for each customer that will contact you.
              </p>
              <p>
                or you want to show your customers your products if they typed "Products" or whatever you set the keywords to respond or do an action.
              </p>
              <p>
                we also provide an<span class="text-them"> Advanced api requests </span> to your store or a link.
              </p>
              <p>
                You can send a <span class="text-them"> Media </span> to Whatsapp
              </p>
              <p>
                also you can transfer the chat to a <span class="text-them"> department </span> a new ticket for your users if Customers typed a spicific message or requested to.
                and alot of <span class="text-them">features</span>.
              </p>

              <img class=" border" :src="require(`~/assets/images/step_1.png`)">
          </section>
          <section class="docs-section">
              <!-- <h3 class="section-heading">Step 2</h3> -->
              <p>
                These are the blocks you can drag and drop to build your steps.
                each one of these has it own functionality.
              </p>
              <img class=" border" :src="require(`~/assets/images/step_2.png`)">
              <img class=" border my-4" :src="require(`~/assets/images/step_3.png`)">
              <img class=" border my-4" :src="require(`~/assets/images/step_4.png`)">
              <img class=" border my-4" :src="require(`~/assets/images/step_5.jpeg`)">

          </section>
          <section class="docs-section">
              <!-- <h3 class="section-heading">Step 3</h3> -->
              <p>And in your ticket will see the department is assigned.</p>
              <img class=" border" :src="require(`~/assets/images/step_6.png`)">
          </section>
          <section class="docs-section">
              <!-- <h3 class="section-heading">Step 4</h3> -->
              <p>API block.</p>
              <img class=" border" :src="require(`~/assets/images/step_7.png`)">
          </section>
           <section class="docs-section">
              <!-- <h3 class="section-heading">Step 5</h3> -->
              <p>Greeting Block.</p>
              <img class=" border" :src="require(`~/assets/images/step_8.png`)">
          </section>
           <section class="docs-section">
              <!-- <h3 class="section-heading">Step 5</h3> -->
              <p>API FILEDS AND GREETING MESSAGE API FIELDS.</p>
              <img class=" border mb-4" :src="require(`~/assets/images/step_9.png`)">
              <p>Success message: the message that will sent if api request is 200OK and with data.</p>
              <p>NOTE: in greeting message if no api link is set you then success message will be the default message</p>
              <p>NotFound message: the message that will sent if api request is 200 but with no data in the body.</p>
              <p>Failed message: the message that will sent if api request is 302 or 400 or 500 etc.</p>
              <p>API METHOD: GET | PUT | POST | DELETE</p>
              <p>you can set the request headers request params and the body as you want.</p>
              <p>API AUTH Oauth1 is also available for a secure api request </p>
              <p>You can replace the content of the message or the request with dynamic data like:</p>
              <p>1- {phone} => the customer phone</p>
              <p>2- {name} => the customer Name [from your contacts if he is a contact]</p>
              <p>3- {last_message} => the customer last message, this helpful if last message is orderID... then you can check with this variable</p>
              <p>4- you can set your own variables, so first add in varaiable field the name you want to adjust like order_status then in find field check your reuqest repond and take that value to send in the message and use it as {order_status}</p>
              <p>5- speicial variables sendMedia => u can't set this varaible in message but it useful for sending media after your message just find link from the respond body and it will be sended to the customer as media. sendMediaFromURL => as sendMedia but it just take the link directly and not from the API reponse.</p>
              <p>if you feel cmoplicated feel free to contact our team we can help you to set your steps as you want.</p>

          </section>
          <section class="docs-section">
            <p>Edit Message Block</p>
            <img class=" border" :src="require(`~/assets/images/step_10.png`)">
          </section>
          <section class="docs-section">
            <p>Edit KeyWord Block:</p>
            <p>you can add multiple keyword to catch if customer typed.</p>
            <img class=" border" :src="require(`~/assets/images/step_11.png`)">
            <img class=" border mt-3" :src="require(`~/assets/images/step_12.png`)">
          </section>
			  </article>
</template>
