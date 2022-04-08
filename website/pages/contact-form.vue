<template>
  <div class="wave-section">
    <div
      class="z-0 grid grid-cols-1 gap-8 pb-56 pl-8 pr-8 md:pl-12 md:pr-12 wave-content bgColor"
    >
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
        <UiHeadline level="1">Contact Us</UiHeadline>
        <article
          class="p-6 mt-6 lg:p-8 "
        >
        <div class="flex flex-wrap">
            <div class="w-full mb-6 md:w-1/2 md:mb-0">
              <h2 class="text-2xl font-semibold">Our Physical Address</h2>
              <address class="mb-8 font-serif not-italic md:text-xl xl:text-xl">
                The Old Theater<br />
                609 Broad Street<br />
                Oriental, NC 28571<br />
                (252) 249 &ndash; 0477<br />
              </address>
            </div>
            <div class="w-full px-3 mb-6 md:w-1/2">
              <h2 class="text-2xl font-semibold">Our Mailing Address</h2>
              <address class="mb-8 font-serif not-italic md:text-xl xl:text-xl">
                The Old Theater<br />
                P.O. Box 521<br />
                Oriental, NC 28571<br />
              </address>
            </div>
          </div>
          <h2 class="mb-6 text-3xl font-semibold">
            We’d love to hear from you!
          </h2>
          <p class="mb-6">
            To contact us, please fill out the form below. Or call The Old
            Theater directly at (252) 249 – 0477.
          </p>

    

      
          
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success"
          >
          
          <input value="contact" name="form-name" type="hidden" />

            <p class="hidden">
              <label>
                Don’t fill out this field if you are human<input
                  class="form-field"
                  name="bot-field"
                />
              </label>
            </p>
           
            <div class="flex flex-wrap mb-6 -mx-3">
              <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="first-name"
                >
                  First Name
                  <span class="ml-1 text-gray-600"> (required) </span>
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 rounded appearance-none borderborder-gray-800 focus:bg-white focus:border-gray-900 focus:outline-none"
                  id="first-name"
                  name="firstname"
                  type="text"
                  placeholder="Jane"
                  required
                />
              </div>
              <div class="w-full px-3 md:w-1/2 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="lastname"
                >
                  Last Name <span class="ml-1 text-gray-600"> (required) </span>
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 rounded appearance-none borderborder-gray-800 focus:bg-white focus:border-gray-900 focus:outline-none"
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap mb-6 -mx-3">
              <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="email"
                >
                  Email <span class="ml-1 text-gray-600"> (required) </span>
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 rounded appearance-none borderborder-gray-800 focus:bg-white focus:border-gray-900 focus:outline-none"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="me@mail.com "
                  required
                />
              </div>
              <div class="w-full px-3 mb-3 md:w-1/2 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="phone"
                >
                  Phone
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 rounded appearance-none borderborder-gray-800 focus:bg-white focus:border-gray-900 focus:outline-none"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="252-555-4444"
                />
              </div>
            </div>
       
            <div class="w-full mt-8">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="comments"
              >
                Message <span class="ml-1 text-gray-600"> </span> </label
              ><textarea
                id="message"
                name="message"
                rows="8"
                cols="50"
                class="block w-full px-4 py-3 text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none mb-3leading-tight focus:bg-whitefocus:border-gray-900 focus:outline-none"
                placeholder="My message is..."
                required
              ></textarea>
              <p class="ml-1 text-xs italic text-gray-600"></p>
            </div>
            <button
              class="px-4 py-2 mt-4 font-bold text-white uppercase bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </form>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
export default {
  metaInfo: {
    title: "Volunteer Registration Form",
  },

  layout: "NewLayout",
  components: {
    UiHeadline,
  },
};
</script>

<style scoped>
.bgColor {
  background-color: #c8ecf7;
}

</style>