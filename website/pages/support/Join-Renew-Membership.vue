<template>
  <div class="mx-auto">
    <div
      class="w-full mx-auto md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
      <UiHeadline  level="1">Membership</UiHeadline>
      

      <article class="p-6 mt-6 bg-white rounded shadow lg:p-8">
        <UiHeadline id="level-1-headline" level="3"
          >Join The Old Theater!</UiHeadline
        >

        <p class="block">
          Aute reprehenderit ipsum est duis laboris ullamco qui. Deserunt ex
          tempor ipsum ad proident eu ipsum. Officia magna eu nisi deserunt
          Lorem sint elit non magna pariatur proident. Excepteur quis tempor
          irure et proident id consectetur. Minim eiusmod quis reprehenderit
          proident velit deserunt Lorem.
        </p>

        <p class="pb-8">
          Nulla deserunt officia ipsum consectetur pariatur nisi labore
          incididunt deserunt minim. In amet id elit or by calling the Old
          Theater at (252) 249 – 0477.
        </p>

        <form
          name="contact-old-theater"
          method="POST"
          data-netlify="true"
          action="success-contact/"
        >
          <div class="mr-4">
            <h2 class="text-3xl font-bold leading-none text-right">
              ${{ amount }}
            </h2>
            <div class="text-sm leading-tight text-right">TOTAL</div>
          </div>
          <h3>Please choose your level of support:</h3>
          <fieldset class="grid grid-cols-1 mb-4 md:grid-cols-2">
            <span class=""
              ><input
                id="element_1_1"
                data-pricedef="15.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="1"
              />
              <label class="ml-2" for="element_1_1">Cameo $30</label>
            </span>
            <span class=""
              ><input
                id="element_1_2"
                data-pricedef="25.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="2"
              />
              <label class="ml-2" for="element_1_2">Stage Manager $50</label>
            </span>
            <span class=""
              ><input
                id="element_1_3"
                data-pricedef="50.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="3"
              />
              <label class="ml-2" for="element_1_3">Playwright $100</label>
            </span>
            <span class=""
              ><input
                id="element_1_4"
                data-pricedef="100.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="4"
              />
              <label class="ml-2" for="element_1_4">Directror $200</label>
            </span>
            <span class=""
              ><input
                id="element_1_5"
                data-pricedef="300.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="5"
              />
              <label class="ml-2" for="element_1_5"
                >Executive Producer $500</label
              >
            </span>
            <span class=""
              ><input
                id="element_1_6"
                data-pricedef="1000.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="6"
              />
              <label class="ml-2" for="element_1_6">Marquee $750</label>
            </span>
            <span class=""
              ><input
                id="element_1_6"
                data-pricedef="1000.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="6"
              />
              <label class="ml-2" for="element_1_6">Tony Award $1000</label>
            </span>

            <span class="flex"
              ><input
                id="element_1_6"
                data-pricedef="1000.00"
                name="element_1"
                class="element radio"
                type="radio"
                value="6"
              />
              <label class="ml-2" for="element_1_6">Other Amount</label>
              <input
                class="w-24 px-1 py-1 ml-4 border border-gray-500 rounded"
                type="text"
                name=""
                id=""
                placeholder="$amount"
              />
            </span>
          </fieldset>

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
            <div class="w-full px-3 mb-6 md: md:mb-0">
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
            <div class="w-full px-3 mb-3 md: md:mb-0">
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
            <div class="w-full px-3 mb-6 md: md:mb-0">
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
            <div class="w-full px-3 mb-3 md: md:mb-0">
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
            <div class="w-full px-3 mb-3 md: md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                for="grid-last-name"
              >
                Address 1
              </label>
              <input
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder="252-555-4444"
              />
            </div>
            <div class="w-full px-3 mb-3 md: md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                for="grid-last-name"
              >
                Address 2
              </label>
              <input
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder="252-555-4444"
              />
            </div>

            <div class="w-full px-3 mb-3 md: md:mb-0">
              <div>
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  City
                </label>
                <input
                  class="block w-1/3 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                  id="grid-last-name"
                  type="text"
                  placeholder="252-555-4444"
                />
              </div>

              <div>
                <span id="li_2_span_4" class="">
                  <select
                    class="block w-1/3 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                    id="element_2_4"
                    name="element_2_4"
                  >
                    <option value="" selected="selected">Select a State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District of Columbia">
                      District of Columbia
                    </option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                  </select>
                  <label for="element_2_4">State / Province / Region</label>
                </span>
              </div>
              <div>
                <label
                  class="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  Zip
                </label>
                <input
                  class="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none focus:bg-white focus:border-gray-900 focus:outline-none"
                  id="grid-last-name"
                  type="text"
                  placeholder="252-555-4444"
                />
              </div>
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
import UiHeadline from "@/components/ui/UiHeadline";
export default {
  metaInfo: {
    title: "Contact",
  },
  data() {
    return {
      amount: 30.0,
    };
  },
  layout: "NewLayout",
  components: {
    UiHeadline
  }
};
</script>
