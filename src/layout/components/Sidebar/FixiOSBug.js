export default {
  computed: {
    device() {
      console.log(this.$store.state.app.device)//访客管理  访客预约
      return this.$store.state.app.device
    }
  },
  mounted() {
    this.fixBugIniOS()
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = this.$refs.subMenu
      console.log(this.$refs.subMenu)//undefined
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = (e) => {
          if (this.device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    }
  }
}
