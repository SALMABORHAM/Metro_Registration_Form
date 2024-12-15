<template>
    <v-container fluid class="pa-0 ma-0">
      <v-row class="pa-0 ma-0">
        <v-col class="pa-0 ma-0">
          <v-img
            class="mx-auto"
            height="30vh"
            width="30vw"
            src="../assets/logo.png"
            alt="Image"
            
          />
          <h1 class="text-center mb-5 text-teal" style="color: teal;">تسجيل الدخول</h1>
        
          <div class="form-container">

           <v-form dir="rtl">
            <v-text-field
           label="الرقم القومي"
           outlined
           class="mb-1"

           ></v-text-field>
        <v-text-field
        label="كلمة المرور"
        outlined
        class="mb-1"
        type="password"
        append-icon="mdi-eye-off-outline"
      ></v-text-field>


       <div style="display: flex; justify-content: flex-end;">
     <span class="red--text font-weight-bold"  style="color: teal; direction: rtl;">نسيت كلمه المرور؟</span>
       </div>

<br>
      <v-btn
     block
     color="teal"
     class="white--text py-6 mb-6 pa-4"
     style="font-size: 20px; 
     font-weight: bold;
     border-radius: 12px;
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"  
     to="/Advertising"
     >
  دخول
</v-btn>

<p class="text-center" style="color: gray;">
  لا تمتلك حساب؟
  <router-link to="/Register">
  <span class="--text font-weight-bold" style="color: teal;">تسجيل جديد</span>
</router-link>
</p>
        </v-form>
        </div>
        </v-col>
      </v-row>

  </v-container>
  </template>


<script  lang="ts">
export default {
  name: 'Login',
  // your component logic here
}
</script>

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
.form-container { 
    justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
  width: 100vw;
  background-color: #f5f5f5; /* Optional background color */
  padding: 20px; /* Optional padding for spacing */
  direction: rtl; /* RTL for inputs and dropdowns */

}

/* Gradient Text */
.gradient-text {
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(to right, green, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Gradient Button */
.gradient-btn {
  background: linear-gradient(to right, green, blue);
  color: white;
  font-weight: bold;
  border-radius: 8px;
}

.gradient-btn:hover {
  opacity: 0.9;
}
</style>