<template>
<!-- URL: of page MUST end with a slash. Otherwsise netlify forms do not work. "https://oldtheater.org/volunteer-form/" - Works. "https://oldtheater.org/volunteer-form" - Does not work.-->
  <div class="wave-section">
    <div
      class="z-0 grid grid-cols-1 gap-8 pb-56 pl-8 pr-8 md:pl-12 md:pr-12 wave-content bgColor"
    >
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
        <UiHeadline level="1">Volunteer Form</UiHeadline>
        <article
          class="p-6 mt-6 lg:p-8 "
        >
          <form
            name="volunteer"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success"
          >
            
          <!-- this field must be present, or form will not work -->
          <input value="volunteer" name="form-name" type="hidden" />

            <h2 class="mb-6 text-3xl font-semibold">We Need You!</h2>
            <p class="max-w-3xl mb-8 text-xl">
              As one of our volunteers, you’ll serve as a goodwill ambassador
              for the Old Theater and will have funworking on outstanding events
              and productions. No matter what your experience level, the Old
              Theater has opportunities for you to get involved! Tell us how
              you’d like to participate in a theater-sponsored event by filling
              out this form.
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
            <div class="w-full mb-8">
              <div class="w-full mb-6 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                  for="address"
                >
                  address <span class="ml-1 text-gray-600"> (required) </span>
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 rounded appearance-none borderborder-gray-800 focus:bg-white focus:border-gray-900 focus:outline-none"
                  id="address"
                  type="text"
                  name="address"
                  placeholder="123 Broad Street"
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
            <p class="mb-4 text-2xl font-semibold">
              Your Interests (check all that apply):
            </p>
            <div class="mb-8 text-2xl">
              <input
                type="checkbox"
                value="I'm Interested"
                class="mr-2 "
                id="Acting"
                name="Acting"
              />
              <label for="Acting"> Acting </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="Production"
                name="Production"
              />
              <label for="Production"> Production </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="Director"
                name="Director"
              />
              <label for="Director"> Director </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="stage-manager"
                name="stage-manager"
              />
              <label for="stage-manager">
                Stage Manager/Assistant Stage Manager </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="light-board-operator"
                name="light-board-operator"
              />
              <label for="light-board-operator"> Light Board Operator </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="sound-board-operator"
                name="sound-board-operator"
              />
              <label for="sound-board-operator"> Sound Board Operator </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="set-design"
                name="set-design"
              />
              <label for="set-design"> Set Design </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="set-construction"
                name="set-construction"
              />
              <label for="set-construction">
                Set Construction/Strike, Painting </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="Props"
                name="Props"
              />
              <label for="Props" class="zemCheckbox Props"> Props </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="Wardrobe"
                name="Wardrobe"
              />
              <label for="Wardrobe"> Wardrobe </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="Makeup"
                name="Makeup"
              />
              <label for="Makeup"> Makeup </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="Stagehand"
                name="Stagehand"
              />
              <label for="Stagehand"> Stagehand </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="movie-projection"
                name="movie-projection"
              />
              <label for="movie-projection"> Movie Projection </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="ticket-window"
                name="ticket-window"
              />
              <label for="ticket-window"> Ticket Window </label><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="greeter-concession-usher"
                name="greeter-concession-usher"
              />
              <label for="greeter-concession-usher">
                Greeter, Concession Sales, Usher </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="admin-support"
                name="admin-support"
              />
              <label for="admin-support"> Administrative Support </label
              ><br /><input
                type="checkbox"
                value="I'm Interested"
                class="mr-2"
                id="facility-enhancement"
                name="facility-enhancement"
              />
              <label for="facility-enhancement"> Facility Enhancement </label>
            </div>
            <p class="mb-4 text-2xl font-semibold">
              Availability (check all that apply):
            </p>
            <input
              type="checkbox"
              value="I'm Available"
              class="mr-2"
              id="Weekdays"
              name="Weekdays"
            />
            <label for="Weekdays"> Weekdays </label><br /><input
              type="checkbox"
              value="I'm Available"
              class="mr-2"
              id="Weekends"
              name="Weekends"
            />
            <label for="Weekends"> Weekends </label><br /><input
              type="checkbox"
              value="I'm Available"
              class="mr-2"
              id="Mornings"
              name="Mornings"
            />
            <label for="Mornings"> Mornings </label><br /><input
              type="checkbox"
              value="I'm Available"
              class="mr-2"
              id="Afternoons"
              name="Afternoons"
            />
            <label for="Afternoons"> Afternoons </label><br /><input
              type="checkbox"
              value="I'm Available"
              class="mr-2"
              id="Evenings"
              name="Evenings"
            />
            <label for="Evenings"> Evenings </label><br />
            <div class="w-full mt-8">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
                for="comments"
              >
                Comments <span class="ml-1 text-gray-600"> </span> </label
              ><textarea
                id="comments"
                name="comments"
                rows="8"
                cols="50"
                class="block w-full px-4 py-3 text-gray-700 bg-gray-200 border border-gray-800 rounded appearance-none mb-3leading-tight focus:bg-whitefocus:border-gray-900 focus:outline-none"
                placeholder="My comments are..."
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