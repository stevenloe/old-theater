<template>
  <div>
    <client-only>
      <NavBar />
    </client-only>

    <div
      class="container md:mx-auto max-w-3xl pl-8 pr-8 md:pl-0 md:pr-0 pt-16 md:pt-24"
    >
      <h1 class="text-3xl font-semibold">Contact Us</h1>

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

      <form name="contact-old-theater" method="POST" data-netlify="true">

        <p class="hidden">
          <label
            >Don’t fill out this field if you are human
            <input class="form-field" name="bot-field"
          /></label>
        </p>
<!-- 
        <div class="block relative w-full md:w-5/12 mb-64">
          <select
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none"
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
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 bg-gray-200 border border-gray-600 rounded-r"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div> -->

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name <span class="text-gray-600 ml-1">(required)</span>
            </label>
            <input
              class="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-900 focus:outline-none"
              id="first-name"
              type="text"
              placeholder="Jane"
              required
            />
            <p class="text-red-500 text-xs italic"></p>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name <span class="text-gray-600 ml-1">(required)</span>
            </label>
            <input
              class="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-900 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Email <span class="text-gray-600 ml-1">(required)</span>
            </label>
            <input
              class="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-900 focus:outline-none"
              id="first-name"
              type="text"
              placeholder="me@mail.com"
              required
            />
            <p class="text-red-500 text-xs italic"></p>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Phone
            </label>
            <input
              class="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-900 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="252-555-4444"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message <span class="text-gray-600 ml-1">(required)</span>
            </label>
            <textarea
              id="message"
              name="w3review"
              rows="8"
              cols="50"
              class="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-900 focus:outline-none"
              placeholder="Message"
              required
            >
            </textarea>
            <p class="text-gray-600 ml-1 text-xs italic"></p>
          </div>
        </div>

        <div class="flex mb-12">
          <button
            class="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
  layout: "default",
};
</script>
