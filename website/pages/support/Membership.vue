<template>
  <div class="mx-auto">
    <div
      class="w-full mx-auto md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
      <UiHeadline id="level-1-headline" level="1" @click="shout('h1')"> Join the Old Theater</UiHeadline>
      <article class="p-6 mt-6 bg-white rounded shadow lg:p-8">

        <figure class="mb-6">
          <img
            src="/images/support/my-theater-pic-1100w.jpg"
            alt="Drawing of The Old Theater by Betty Brown"
          />
          <figcaption class="italic">
            The Old Theater
          </figcaption>
        </figure>
        <div
          class="mx-auto mb-8 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
        >
          <p>
            Oriental’s Old Theater first opened its doors as a movie theater in
            1946, and served as a social entertainment center until the late
            50s. It was revitalized and reopened in 1995, providing a venue
            where performing arts can thrive in Pamlico County.
          </p>
          <p>
            The Old Theater is owned and managed by the Old Theater Corporation,
            a registered 501(c)(3) non-profit organization. All memberships and
            donations are tax deductible. Its Board is comprised of Pamlico
            County volunteers whose mission is to ensure that Pamlico County and
            the town of Oriental has a venue for civic and cultural events. The
            ability to achieve this mission depends on the ongoing support and
            participation of individuals, businesses, service organizations,
            grants and volunteers on stage and behind the scenes.
          </p>
          <p>
            Thanks to the generosity of people like YOU, significant
            improvements have been accomplished over the past few years. A
            successful 2021 membership drive will enable us to continue needed
            improvements and the variety of entertainment our community has come
            to enjoy.
          </p>
          <p>
            We need and welcome your financial support and look forward to
            hearing from you. If you are a current member of the Old Theater, we
            thank you again for your generous support and hope we can count on
            it for 2021. If you are a new member for 2021, thank you and
            welcome! We look forward to seeing everyone throughout the coming
            year.
          </p>
          <p>
            To join now, download the <a href ="/pdf/2020_membership_form.pdf" >Old Theater Membership Form</a>
          </p>
          <p>
            For more information send an email to
            <a href="mailto:OldTheater@gmail.com">OldTheater@gmail.com</a>. 
          </p>
          <div class="font-bold">
            Let the show go on!
          </div>

          <span class="ml-4 italic">Izzy Keppner, President </span>
             
             <div class="ml-4 italic">
               
             Andrea Bayard, Membership
            & Volunteer Manager
             </div>
          <p>
            Volunteers are the life blood of our organization. Please consider
            volunteering your time and talents so the Old Theater may continue
            being the “center stage” in Pamlico County. 
            
            <nuxt-link to="/get-involved">Learn more about volunteering</nuxt-link>
          </p>
          
          <client-only>
            <MemberList/>
          </client-only>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
import MemberList from "@/components/MemberList";
export default {

  layout: "NewLayout",
  methods: {
    shout(val) {
      console.log("Shout", val);
    },
  },
  components: {
    UiHeadline,
    MemberList,
  },
};
</script>