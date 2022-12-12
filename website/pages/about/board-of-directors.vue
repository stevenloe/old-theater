<template>
   <div>
    <WaveBoardWidget :info="executiveInfo" :team="executives"/>
    <WaveBoardWidget :info="managerInfo" :team="managers"/>
   </div>

</template>

<script>


import WaveBoardWidget from "@/components/WaveBoardWidget";
import { sortBoardMembers } from "@/utils/sort.js";
export default {
  async asyncData({ $content, params }) {
    const [executives, managers] = await Promise.all(
      [
        $content("data/board/executive-officers", params.slug).fetch(),
        $content("data/board/department-managers", params.slug).fetch(),
      ]
    );

   let sortedExecutives = sortBoardMembers(executives.team);
   let sortedManagers = sortBoardMembers(managers.team);

    return {
      executives: sortedExecutives,
      managers: sortedManagers
    };
  },
  data() {
    return {
      executiveInfo: {
			title: "Meet Our Board",
			subhead: "Executive Officers",
			bgcolor: "677949"
		},
    managerInfo: {
			title: "",
			subhead: "Department Managers",
			bgcolor: "62506D"
		}

    }
  },
  
  layout: "NewLayout",
  components: {
    WaveBoardWidget
  }
};
</script>