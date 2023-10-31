<template>
  <div class="bread-crumbs">
    <span class="bread-crumb" style="margin-right: 10px; color: #111">
    Browse: 
    </span>
    <span v-for="(crumb, index) in bread" :key="crumb.path + '-' + index">
      <router-link
          v-if="index < 4 "
        :to="crumb.path"
        :class="
          crumb.path === '' ? 'bread-crumb bread-crumb-nolink' : 'bread-crumb'
        "
        >{{ crumb.title }}</router-link
      >
      <span v-if="index < 3" class="bread-crumb-separator">
        /
      </span>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    bread() {
      const parts = this.$page.path.split("/");

      // Bascially if there's a trailing slash then get rid of the blank
      if (!parts[parts.length - 1].length) {
        parts.pop();
      }

      let link = "";
      // Loop through the crumbs
      const crumbs = parts.map((slug) => {
        link += slug;
        const page = this.$site.pages.find(
          (el) => el.path === link || el.path === link + "/"
        );
        link += "/";
        // if a page is found
        if (page) {
          return {
            path: page.path,
            title: this.titleCase( page.title ),
          };
        } else {
          return {
            path: "",
            title: this.titleCase( slug ),
          };
        }
      });

      return crumbs;
    },
  },
  methods: {
    titleCase: function (str) {
      if( typeof str == 'undefined' ) return str; 
      return str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
  },
};
</script>

<style lang="stylus" scoped>
.bread-crumbs {
  .bread-crumb {
      color: #111;
    font-size: 12px

    &:hover {
      color: $accentColor;
    }

    &:last-child {
      color: #7856ff;
    
    }
  }

  .bread-crumb-separator {
    color: #ccc;
    width: 30px;
    display: inline-block;
    text-align: center
  }

  .bread-crumb-nolink:hover {
    cursor: default;
    text-decoration: none;
  }
}
</style>