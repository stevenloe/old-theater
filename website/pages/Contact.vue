<template>
  <div class="mx-auto">
    <div
      class="w-full mx-auto md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
    <UiHeadline level="1">Contact Us</UiHeadline>
      <article class="p-6 mt-6 bg-white rounded shadow lg:p-8">


      <p class="block">
        Aute reprehenderit ipsum est duis laboris ullamco qui. Deserunt ex
        tempor ipsum ad proident eu ipsum. Officia magna eu nisi deserunt Lorem
        sint elit non magna pariatur proident. Excepteur quis tempor irure et
        proident id consectetur. Minim eiusmod quis reprehenderit proident velit
        deserunt Lorem.
      </p>

      <p class="pb-8">
        Nulla deserunt officia ipsum consectetur pariatur nisi labore incididunt
        deserunt minim. In amet id elit or by calling the Old Theater at (252)
        249 – 0477.
      </p>

      <form name="contact-old-theater" method="POST" data-netlify="true" action="success-contact/">

        <p class="hidden">
          <label
            >Don’t fill out this field if you are human
            <input class="form-field" name="bot-field"
          /></label>
        </p>
<!-- 
        <div class="relative block w-full mb-64 md:w-5/12">
          <select
            class="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none"
            required
          >
            <option value="" selected disabled hidden>
              Select a Recipient
            </option>
            <option value="1">General</option>
            <option value="1">Box Office</option>
            <option value="1">Facilities</option>
            <option value="1">Membership</option>
            <option value="1">Rent the Theater</option>
            <option value="1">Sponsorship</option>
            <option value="1">Treasurer</option>
            <option value="1">Technical Services</option>
            <option value="1">Volunteering</option>
            <option value="1">Website</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 bg-gray-200 border border-gray-600 rounded-r pointer-events-none"
          >
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div> -->

        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-first-name"
            >
              First Name <span class="ml-1 text-gray-600">(required)</span>
            </label>
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
              id="first-name"
              type="text"
              placeholder="Jane"
              required
            />
          </div>
          <div class="w-full px-3 mb-3 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-last-name"
            >
              Last Name <span class="ml-1 text-gray-600">(required)</span>
            </label>
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-first-name"
            >
              Email <span class="ml-1 text-gray-600">(required)</span>
            </label>
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
              id="first-name"
              type="text"
              placeholder="me@mail.com"
              required
            />
          </div>
          <div class="w-full px-3 mb-3 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-last-name"
            >
              Phone
            </label>
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="252-555-4444"
            />
          </div>
        </div>

        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-password"
            >
              Message <span class="ml-1 text-gray-600">(required)</span>
            </label>
            <textarea
              id="message"
              name="w3review"
              rows="8"
              cols="50"
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
              placeholder="Message"
              required
            >
            </textarea>
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
export default {
  metaInfo: {
    title: "Contact",
  },
  layout: "NewLayout",
};
</script>
