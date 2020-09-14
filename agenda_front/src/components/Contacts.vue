<template>
  <section class="admin-content">
     <div class="bg-dark m-b-30">
          <div class="container">
            <div class="row p-b-60 p-t-60">
              <div class="col-md-8 m-auto text-white p-b-30">
          <h1>Contatos</h1>

        </div>
          <div class="col-md-4 m-auto text-white p-b-30">
            <div class="text-md-right">
                <router-link class="btn btn-success" :to="{path:'manage/contacts'}">
                    <i class="mdi mdi-plus"></i> Adicionar
                </router-link>

            </div>
          </div>
        </div>
        </div>
     </div>

        <div class="container pull-up">
            <div class="row">
                <div class="col-md-12">
                    <div class="card m-b-30">
                        <div class="card-body">
                            <div class="table-responsive">

                                <table class="table table-hover ">
                                    <thead>
                                    <tr>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Number</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(contact,index) in this.$store.getters.contacts" :key="contact.id">
                                        <td>
                                            <div class="avatar avatar-sm "><img :src="`https://api.adorable.io/avatars/285/${contact.name}@adorable.io.png`" class="avatar-img avatar-sm rounded-circle" alt=""></div>
                                        </td>
                                        <td>{{contact.name}}</td>
                                        <td>{{contact.number}}</td>
                                        <td>
                                            <a href="#" @click.prevent="edit(contact.id)" class="btn btn-primary btn-sm">Edit</a>
                                            <a href="#" class="btn btn-danger btn-sm" @click.prevent="deleteContact(contact.id, index)">Delete</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"Contacts",
    mounted(){
         this.$store.dispatch("LOAD_CONTACTS");
    },
    methods:{
        edit(id){
            this.$router.push({path: '/manage/contacts/' + id})
        },
        deleteContact(id, index){
            this.$store.dispatch("DELETE_CONTACT", {id, index});
        }
    }
}
</script>

<style>

</style>