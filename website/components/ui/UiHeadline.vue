 <template functional>
  <Component
    :is="props.tag || `h${props.level}`"
    :ref="data.ref"
    
    :class="[
      ...((props.size || props.level) == 1
        ? ['text-3xl sm:text-4xl md:text-5xl xl:text-6xl']
        : []),
      ...((props.size || props.level) == 2
        ? ['text-2xl sm:text-3xl md:text-4xl']
        : []),
      ...((props.size || props.level) == 3
        ? ['text-xl sm:text-2xl md:text-3xl']
        : []),
      ...((props.size || props.level) >= 4
        ? ['text-lg sm:text-xl md:text-2xl']
        : []),
      data.class,
      data.staticClass,
    ]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
    class="font-semibold"
  >
    <slot />
  </Component>
</template>

 <script>
export const UiHeadline = {
  name: "UiHeadline",
  props: {
    level: {
      required: true,
      type: String,
      validator(value) {
        // Here PurgeCSS picks up the selectors and
        // does not remove their styles from the CSS.
        const headlines = ["h1", "h2", "h3", "h4", "h5", "h6"];
        return headlines.includes(`h${value}`);
      },
    },
    size: {
      default: null,
      type: String,
    },
    tag: {
      default: null,
      type: String,
    },
  },
};

export default UiHeadline;
</script>