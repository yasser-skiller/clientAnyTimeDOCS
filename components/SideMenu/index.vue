<template>
  <div id="docs-sidebar" class="docs-sidebar" :class="sidebarMode ? 'sidebar-visible' : 'sidebar-hidden'">
		<div class="top-search-box d-lg-none p-3">

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
          <b-list-group-item v-on:click='handelPage()'>{{ option }}</b-list-group-item>
          </NuxtLink>
        </b-list-group>


        </div>

      </b-form-group>

    </div>
    <nav id="docs-nav" class="docs-nav navbar">
      <ul class="section-items list-unstyled nav flex-column pb-3">
        <li class="nav-item section-title"><NuxtLink class="nav-link scrollto" to="/docs-page-Introduction"><span class="theme-icon-holder me-2"><i class="fas fa-map-signs"></i></span>Introduction</NuxtLink></li>
        <!-- <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Introduction#item-1-1">Section Item 1.1</NuxtLink></li> -->
        <!-- <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Introduction#item-1-2">Section Item 1.2</NuxtLink></li> -->
        <!-- <li class="nav-item section-title"><NuxtLink class="nav-link scrollto" to="/docs-page-Installation"><span class="theme-icon-holder me-2"><i class="fas fa-arrow-down"></i></span>Installation</NuxtLink></li> -->
        <!-- <li class="nav-item section-title mt-3"><span class="theme-icon-holder me-2"><i class="fas fa-arrow-down"></i></span>Installation</li> -->
        <!-- <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Installation#item-2-1">Section Item 2.1</NuxtLink></li> -->
        <li class="nav-item section-title mt-3"><span class="theme-icon-holder me-2"><i class="fas fa-tools"></i></span>Admin Dashboard</li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-DashboardPage">Dash Board Page</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-WhatsApp-Connection">WhatsApp Connection</NuxtLink></li>
        <!-- <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Steps">Steps</NuxtLink></li> -->
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Users">Users</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Tickets">Tickets</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Settings">Settings</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Departments">Departments</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Contacts">Contacts</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Quick Answers">Quick Answers</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Reset-Password">ResetPassword</NuxtLink></li>

        <li class="nav-item section-title mt-3"><span class="theme-icon-holder me-2"><i class="fas fa-arrow-down"></i></span>Steps</li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Steps">Step</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Greeting-API-Block">Greeting &amp; API Block</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Edit-Message-Block">Edit Message Block</NuxtLink></li>

        <li class="nav-item section-title mt-3"><span class="theme-icon-holder me-2"><i class="fas fa-box"></i></span>APIs</li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-APIs-SendText-Message">SendText Message</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-APIs-Send-Media-from-link">Send Media from link</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-APIs-Send-Media">Send Media</NuxtLink></li>
        <!-- <li class="nav-item section-title mt-3"><NuxtLink class="nav-link scrollto" to="/#section-4"><span class="theme-icon-holder me-2"><i class="fas fa-cogs"></i></span>Integrations</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-4-1">Section Item 4.1</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-4-2">Section Item 4.2</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-4-3">Section Item 4.3</NuxtLink></li>-->

        <!--<li class="nav-item section-title mt-3"><NuxtLink class="nav-link scrollto" to="/#section-6"><span class="theme-icon-holder me-2"><i class="fas fa-laptop-code"></i></span>Web</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-6-1">Section Item 6.1</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-6-2">Section Item 6.2</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-6-3">Section Item 6.3</NuxtLink></li>
        <li class="nav-item section-title mt-3"><NuxtLink class="nav-link scrollto" to="/#section-7"><span class="theme-icon-holder me-2"><i class="fas fa-tablet-alt"></i></span>Mobile</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-7-1">Section Item 7.1</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-7-2">Section Item 7.2</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/#item-7-3">Section Item 7.3</NuxtLink></li> -->
        <li class="nav-item section-title mt-3"><NuxtLink class="nav-link scrollto" to="/docs-page-Resources#section-8"><span class="theme-icon-holder me-2"><i class="fas fa-book-reader"></i></span>Resources</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Resources#item-8-1">Section Item 8.1</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Resources#item-8-2">Section Item 8.2</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-Resources#item-8-3">Section Item 8.3</NuxtLink></li>
        <li class="nav-item section-title mt-3"><NuxtLink class="nav-link scrollto" to="/docs-page-FAQs"><span class="theme-icon-holder me-2"><i class="fas fa-lightbulb"></i></span>FAQs</NuxtLink></li>
        <!-- <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-FAQs#item-9-1">Section Item 9.1</NuxtLink></li> -->
        <!-- <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-FAQs#item-9-2">Section Item 9.2</NuxtLink></li> -->
        <!-- <li class="nav-item"><NuxtLink class="nav-link scrollto" to="/docs-page-FAQs#item-9-3">Section Item 9.3</NuxtLink></li> -->
      </ul>

    </nav><!--//docs-nav-->
	</div><!--//docs-sidebar-->
</template>



<style scoped>
.listCustomize{
  position: absolute;
  top: 70px;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 300px;
  z-index: 2000000000;
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
      sidebarMode: true,
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
    };
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

   mounted() {
    this.responsiveSidebar();
    this.activeItem();

  },
  methods:{
    responsiveSidebar(){
      if(window.innerWidth >= 989) {
        this.sidebarMode = true ;
      } else {
        this.sidebarMode = false ;
      }
    },

    HideSideAfterClick(){
      const sidebar = document.getElementById('docs-sidebar');
      if (sidebar.classList.contains('sidebar-visible')) {
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');

      } else {
        sidebar.classList.remove('sidebar-hidden');
        sidebar.classList.add('sidebar-visible');
      }
    },

    handelPage(){
      this.Hiden = false ;
      this.HideSideAfterClick();
    },

    activeItem (){
      const sidebarLinks = document.querySelectorAll('#docs-sidebar .scrollto');
      sidebarLinks.forEach(element => {
        element.addEventListener('click',()=>{
          sidebarLinks.forEach(ele => {
           ele.classList.remove('active')
          });
          element.classList.add("active")
          if(window.innerWidth < 989) {
            this.HideSideAfterClick()
          }
        })

      });

    },

  },
}
</script>
