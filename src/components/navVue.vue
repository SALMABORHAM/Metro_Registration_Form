<template dir="rtl">
  <v-container class="d-flex justify-center fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- Card Container -->
        <v-card class="pa-10">
          <!-- Logo -->
          <div class="text-center mb-8">
            <v-img
              class="mx-auto"
              height="150"
              width="150"
              src="@/assets/logo.png"
              alt="Company Logo"
            />
          </div>

          <!-- Page Title -->
          <div class="text-center mb-8">
            <h1 class="text-teal font-weight-bold">MOBILITY CAIRO</h1>
          </div>

          <!-- Form Section -->
          <v-form ref="form">
            <div class="text-center mb-6">
              <h3 class="text-black">خيارات تسجيل الدخول</h3>
            </div>

            <!-- Buttons -->
            <v-btn
              block
              color="teal"
              class="white--text mb-4"
              :to="{ path: '/Register' }"
              style=" height: 36px; font-size: 20px; font-weight: 500;"
              aria-label="Go to Register Page"
            >
              تسجيل حساب
            </v-btn>

            <v-btn
              block
              color="teal"
              class="white--text"
              :to="{ path: '/Login' }"
              style="height: 36px; font-size: 20px; font-weight: 500;"
              aria-label="Go to Login Page"
            >
              تسجيل الدخول
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: "",
      register: "",
    };
  },
  methods: {
    handleRegister() {
      console.log("Navigating to Register...");
    },
    handleLogin() {
      console.log("Navigating to Login...");
    },
  },
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
.v-btn {
  border-radius: 8px; /* Optional: for rounded buttons */
  letter-spacing: 0.5px; /* Improve text spacing */
  
}


.text-center {
  text-align: center;
}
</style>
