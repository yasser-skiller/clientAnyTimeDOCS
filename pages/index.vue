<template>
  <div>
    <AppTopHome/>
    <div class="page-header theme-bg-dark py-5 text-center position-relative">
	    <div class="theme-bg-shapes-right"></div>
	    <div class="theme-bg-shapes-left"></div>
	    <div class="container">
		    <h1 class="page-heading single-col-max mx-auto">Documentation</h1>
		    <div class="page-intro single-col-max mx-auto">Everything you need to get your software documentation online.</div>
		    <div class="main-search-box pt-3 d-block mx-auto">

          <b-form-group  label-for="tags-with-dropdown" class="list-group">

            <b-dropdown-form @submit.stop.prevent="() => {}" class="p-0 dropdownParent position-relative">
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

            <div
             class="listCustomize shadow rounded"
             :class="Hiden === false ? '' : 'border'"
            >
               <b-list-group
              v-for="option in availableOptions"
              :key="option"
              class="list-group"
              :class="Hiden === false ? 'd-none' : 'd-block'"
            >
              <NuxtLink  :to=" '/docs-page-'+ option">
              <b-list-group-item >{{ option }}</b-list-group-item>
              </NuxtLink>
              </b-list-group>
              <!-- <b-list-group-item v-if="availableOptions.length === 0" class="list-group">
                There are no values
              </b-list-group-item> -->
            </div>


          </b-form-group>


        </div>
	    </div>
    </div><!--//page-header-->
   <div class="page-content">
	    <div class="container">
		    <div class="docs-overview py-5">
			    <div class="row justify-content-center">
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-map-signs"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Introduction</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
							    </div>
							    <NuxtLink class="card-link-mask" to="docs-page-Introduction#section-1"></NuxtLink>
						    </div><!--//card-body-->
					    </div>
				    </div>
				    <!-- <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-arrow-down"></i>
							        </span>
							        <span class="card-title-text">Installation</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
							    </div>
							    <NuxtLink class="card-link-mask" to="docs-page-Installation#section-2"></NuxtLink>
						    </div>
					    </div>
				    </div> -->
            <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-tools"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Admin Dashboard</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
								</div>
							    <NuxtLink class="card-link-mask" to="docs-page-DashboardPage"></NuxtLink>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-box fa-fw"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">APIs</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
								</div>
							    <NuxtLink class="card-link-mask" to="docs-page-APIs-SendText-Message"></NuxtLink>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				    <!--<div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-cogs fa-fw"></i>
							        </span>
							        <span class="card-title-text">Integrations</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
								</div>
							    <a class="card-link-mask" href="docs-page.html#section-4"></a>
						    </div>
					    </div>
				    </div>col-->
				   <!-- <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-laptop-code"></i>
							        </span>
							        <span class="card-title-text">Web</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
								</div>
							    <a class="card-link-mask" href="docs-page.html#section-6"></a>
						    </div>
					    </div>
				    </div>col-->
				    <!-- <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-tablet-alt"></i>
							        </span>
							        <span class="card-title-text">Mobile</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
								</div>
							    <a class="card-link-mask" href="docs-page.html#section-7"></a>
						    </div>
					    </div>
				    </div> -->
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-book-reader"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Resources</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
								</div>
							    <NuxtLink class="card-link-mask" to="docs-page-Resources#section-8"></NuxtLink>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <i class="fas fa-lightbulb"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">FAQs</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
								</div>
							    <NuxtLink class="card-link-mask" to="docs-page-FAQs#section-9"></NuxtLink>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
			    </div><!--//row-->
		    </div><!--//container-->
		</div><!--//container-->
    </div><!--//page-content-->

    <section class="cta-section text-center py-5 theme-bg-dark position-relative">
	    <div class="theme-bg-shapes-right"></div>
	    <div class="theme-bg-shapes-left"></div>
	    <div class="container">
		    <h3 class="mb-2 text-white mb-3">Launch Your Software Project Like A Pro</h3>
		    <div class="section-intro text-white mb-3 single-col-max mx-auto">Want to launch your software project and start getting traction from your target users? Check out our premium ..........! It has everything you need to promote your product.</div>
		    <div class="pt-3 text-center">
			    <a class="btn btn-light" href="#">Go Now !<i class="fas fa-arrow-alt-circle-right ml-2"></i></a>
		    </div>
	    </div>
    </section><!--//cta-section-->
    <AppBottom/>


  </div>
</template>

<style scoped>
.listCustomize{
  width: 80%;
  margin: auto;
  /* position: absolute; */
  /* top: 200px; */
  /* left: 200px ; */
  border-radius: 5px;
  overflow-y: auto;
  max-height: 300px;
  z-index: 1000;
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
import AppTopHome from '@/components/AppTopHome';
import AppBottom from '@/components/AppBottom';

  export default {
    layout:"Home",
    components:{
      AppTopHome,
      AppBottom
    },
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
    methods: {
      onOptionClick({ option, addTag }) {
        addTag(option)
        this.search = ''
      }
    }
  }
</script>

