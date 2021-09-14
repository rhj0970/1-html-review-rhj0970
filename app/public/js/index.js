const Offer = {           /* const = This configuration object is not going to change */ 
    data() {   
      return {   
        "offers": [ {
          "id":1,
          "name": "John",
          "salary":70000,
          "bonus": 1000,
          "company": "EY",
          "offerDate": "2021-09-08"

      },
      {
          "id":2,
          "name": "Kevin",
          "salary":120000,
          "bonus": 5000,
          "company": "Deloitte",
          "offerDate": "2021-09-10"

      } ]
      }
    }
  }
  
  Vue.createApp(Offer).mount('#offerApp')     /* Mount command */ 

