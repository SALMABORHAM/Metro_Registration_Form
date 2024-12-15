<template  dir="rtl">
  <v-container class="d-flex justify-center">
  
    <v-row justify="center">
  <v-col cols="12" sm="8" md="6">
    <v-card class="pa-9" outlined>
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
            <h1 class="text-center text-teal"> بيانات الطالب </h1>
            <br>
            <v-card class="pa-6" outlined
             style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;">

            <!-- Form -->
            <v-form ref="form"  dir="rtl">
              <v-text-field
                label="الاسم الرباعي"
                outlined
                dense
                class="mb-4"
              ></v-text-field>
              <div class="text-subtitle-1 text-medium-emphasis"> تاريخ الميلاد</div>

              <v-row dense>
                <v-col cols="4">
                  <v-select
                    label="يوم"
                    :items="days"
                    outlined
                    dense
                    class="mb-4"
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select
                    label="شهر"
                    :items="months"
                    outlined
                    dense
                    class="mb-4"
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select
                    label="سنه"
                    :items="years"
                    outlined
                    dense
                    class="mb-4"
                  ></v-select>
                </v-col>
              </v-row>
  
              <v-text-field
                label="عنوان محل الإقامة"
                outlined
                dense
                class="mb-4"
              ></v-text-field>
              <v-text-field
                label="رقم الموبايل"
                outlined
                dense
                class="mb-4"
              ></v-text-field>
  
              <v-select
                label="طالب مدرسي"
                :items="studentTypes"
                outlined
                dense
                class="mb-6"
                
              ></v-select>
  
              <!-- Buttons -->
              <v-row justify="space-evenly">
                <v-btn color="teal"
                class="rounded-btn"
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
                to="/School_Data"
                >
                  التالي
                </v-btn>
                <v-btn outlined 
                style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
                class="teal-border rounded-btn"
                elevation="1"                
                to="/">
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
      days: Array.from({ length: 31 }, (_, i) => i + 1),
      months: [
        "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
      ],
      years: Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i),
      studentTypes: ["طالب مدرسي", "طالب جامعي"],
    };
  },
};
</script>

  <style scoped>
  .student-info-page {
    background-color: #f5f5f5;
    height: 100vh;
    block-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl !important;
  }
  
  .form-card {
    outline: 1px ridge rgba(211, 211, 211, 0.6);
    border-radius: 3rem;
    direction: rtl !important;
  }
  
  .teal-border {
    border: 1px solid teal;
    border-radius: 8px;
  }
  
  .v-card {
    border-radius: 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    direction: rtl !important;
  }
  
  .v-input--is-rtl .v-label,
  .v-input--is-rtl input {
    text-align: right !important;
    direction: rtl !important;
  }
  
  .v-select .v-label {
    outline: 5px ridge rgba(211, 211, 211, 0.6);
    border-radius: 3rem;
  }
  
  .rounded-btn {
    border-radius: 3rem;
    padding: 10px 20px;
    transition: all 0.3s ease;
  }
  
  .rounded-btn:hover {
    background-color: teal;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .rounded-btn:active {
    background-color: teal;
  }
  </style>
 
  