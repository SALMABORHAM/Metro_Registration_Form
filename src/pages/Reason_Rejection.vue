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
        <h2 class="text-center text-teal"> اسباب الرفض
        </h2>
        <v-divider class="red--text" ></v-divider>

        <br>
        <!-- <v-card class="pa-9" outlined style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"> -->
            <v-card outlined elevation="7" class="pa-8 mt-8">

            <br>
                       
        <v-form ref="form"  >
<h4>
  1-     اسم الطالب غير صحيح 
<br>
  2-   المستندات المرفوعة غير صحيحة 
<br>
      (بطاقه الرقم القومي)  
</h4>


           </v-form>

       

        


    
         


         
        <!-- </v-form> -->
        </v-card>
      </v-card>
    </v-col>
  </v-row>

  <v-bottom-navigation>
  <v-btn href="/" icon>
    <v-icon>mdi-home</v-icon>
  </v-btn>

  <v-btn href="/Request_Page" icon>
    <v-icon>mdi-note</v-icon>
  </v-btn>
  <v-btn href="/Student_Data" icon>
    <v-icon>mdi-account</v-icon>
  </v-btn>
  <v-btn href="/Alerts" icon>
  <v-icon>mdi-bell</v-icon>
  </v-btn>
  <v-btn href="#" icon>
    <v-icon>mdi-dots-horizontal</v-icon>
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
.v-input--is-rtl .v-label,
.v-input--is-rtl input {
text-align: right !important;
direction: rtl !important;
}
</style>
