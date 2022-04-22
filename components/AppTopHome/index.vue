<template>
  <header class="header fixed-top">

      <div class="branding docs-branding">
        <div class="container-fluid position-relative py-2">
            <div class="docs-logo-wrapper">

              <div class="site-logo"><NuxtLink class="navbar-brand" exact="" to="/"><img class="logo-icon me-2" :src="require(`~/assets/images/logo.svg`)" alt="logo"><span class="logo-text">Docs<span class="text-alt"></span></span></NuxtLink></div>
            </div>
          <div class="docs-top-utilities d-flex justify-content-end align-items-center">
            <div class="top-search-box d-none d-lg-flex">

              <b-form-group  label-for="tags-with-dropdown" class="">

                <b-dropdown-form @submit.stop.prevent="() => {}" class="p-0 dropdownParent">
                  <b-form-group
                    label-for="tag-search-input"
                    label-cols-md="auto"
                    class="search-form w-100 mb-0 "
                    label-size="sm"
                    :description="searchDesc"
                  >
                    <b-form-input
                      v-model="search"
                      id="tag-search-input"
                      type="search"
                      size="sm"
                      class="form-control search-input py-3"
                      placeholder="Search the docs..."
                      autocomplete="off"
                    ></b-form-input>
                    <button  class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
                  </b-form-group>
                </b-dropdown-form>
                <div class="listCustomize shadow border rounded">
                  <b-list-group
                  v-for="option in availableOptions"
                  :key="option"
                  class="list-group "
                  :class="Hiden === false ? 'd-none' : 'd-block'"
                >
                  <NuxtLink  :to=" '/docs-page-'+ option">
                  <b-list-group-item >{{ option }}</b-list-group-item>
                  </NuxtLink>
                </b-list-group>


                </div>


              </b-form-group>

	          </div>
            <ul class="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
              <li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt fa-fw"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
  </header>
</template>



<style scoped>
.logo-icon{
  width: 100px;
}


.listCustomize{
  position: absolute;
  top: 55px;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 300px;
}
.list-group-item{
  border: none !important;
}
.list-group-item:hover{
  background-color: #f5f5f5 !important;
    color: #000 !important;
}
</style>

<script>
  export default {

    data() {
      return {
        options: [
          'DashboardPage',
          'Reset-Password',
          'WhatsApp-Connection',
          'Users',
          'Departments',
          'Steps',
          'Settings',
          'Tickets',
          'Contacts',
          'Quick Answers',
          'APIs-SendText-Message',
          'APIs-Send-Media-from-link',
          'APIs-Send-Media',

        ],
        search: '',
        value: [],
        Hiden: true,
      }
    },
    computed: {
      criteria() {
        // Compute the search criteria
        if(this.search.length > 0){
          this.Hiden = true
        }else{
          this.Hiden = false
        }
        return this.search.trim().toLowerCase()
      },
      availableOptions() {
        const criteria = this.criteria
        // Filter out already selected options
        const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
        if (criteria) {
          // Show only options that match criteria
          return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
        }
        // Show all options available
        return options
      },
      searchDesc() {
        if (this.criteria && this.availableOptions.length === 0) {
          return 'There are no values'
        }
        return ''
      }
    },

  }
</script>

