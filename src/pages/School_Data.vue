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
            <h1 class="text-center text-teal"> بيانات المدرسة </h1>
            <br>
            <v-card class="pa-6" outlined 
            style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;">

            <!-- Form -->
            <v-form ref="form"  dir="rtl">
                <div class="text-subtitle-1 text-medium-emphasis">المحافظة</div>

                <v-select
              v-model="formData.governorate"
              :items="governorates"
              label="المحافظة"
              outlined
              dense
                class="mb-4"
>
        </v-select>
        <div class="text-subtitle-1 text-medium-emphasis">الوزارة</div>

            <v-select
              v-model="formData.ministry"
              :items="ministries"
              label="الوزارة"
              outlined
              dense
                class="mb-4">
              </v-select>

            <div class="text-subtitle-1 text-medium-emphasis">الإدارة التعليمية</div>

            <v-select
              v-model="formData.educationalDepartment"
              :items="educationalDepartments"
              label="الإدارة التعليمية"
              outlined
              dense
            ></v-select>


            <div class="text-subtitle-1 text-medium-emphasis"> السنة الدراسيه</div>

              <v-radio-group v-model="formData.academicYear" class="mb-6" >
              <v-radio label="2023" value="2023"></v-radio>
              <v-radio label="2024" value="2024"></v-radio>
            </v-radio-group>

             
  
  
              <!-- Buttons -->
              <v-row justify="space-evenly">
                <v-btn outlined 
                color="teal"
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"

                to="/Subscription_Data">
                التالي
                </v-btn>

                <v-btn 
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
class="teal-border"
                elevation="1"
                to="/Student_Data"
                >
                  رجوع
                </v-btn>
                <v-btn 
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
class="teal-border"
                elevation="1"
                 to="/"
                >
                إلغاء
            </v-btn>
              </v-row>
            </v-form>
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
      formData: {
        governorate: null,
        ministry: null,
        educationalDepartment: null,
        academicYear: '2023',
      },
      governorates: [
  'القاهرة',
  'الإسكندرية',
  'الجيزة',
  'الدقهلية',
  'البحيرة',
  'المنوفية',
  'الغربية',
  'الشرقية',
  'قنا',
  'أسوان',
  'أسيوط',
  'بني سويف',
  'الفيوم',
  'المنيا',
  'سوهاج',
  'دمياط',
  'السويس',
  'الجيزة',
  'الاقصر',
  'البحر الأحمر',
  'شمال سيناء',
  'جنوب سيناء',
  'الوادى الجديد',
  'مطروح',
  'الإسماعيلية',
  'بورسعيد',
  'الشرقية',
  'كفر الشيخ',
  'الجيزة',
  'المنيا',
  'شمال سيناء',
  'جنوب سيناء'
],
      ministries: ['وزارة التربية و التعليم', 'وزارة التعليم العالي'], // Example ministries
      educationalDepartments: [
  "إدارة الزوية الحضرية",
  "إدارة الجيزة التعليمية",
  "إدارة القاهرة التعليمية",
  "إدارة الإسكندرية التعليمية",
  "إدارة الشرقية التعليمية",
  "إدارة المنوفية التعليمية",
  "إدارة الغربية التعليمية",
  "إدارة الدقهلية التعليمية"
]
    };
  },
  };
  </script>
  
  <style scoped>
  .student-info-page {
    background-color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl !important;

  }
  .headline {
  font-weight: bold;
  font-size: 24px;
}
.v-btn {
  margin-top: 10px;
}
.teal-border {
  border: 2px solid teal;
  border-radius: 8px;
}
.v-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl !important;
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
  