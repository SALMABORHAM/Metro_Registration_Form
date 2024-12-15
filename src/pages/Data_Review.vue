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
  <v-row justify="center" align-content="center" class="mb-4">

        <h1 class="text-center text-teal">
        <v-icon color="teal" class="ms-2">mdi-file-document-outline</v-icon>
مراجعة البيانات      
  </h1>
  </v-row>
        <!-- <v-card class="pa-9" outlined style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"> -->
          <v-card outlined elevation="1" class="pa-6 mt-6 teal-border">

          <!-- <v-card-text> -->
            <div class="user-info">
          <p><strong>الاسم:</strong> جاسم إيهاب سامي اسماعيل</p>
          <p><strong>تاريخ الميلاد:</strong> 24/07/1996</p>
          <p><strong>العنوان:</strong> جاسم إيهاب سامي اسماعيل</p>
          <p><strong>المحافظه:</strong> جاسم إيهاب سامي اسماعيل</p>
          <p><strong>الإدارة التعليمية:</strong> جاسم إيهاب سامي اسماعيل</p>
          <p><strong>رقم الموبايل:</strong> 01123456789</p>
          <p><strong>طالب:</strong> حاويات 1</p>
          <p><strong>خط الاشتراك :</strong> 268072401369</p>
          <p><strong>اسم ولي الامر:</strong> 268072401369</p>
          <p><strong>رقم قومي ولي الأمر  :</strong> 268072401369</p>

                 </div>
        <div class="mt-2">
          <h3 class="text text-teal"> المستندات:</h3>
          <!-- <v-list>
                <v-list-item v-for="(doc, index) in documents" :key="index">
                  <v-list-item-content>
                    <a :href="doc.url" target="_blank">{{ doc.name }}</a>
<p class="light-gray-text">
        شهاده الميلاد: <br />
        ايصال مرافق: <br />
        صوره بطاقة ولي الأمر:
      </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
          -->
          <v-list>
    <DocumentItem
      v-for="(doc, index) in documents"
      :key="index"
      :url="doc.url"
      :name="doc.name"
      :description="doc.description"
    />
  </v-list>
        </div>

        <v-row justify="center" class="mt-2">
        <v-btn color="teal"   block  class="md-2"
        style="outline: 1px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/Success_Opertaion"
        >تأكيد</v-btn>

        <v-btn   block  class="md-2"
        style="outline: 2px ridge rgba(211, 211, 211, .6); border-radius: 3rem;"
        to="/Document_Page" >رجوع</v-btn>
        
      </v-row>
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


<script>
export default {
  data() {
    return {
      userInfo: {
        name: "جابر إيهاب سامي إسماعيل",
        birthDate: "24/07/1996",
        address: "6 شارع التحرير - رمسيس",
        governorate: "القاهرة",
        educationalDepartment: "حوان",
        mobileNumber: "01123456789",
        profession: "مدرس",
        subscriptionLine: "الشهداء - حلوان",
        guardianName: "إيهاب سامي إسماعيل",
        guardianID: "26807240101369",
      },
      documents: [
        { name: "شهادة ميلاد", url: "#" },
        { name: "إيصال مرافق", url: "#" },
        { name: "صورة بطاقة ولي الأمر", url: "#" },
      ],
    };
  },
};
</script>



<style scoped>

.red--text {
  color: teal !important;
}
.light-gray-text {
  color: #9e9e9e; /* Light gray color */
  font-size: 0.9rem; /* Slightly smaller font */
  line-height: 1; /* Adjust line spacing */
}
.action-btn {
  outline: 1px ridge rgba(211, 211, 211, .6);
  border-radius: 3rem;
}

.user-info p {
  font-size: 1rem;
  margin-bottom: 8px;
}
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
border-radius: 3rem;

}


.text-teal {
  color: teal !important;
}

.v-list-item-content a {
  color: teal;
}

.v-list-item-content a:hover {
  text-decoration: underline;
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
