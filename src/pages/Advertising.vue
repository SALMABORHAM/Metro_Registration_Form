
<template dir="rtl">
    <v-container fluid class="pa-0 ma-0">
        <v-row class="pa-0 ma-0">
          <v-col class="pa-0 ma-0">
            
            <v-img 
             class="mx-auto"  
            :class="$vuetify.display.mobile ? 'w-25' :''" 
              src="../assets/logo.png"
              alt="Image"
              height="auto"
              max-width="10vw"
              />

              <v-sheet class="d-flex flex-column justify-center align-center" height="100px" elevation="2" color="black">
                <h1 class="gradient-text text-center">مساحة اعلانية </h1>
               </v-sheet>
               </v-col>
               </v-row>
            <br>
            <v-container class="d-flex justify-center height=">
                <v-card elevation="5" class="pa-15 ma-auto custom-card">

        <h2 class="text-center header-text">إصدار اشتراك جديد</h2>

        <p class="text-center text-h5">
          يمكنك الآن إصدار اشتراك جديد<br />
          عن طريق 
          <br>
          الهاتف المحمول واستلامه في محطه المترو
        </p>
        <br>
        <v-btn 
        color="teal" 
        class="white--text  custom-btn" 
        block 
        to="/Student_Data"

        >طلب جديد</v-btn>
    </v-card>
    </v-container>


    <v-bottom-navigation>
      

      <v-btn href="#" icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
      
      <v-btn href="/Alerts" icon>
      <v-icon>mdi-bell</v-icon>
      </v-btn>
     

      <v-btn href="/Profile" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn href="/Request_Page" icon>
        <v-icon>mdi-note</v-icon>
      </v-btn>
      <v-btn href="/Advertising" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
         
        </v-container>
  </template>
  
  
  
<style scoped>
/* Full Height and Width Utility */
.v-form {
  max-width: 500px;
  margin: 0 auto;
}

.v-input--is-rtl .v-label,
.v-input--is-rtl input {
  text-align: right !important;
  direction: rtl !important;
}

/* Gradient Text */
.gradient-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, white, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Button Customization */
.custom-btn {
  font-size: 25px;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.3s ease;
  
}

.custom-btn:hover {
  background-color: teal;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
.custom-teal {
  color: teal; /* Custom bright red color */
}

.custom-btn:active {
  background-color: teal;
}

/* Card Styles */
.custom-card {
  border-radius: 35px;
  width: 900px;
  height: 500px;
}

/* Header Text */
.header-text {
  font-size: 2rem;
  font-weight: bold;
  font-family: "Neo Sans Arabic", sans-serif;
  color: teal;
  line-height: 100px;
}

/* Responsive Image */
.v-img {
  max-width: 10vw;
}

/* Bottom Navigation */
.v-bottom-navigation {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>



<script setup lang="ts">
import { ref } from 'vue';

const menu = ref(false); // Initialize the reactive menu state
</script>

