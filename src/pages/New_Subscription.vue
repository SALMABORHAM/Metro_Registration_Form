<template  dir="rtl">
    <v-container class="d-flex justify-center">

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
        </div>

        <!-- Page Title -->
        <h1 class="text-center text-teal">  
            اصدار اشتراك جديد
        </h1>

        <br>
        <!-- <v-card class="pa-9" outlined style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"> -->
            <v-card outlined elevation="9" class="pa-8 mt-8">

                       
                <h3 class="centered-teal">
  مصاريف اصدار اشتراك جديد
</h3>
<v-card-text>

<v-radio-group v-model="selectedOption" dir="rtl">
          <v-radio 
            label="استلام من أقرب محطة 150 جنيه" 
            value="pickup">
          </v-radio>
          <v-radio 
            label="توصيل إلى المنزل 170 جنيه" 
            value="delivery">
          </v-radio>
        </v-radio-group>

</v-card-text>

       

        


    
         
<v-row justify="center" class="mt-6">
        <v-btn color="teal"   block  class="md-2" 
        style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/Payment"
        >دفع</v-btn>

       
        
      </v-row>

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
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    proceedToPayment() {
      if (this.selectedOption) {
        alert(`تم اختيار: ${this.selectedOption === 'pickup' ? 'استلام من أقرب محطة 150 جنيه' : 'توصيل إلى المنزل 170 جنيه'}`);
        // Add logic to proceed to payment
      } else {
        alert('يرجى اختيار خيار.');
      }
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
