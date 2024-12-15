<template>
        <v-container class="d-flex justify-center">
            <!-- Header -->
            <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="pa-6" outlined>
            <div class="text-center mb-4">
                <v-img
            class="mx-auto"
            height="8vh"
            width="16vw"
            src="../assets/logo.png"
            alt="Image"
          />
            </div>  
            <v-row class="text-center">
                <v-col>
                    <h2 class="text-teal bold">
                        التنبيهات</h2>
          <v-divider class="red--text" inset></v-divider>
       
       
        </v-col>
      </v-row>
      <v-form ref="form"  >

      <!-- Notifications List -->
      <v-list>
        <v-list-item v-for="(notification, index) in notifications" :key="index" class="mb-2">
          <v-card class="pa-3">
            <v-row align-item="center">
              <v-col cols="10">
                {{ notification.text }}
              </v-col>
              <v-col cols="2" class="text-right">
                <v-icon :color="notification.iconColor" size="32">
                  {{ notification.icon }}
                </v-icon>
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
       
      
            
          </v-card>
        </v-list-item>
      </v-list>
   
        
    </v-form>
        </v-card>
        </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notifications: [
          {
            text: "تم قبول طلبكم بنجاح برجاء الذهاب للدفع لاكمال باقي الإجراءات و اصدار الاشتراك",
            icon: "mdi-check-circle",
            iconColor: "green",
          },
          {
            text: "تم رفض الطلب اضغط لمعرفة الأسباب",
            icon: "mdi-close-circle",
            iconColor: "red",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .red--text {
    color: teal;
  }
  </style>
  