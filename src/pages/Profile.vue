<template dir="rtl ">
  <v-container class="profile-page d-flex justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-6" outlined>
          <!-- Header Logo -->
          <div class="text-center mb-4 ">
            <v-img 
             class="mx-auto"  
            :class="$vuetify.display.mobile ? 'w-25' :''" 
              src="../assets/logo.png"
              alt="Image"
              height="auto"
              max-width="10vw"
              />
          </div>

          <!-- Page Title -->
          <div class="text-center">
            <h1 class="teal--text mb-4">الملف الشخصي</h1>
          </div>

          <!-- Avatar -->
          <div class="text-center mb-4">
            <v-avatar size="80">
              <v-icon large>mdi-account-circle</v-icon>
            </v-avatar>
          </div>

   


          <!-- Form Inputs -->
          <v-form dir="rtl">
            <v-text-field
              label="الاسم"
              outlined
              v-model="user.name"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              label="البريد الإلكتروني"
              outlined
              v-model="user.email"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              label="الرقم القومي"
              outlined
              v-model="user.nationalId"
              class="mb-2"
            ></v-text-field>

            <v-select
              label="النوع"
              outlined
              :items="genders"
              v-model="user.gender"
              class="mb-2"
            ></v-select>

            <v-text-field
              label="رقم الموبايل"
              outlined
              v-model="user.phoneNumber"
              class="mb-2"
            ></v-text-field>
          </v-form>

          <!-- Buttons -->
          <v-row justify="center" class="mt-4">
            <v-btn
              color="teal"
              block
              class="mb-2"
              outlined
              :style="{ borderRadius: '20px' }"
            >
              <v-icon class="me-2">mdi-trash-can-outline</v-icon>
              حذف الحساب
            </v-btn>

            <v-btn
              color="teal"
              block
              class="save-btn"
              :style="{ borderRadius: '20px' }"
            >
              حفظ التعديلات
            </v-btn>
          </v-row>
        </v-card>

        <!-- Bottom Navigation -->
        <v-bottom-navigation>
      

      <v-btn href="#" icon>
        <v-icon>mdi-cog</v-icon>
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
         
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: " ",
        email: " ",
        nationalId: " ",
        gender: " ",
        phoneNumber: " ",
      },
      genders: ["ذكر", "أنثى"],
    };
  },
};
</script>

<style scoped>
body, html {
  margin: 0; /* Remove any default margin from the page */
  padding: 0; /* Remove any default padding */
  direction: rtl !important;
}

.profile-page {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding-top: 0; /* Ensure there's no padding above the container */
  direction: rtl !important; /* Ensure the page is displayed in RTL */
}

.teal--text {
  color: teal !important;
}

.save-btn {
  background-color: teal;
  color: #fff;
}

.v-btn {
  font-weight: bold;
  margin-top: 10px;
}
.v-container {
  padding-top: 0 !important; /* Remove any padding above the container */
  direction: rtl !important;
}
.v-text-field,
.v-select {
  border-radius: 20px;
}

.v-card {
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  direction: rtl !important;
}
</style>
