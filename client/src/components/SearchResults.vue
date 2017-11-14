<template>
  <div id="search-results">
    <h3>{{title}}</h3>

    <p v-if="!available">No results</p>

    <v-card v-for="result in results">
      <v-card-title>
        <div>
          <h3 class="headline mb-0">Route Number: <strong>{{result.routeNum}}</strong></h3>
          <div>Starting Point: <strong>{{result.routeStart}}</strong></div>
          <div>Ending Point: <strong>{{result.routeEnd}}</strong></div>

          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">More</div>
              <div>Stopping Places (in order): </div>
              <div v-for="(stop, index) in result.routeStops">
                <div style="margin-left: 75px">{{index+1}}. <strong>{{stop}}</strong></div>
              </div>
              <v-card-actions>
                <v-btn
                  flat
                  color="blue"
                  v-on:click="editRoute(result.routeID)"
                >
                  Edit
                </v-btn>

                <v-btn
                  flat
                  color="red"
                  v-on:click="deleteRoute(result.routeID)"
                >
                  Delete
                </v-btn>

              </v-card-actions>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <div>
            <div></div>

          </div>

        </div>
      </v-card-title>
    </v-card>

  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    name: "search-results",
    data(){
      return{
        title: "Search Results",
        results: [],
        available: true
      }
    },
    methods: {
      deleteRoute: (id)=>{
        axios({
          method: "post",
          url: "http://localhost:3000/routes/" + id + "/delete",
          data: {
            routeID: id
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log(res);
          console.log(this);
          this.$router.push("/routes/search");
        }).catch((error)=>{
          console.log(error)
        })
      },
      editRoute: (id)=>{
        axios({
          method: "post",
          url: "http://localhost:3000/routes/" + id + "/edit",
          data: {
            routeID: id
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log(res);
//          console.log(this);
          localStorage.setItem("routeToEdit", JSON.stringify(res.data.msg));
          this.$router.push("/routes/" + id + "/edit");
        }).catch((error)=>{
          console.log(error)
        })
      }
    },
    mounted(){
      var recResults = JSON.parse(localStorage.getItem("searchResults"));

      if((typeof recResults) === "string"){
        this.results = [];
        this.available = false;
      } else{
        this.results = recResults;
        this.available = true;
      }
    }
  }


</script>

<style scoped>

</style>
