<template dir="rtl">
  <v-container fluid class="pa-0 ma-0 " dir="rtl">
    <!-- Logo and Title -->
    <v-row class="pa-0 ma-0 justify-center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-img
          class="mx-auto"
           height="15vh"
              width="30vw"
          src="@/assets/logo.png"
          alt="Mobility Cairo Logo"
        />
        <h1 class="gradient-text">MOBILITY CAIRO</h1>
        <h2 class="form-title">تسجيل حساب</h2>
      </v-col>
    </v-row>

    <!-- Registration Form -->
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="6">
        <v-form dir="rtl">
          <!-- Name -->
          <v-text-field
            label="الاسم"
            outlined
            class="mb-3"
            aria-label="Name"
          />
          <!-- Email -->
          <v-text-field
            label="البريد الإلكتروني"
            outlined
            class="mb-3"
            type="email"
            aria-label="Email"
          />
          <!-- National ID -->
          <v-text-field
            label="الرقم القومي"
            outlined
            class="mb-3"
            aria-label="National ID"
          />
          <!-- Gender -->
          <v-select
            :items="['أنثى', 'ذكر']"
            label="النوع"
            outlined
            class="mb-3"
            aria-label="Gender"
          />
          <!-- Phone Number -->
          <v-text-field
            label="رقم الموبايل"
            outlined
            class="mb-3"
            type="tel"
            aria-label="Phone Number"
          />
          <!-- Password -->
          <v-text-field
            label="كلمة المرور"
            outlined
            class="mb-3"
            type="password"
            append-icon="mdi-eye-off-outline"
            aria-label="Password"
          />
          <!-- Confirm Password -->
          <v-text-field
            label="تأكيد كلمة المرور"
            outlined
            class="mb-4"
            type="password"
            append-icon="mdi-eye-off-outline"
            aria-label="Confirm Password"
          />

          <!-- Submit Button -->
          <v-btn
            block
            class="gradient-btn"
            :to="{ path: '/Advertising' }"
            aria-label="Submit Registration"
          >
            تسجيل
          </v-btn>

          <!-- Already Registered -->
          <p class="text-center mt-4">
            لديك حساب بالفعل؟
            <router-link to="/login">
              <span class="login-link">تسجيل دخول</span>
            </router-link>
          </p>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
/* Full Page Styling */
html, body, #app, .form-container {
  direction: rtl !important; /* Ensure entire container is RTL */
}
.v-text-field,
.v-select {
  text-align: right; /* Align input text to the right */
}
.v-label {
  text-align: right; /* Align labels correctly */
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  direction: rtl  !important;
}

/* Logo */
.logo {
  max-height: 10vh;
  max-width: 20vw;
}

/* Titles */
.gradient-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #008080, #004080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  direction: rtl  !important;
}

.form-title {
  color: teal;
  margin-bottom: 22px;
  font-size: 1.2rem;
  font-weight: 600;
  direction: rtl !important;
}

/* Buttons */
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

.gradient-btn:hover {
  background: linear-gradient(to right, #006666, #003366);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Login Link */
.login-link {
  color: teal;
  font-weight: bold;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
<script lang="ts">

export default {
  data() {
    return {
      // Add any dynamic data here in the future
    };
  },
};
</script>
