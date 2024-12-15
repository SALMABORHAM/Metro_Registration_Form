<template  dir="rtl">
      <v-container class="d-flex justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-9" outlined>

            
            <!-- Logo -->
            <div class="text-center mb-4">
                <v-img
            class="mx-auto"
            height="20vh"
            width="20vw"
            src="../assets/logo.png"
            alt="Image"
          />
            </div>
  
            <!-- Page Title -->
            <h1 class="text-center text-teal"> بيانات الاشتراك
            </h1>
            <br>
            <!-- <v-card class="pa-9" outlined style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"> -->
                <v-card outlined elevation="3" class="pa-8 mt-8">

                <h2 class="text-center text-lightgray mb-2"> مسار الاشتراك
                </h2>
                <br>
                            <!-- Form -->
            <!-- <v-form ref="form"  dir="rtl"> -->

                <v-select
              v-model="formData.governorate"
              :items="governorates"
              label=""
              class="mb-2"
              outlined>
        </v-select>

            <v-select
            dense
            class="mb-4"
              v-model="formData.ministry"
              :items="ministries"
              label=""
              outlined
            ></v-select>

              <!-- Buttons -->
              <v-row justify="space-evenly">

                <v-btn  
                class="mr-2 teal-border" 
                 outlined  
                 color="teal"
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
                to="/Document_Page">
                تأكيد
                </v-btn>
                <v-btn 
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
                class="teal-border"
                elevation="1"
                to="/School_Data"
                >
                  رجوع
                </v-btn>
                <v-btn 
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
                class="teal-border"
                outlined
                elevation="1"
                 to="/"
                >
                إلغاء
            </v-btn>
              </v-row>
            <!-- </v-form> -->
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

.teal-border {
  border: 1px solid teal;
  border-radius: 8px;
  direction: rtl !important;
}
.v-btn {
  margin-top: 10px;
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

  .student-info-page {
    background-color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl !important;
  }
  
.v-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
}
  .headline {
  font-weight: bold;
  font-size: 24px;
  }
  </style>
  