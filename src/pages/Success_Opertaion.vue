<template  dir="rtl">
    <v-container class="d-flex justify-center">

    <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-9" outlined>
        
        <!-- Logo -->
        <div class="text-center mb-4">
            <v-img
        class="mx-auto"
        height="15vh"
        width="15vw"
        src="../assets/logo.png"
        alt="Image"
      />
        </div>

        <!-- Page Title -->
        <v-row class="text-center">
      <v-col>
        <h2 class="text-teal bold">
          <v-icon color="green" class="mr-2">mdi-check-circle</v-icon>
          عملية ناجحة
        </h2>
      </v-col>
    </v-row>
        <v-card class="pa-9 mt-6" outlined style="outline: 2px ridge rgba(211, 211, 211, .6); border-radius: 2rem;">
                        
                <!-- <v-card outlined elevation="1" class="pa-4 mt-6 teal-border"> -->
      <p class="text-center text-bold text-body">
      <br>  تم إرسال البيانات بنجاح و في   <br> 
        انتظار موافقة جهة الدراسة <br />
        سوف يتم إرسال رسالة نصيه   <br> 
        بحالة الطلب و دفع قيمة الاشتراك  <br> 
      </p>
      <v-row justify="center" class="mt-2">
        <v-btn 
        color="teal"
        large dark  block class="login-link"
        style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/"
        
        >              الرجوع إلى الصفحة الرئيسية
      </v-btn>

        <!-- <v-btn   block  class="d-flex align-center"
        style="outline: 2px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/Request_Page" >طلباتي </v-btn>
         -->
      </v-row>
      <!-- <v-row justify="center" class="mt-6">
        <v-btn color="teal"large  dark  class="d-flex align-center"
        style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/"
        >        الرجوع إلى الصفحة الرئيسية
    </v-btn>
      </v-row> -->
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
data() {
    return {

};
},
};
</script>

<style scoped>

.teal-border {
border: 1px solid teal;
border-radius: 8px;
direction: rtl !important;
}
.student-info-page {
background-color: #f5f5f5;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
direction: rtl !important;

}
.text-box {
  display: block; /* Ensures it takes up the full width of the container */
  width: 100%; /* Spans the full width */
  text-align: center; /* Centers the text */
}

.text-bold {
  font-weight: bold; /* Makes the text bold */
  font-size: 1.2rem; /* Optionally adjust the font size */
}

.headline {
font-weight: bold;
font-size: 24px;
}
.v-btn {
margin-top: 10px;
}
.gradient-btn:hover {
  background: linear-gradient(to right, #006666, #003366);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
.gradient-btn {
  background: linear-gradient(to right, #008080, #004080);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 48px;
  transition: all 0.3s ease;
}

.v-card {
border-radius: 20px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
direction: rtl !important;

}
.v-input--is-rtl .v-label,
.v-input--is-rtl input {
text-align: right !important;
direction: rtl !important;
}
</style>
