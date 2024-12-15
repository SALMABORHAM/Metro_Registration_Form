<template  dir="rtl">
  <v-container class="student-info-page" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- Card Container -->
        <v-card outlined class="pa-9">
        
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
        <v-row justify="center" align-content="center" class="mb-4">
          <h1 class="text-center text-teal">
        <v-icon color="teal" class="ms-2">mdi-file-document-outline</v-icon>
        المستندات
        </h1>
        </v-row>
        <!-- <v-card class="pa-9" outlined style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"> -->
            <v-card outlined elevation="3" class="pa-8 mt-8 teal-border">
              <v-form>

               
                <v-text-field
        label="شهادة الميلاد"
        outlined
        prepend-inner-icon="mdi-file-document"
        hint="ارفق صورة شهادة الميلاد حجم الصورة لا يتعدى 2 ميجا"
        persistent-hint
        class="mb-4"
      ></v-text-field>
      <v-text-field
        label="إيصال مرافق"
        outlined
        prepend-inner-icon="mdi-file-document"
        hint="ارفق صورة إيصال المرافق حجم الصورة لا يتعدى 2 ميجا"
        persistent-hint
        class="mb-4"
      ></v-text-field>

      <!-- Parent's ID -->
      <v-text-field
        label="صورة بطاقة ولي الأمر"
        outlined
        prepend-inner-icon="mdi-account"
        hint="ارفق صورة الشخصية حجم الصورة لا يتعدى 2 ميجا"
        persistent-hint
        class="mb-4"
      ></v-text-field>
           
      <v-row justify="center" class="mt-6">
        <v-btn color="teal"  
         block 
          class="md-2 teal-border"
        style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/Data_Review"
        >تأكيد
      </v-btn>
      </v-row>
</v-form>
      <br>
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
.teal-border {
border: 1px solid teal;
border-radius: 8px;
direction: rtl !important;
}

.v-card {
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  direction: rtl !important;

}

.v-btn {
  margin-top: 10px;
  border-radius: 3rem;
}




.v-input--is-rtl .v-label,
.v-input--is-rtl input {
text-align: right !important;
direction: rtl !important;
}
</style>
