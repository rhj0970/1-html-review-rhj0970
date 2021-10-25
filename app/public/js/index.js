const SomeApp = {
    data() {
      return {
        students: [],
        selectedStudent: null,
        offers: [],
        books: [],
        offerForm: {},
        booksForm: {},
        selectedOffer: null,
        selectedBook: null
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        selectStudent(s) {
            if (s == this.selectedStudent) {
                return;
            }
            this.selectedStudent = s;
            this.offers = [];
            this.fetchOfferData(this.selectedStudent);
        },

        
        selectBooks(s) {
            if (s == this.selectBooks) {
                return;
            }
            this.selectBooks = s;
            this.books = [];
            this.fetchBooksData(this.selectBooks);
        },
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },



        fetchStudentData() {
            fetch('/api/student/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.students = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        

        fetchOfferData(s) {
            console.log("Fetching offer data for ", s);
            fetch('/api/offer/?student=' + s.id)
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.offers = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            .catch( (error) => {
                console.error(error);
            });
        },

        postOffer(evt) {
            console.log ("Test:", this.selectedOffer);
          if (this.selectedOffer) {
              this.postEditOffer(evt);
          } else {
              this.postNewOffer(evt);
          }
        },
        postBook(evt) {
          console.log ("Test:", this.selectedBook);
        if (this.selectedBook) {
            this.postEditOffer(evt);
        } else {
            this.postNewOffer(evt);
        }
      },


        postEditOffer(evt) {
          this.offerForm.id = this.selectedOffer.id;
          this.offerForm.studentId = this.selectedStudent.id;        
          
          console.log("Editing!", this.offerForm);
  
          fetch('api/offer/update.php', {
              method:'POST',
              body: JSON.stringify(this.offerForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.offers = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },
        postBookEdit(evt) {   
          console.log("Editing!", this.booksForm);
  
          fetch('api/books/update.php', {
              method:'POST',
              body: JSON.stringify(this.booksForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;
              
              // reset the form
              this.handleResetEditBook();
            });
        },

        postNewOffer(evt) {
            this.offerForm.studentId = this.selectedStudent.id;        
            console.log("Posting:", this.offerForm);
            // alert("Posting!");
    
            fetch('api/offer/create.php', {
                method:'POST',
                body: JSON.stringify(this.offerForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.offers = json;
                
                // reset the form
                this.offerForm = {};
              });
          },
          postBookOffer(evt) {
                
            console.log("Posting:", this.booksForm);
            // alert("Posting!");

            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.booksForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => {
                this.fetchBooksData();
              })

          },
          

            handleEditOffer(offer) {
                this.selectedOffer = offer;
                this.offerForm = Object.assign({}, this.selectedOffer);
            },
            handleBook(offer) {
              this.selectedBook = offer;
              this.booksForm = Object.assign({}, this.selectedBook);
          },
            handleResetEdit() {
                this.selectedOffer = null;
                this.offerForm = {};
            },
            handleResetEditBook() {
              this.selectedBook = null;
              this.booksForm = {};
          },
            postDeleteOffer(o) {
                if (!confirm("Are you sure you want to delete the offer from "+o.companyName+"?")) {
                    return;
                }
                
                fetch('api/offer/delete.php', {
                    method:'POST',
                    body: JSON.stringify(o),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                  .then( response => response.json() )
                  .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.offers = json;
                    
                    this.resetOfferForm();
                  });
              },
              postDeleteBook(o) {
                if (!confirm("Are you sure you want to delete the offer from "+o.id+"?")) {
                    return;
                }
                
                fetch('api/books/delete.php', {
                    method:'POST',
                    body: JSON.stringify(o),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                  .then( response => response.json() )
                  .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.books = json;
                    
                    this.resetBooksForm();
                  });
              },
              selectOffer(o) {
                this.selectedOffer = o;
                this.offerForm = Object.assign({}, this.selectedOffer);
              },
              resetOfferForm() {
                this.selectedOffer = null;
                this.offerForm = {};
              },
              selectBook(o) {
                this.selectedBook = o;
                this.booksForm = Object.assign({}, this.selectedBook);
              },
              resetBooksForm() {
                this.selectedBook = null;
                this.booksForm = {};
              }
    },


    
    created() {
        this.fetchStudentData();
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#offerApp');