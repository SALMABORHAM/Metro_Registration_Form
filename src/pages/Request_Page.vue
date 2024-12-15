
      <template  dir="rtl">
        <v-container class="d-flex justify-center">
    
        <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="pa-6" outlined>
            
            <!-- Logo -->
            <div class="text-center mb-4">
                <v-img
            class="mx-auto"
            height="12vh"
            width="12vw"
            src="../assets/logo.png"
            alt="Image"
          />
            </div>
    
            <!-- Page Title -->
            <v-row class="text-center">
          <v-col>
            <h2 class="text-teal bold">
طلباتي            </h2>
<v-divider class="red--text" ></v-divider>


          </v-col>
        </v-row>
        <v-form ref="form" >

        <v-list>
        <v-list-item v-for="(order, index) in orders" :key="index" class="mb-2">
          <v-card class="pa-3">
            <v-row>
              <v-col cols="6" class="text-right font-weight-bold">
                رقم الطلب: {{ order.id }}
              </v-col>
              <v-col cols="6" class="text-left" :class="order.statusColor">
                حالة الطلب: {{ order.status }}
              </v-col>
            </v-row>

            
          </v-card>
        </v-list-item>
      </v-list>
   

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
       
     
        
    </v-form>
        </v-card>
        </v-col>
        </v-row>
  
      <!-- Orders List -->
   
    </v-container>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        orders: [
          { id: 1, status: "تحت المراجعة", statusColor: "" },
          { id: 2, status: "تم التسليم", statusColor: "green--text" },
          { id: 3, status: "تم الرفض", statusColor: "red--text" },
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
  