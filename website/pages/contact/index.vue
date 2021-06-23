<template>
  <div>
    <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <!-- <UiHeadline level="1">Contact Us.</UiHeadline> -->
      <article class="p-6 mt-6 bg-white rounded shadow lg:p-8">
        <div class="flex flex-wrap">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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

        <h2 class="mb-6 text-3xl font-semibold">We’d love to hear from you!</h2>
        <p class="mb-6">
          To contact us, please fill out the form below. Or call The Old Theater
          directly at (252) 249 – 0477.
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <p class="hidden">
            <label
              >Don’t fill out this field if you are human
              <input class="form-field" name="bot-field"
            /></label>
          </p>
          <div class="flex flex-wrap mb-6 -mx-3">
            <div class="w-full px-3 mb-6 md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="subject"
                >Subject<span class="ml-1 text-gray-600"
                  >(required)</span
                ></label
              >

              <!-- <select
                id="subject"
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded focus:bg-white focus:border-gray-900 focus:outline-none"
                required
              >
                <option value="">Please select a subject</option>
                <option value="General">General</option>
                <option value="Box Office">Box Office</option>
                <option value="Facilities">Facilities</option>
                <option value="Membership">Membership</option>
                <option value="Rent the Theater">Rent the Theater</option>
                <option value="Sponsor a Show">Sponsor a Show</option>
                <option value="Treasurer">Treasurer</option>
                <option value="Technical Services">Technical Services</option>
                <option value="Membership - Volunteering">
                  Membership / Volunteering
                </option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
              </select> -->
            </div>
          </div>
          <div class="flex flex-wrap mb-6 -mx-3">
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="first-name"
                >First Name<span class="ml-1 text-gray-600"
                  >(required)</span
                ></label
              ><input
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                id="first-name"
                name="firstname"
                type="text"
                placeholder="Jane"
                required
              />
            </div>
            <!-- <div class="w-full px-3 mb-3 md:w-1/2 md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="lastname"
                >Last Name
                <span class="ml-1 text-gray-600">(required)</span></label
              ><input
                id="lastname"
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                type="text"
                name="lastname"
                placeholder="Doe"
                required
              />
            </div> -->
          </div>
          <!-- <div class="flex flex-wrap mb-6 -mx-3">
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="email"
                >Email<span class="ml-1 text-gray-600">(required)</span></label
              ><input
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                id="email"
                type="email"
                name="email"
                placeholder="me@mail.com"
                required
              />
            </div>
            <div class="w-full px-3 mb-3 md:w-1/2 md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="phone"
                >Phone
              </label>
              <input
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                id="phone"
                name="phone"
                type="text"
                placeholder="252-555-4444"
              />
            </div>
          </div> -->
          <div class="flex flex-wrap mb-6 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="message"
                >Message
                <span class="ml-1 text-gray-600">(required)</span></label
              >
              <textarea
                id="message"
                name="message"
                rows="8"
                cols="50"
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                placeholder="Message"
                required
              ></textarea>
              <p class="ml-1 text-xs italic text-gray-600"></p>
            </div>
          </div>
          <div class="flex mb-12">
            <button
              class="px-4 py-2 font-bold text-white uppercase bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>




<script>
import UiHeadline from "@/components/ui/UiHeadline";
export default {
  metaInfo: {
    title: "Contact",
  },
  layout: "NewLayout",

  components: {
    UiHeadline,
  },
};
</script>
