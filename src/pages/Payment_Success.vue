<template  dir="rtl">
  <v-container class="fill-height" fluid>

    <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-6" outlined>
        
        <!-- Logo -->
        <div class="text-center mb-4">
            <v-img
        class="mx-auto"
        height="8vh"
        width="16vw"
        src="../assets/logo.png"
        alt="Image"
      />
      <v-card-title class="text-center font-bold teal--text custom-style">
        ✔️نجاح 
      </v-card-title>
        </div>
        

        <!-- Page Title -->
            <v-card outlined elevation="9" class="pa-8 mt-8">
<v-card-text class="text-center font-bold my-custom-style">
  <p>تم الدفع بنجاح و جاري <br>استخراج الاشتراك</p>
</v-card-text>
    
         
<v-row justify="center" class="mt-6">
        <v-btn color="teal"   block  class="md-2" 
        style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/"
        > الرجوع إلى الصفحة الرئيسية </v-btn>
      </v-row>
      <br>

                 </v-card>
      </v-card>
    </v-col>
  </v-row>


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

<script lang="ts">

export default {
  methods: {
    goToHomePage() {
      // Logic to navigate to the home page
      this.$router.push({ name: '/' });
    },
  },
};
</script>



<style scoped>
.fill-height {
  height: 100%;
}
.teal-border {
border: 1px solid teal;
border-radius: 8px;
direction: rtl !important;
}



.headline {
font-weight: bold;
font-size: 24px;
}
.v-btn {
margin-top: 10px;
}
.my-custom-style {
  display: flex;
  size:22px;
  justify-content: center;
  align-items: center;
  text-align: center; /* Ensures text alignment */
  font-family: 'Neo Sans Arabic', sans-serif; /* Optional: your Arabic font */
}

.custom-style {

   display: flex;
  size:22px;
  color: teal;;
  justify-content: center;
  align-items: center;
  text-align: center; /* Ensures text alignment */
  font-weight: bold;
  font-family: 'Neo Sans Arabic', sans-serif; /* Optional: your Arabic font */
}
.v-card {
border-radius: 20px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
direction: rtl !important;

}
.centered-teal {
    text-align: center;
    color: teal;
    font-family: 'Neo Sans Arabic', sans-serif; /* Ensure this matches your Arabic font choice */
}

.v-input--is-rtl .v-label,
.v-input--is-rtl input {
text-align: right !important;
direction: rtl !important;
}
</style>
