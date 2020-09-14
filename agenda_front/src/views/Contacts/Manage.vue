<template>
  <section class="admin-content ">
    <div class="bg-dark bg-dots m-b-30">
      <div class="container">
        <div class="row p-b-60 p-t-60">

          <div class="col-lg-8 text-center mx-auto text-white p-b-30">
            <div class="m-b-10">
              <div class="avatar avatar-lg ">

                <div class="avatar-title bg-info rounded-circle mdi mdi-account-plus-outline"></div>
              </div>
            </div>
            <h3>Criar novo contato</h3>
          </div>


        </div>
      </div>
    </div>
    <section class="pull-up">
      <div class="container">
        <div class="row ">
          <div class="col-lg-8 mx-auto  mt-2">
            <div class="card py-3 m-b-30">
              <div class="card-body">
                <form>
                  <div class="form-row">
                    <div class="form-group floating-label col-md-12">
                      <input type="text" class="form-control" placeholder="Nome" v-model="contact.name">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group floating-label col-md-4">
                      <input type="text" class="form-control" placeholder="Email"  v-model="contact.email">
                    </div>
                    <div class="form-group floating-label col-md-4">
                      <input type="text" class="form-control" placeholder="Número" v-model="contact.number">
                    </div>
                    <div class="form-group floating-label col-md-4">
                      <input type="date" class="form-control" placeholder="Data de Nascimento"  v-model="contact.infos.basic.birth">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group floating-label col-md-3">
                      <input type="text" class="form-control" placeholder="CEP"  v-model="contact.infos.basic.address.zip">
                    </div>
                    <!--select inputs should have .show-label class by default-->
                    <div class="form-group floating-label show-label col-md-3">
                      <label>Estado</label>
                      <select class="form-control" v-model="contact.infos.basic.address.state">
                        <option selected="">Escolha...</option>
                        <option value="SP">SP</option>
                        <option value="RJ">RJ</option>
                      </select>
                    </div>
                    <div class="form-group floating-label col-md-6">
                      <input type="text" class="form-control" placeholder="Cidade" v-model="contact.infos.basic.address.city">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group floating-label col-md-10">
                      <input type="text" class="form-control" placeholder="Endereço" v-model="contact.infos.basic.address.street">
                    </div>
                    <div class="form-group floating-label col-md-2">
                      <input type="text" class="form-control" placeholder="Nº" v-model="contact.infos.basic.address.number">
                    </div>
                  </div>


                  <button @click.prevent="saveContact()" class="btn btn-success float-right" v-if="creating && !edit">Save</button>
                  <button  class="btn btn-success float-right" v-if="edit && !creating" @click.prevent="updateContact()">Updatde</button>
                  <button  class="btn btn-primary float-right" v-if="!edit && !creating" @click.prevent="editContact()">Edit</button>

                </form>
              </div>
            </div>

            <Comments :contactId="parseInt(this.$route.params.id)" v-if="!creating" />

          </div>

        </div>
      </div>

    </section>
  </section>
</template>

<script>
  import Comments from "../../components/Comments";

  export default {
    components: {
       Comments
    },
    data() {
      return {
        edit:false,
        creating:false,
        contact: {
          name: "",
          number:'',
          email:'',
          infos: {
           basic:{
              birth:'',
              address:{
                street:'',
                number:'',
                zip:'',
                city: '',
                state: ''
              }
           }
          }
        }
      };
    },
    mounted() {
       // console.log('router', typeof parseInt(this.$route.params.id) )
      this.loadContact()
    },
    methods: {
      editContact(){
        this.edit = true
        this.creating = false
      },
     updateContact(){
       this.$store.dispatch("UPDATE_CONTACT", this.contact);
        this.edit = false
      },
      saveContact(){
          this.$store.dispatch("SAVE_CONTACT", this.contact);
          this.creating = false
      },
     async loadContact(){
        if(this.$route.params.id){

          await this.$store.dispatch("LOAD_CONTACTS");

          this.contact = this.$store.getters.contacts.find(contact => {
            return contact.id === parseInt(this.$route.params.id)
          })
        }else{
          console.log('false')
          this.creating = true

        }
      }
    }
  };
</script>

<style>
</style>
