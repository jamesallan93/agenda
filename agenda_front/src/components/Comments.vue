<template>
    <div class="card  py-3 m-b-30">
        <div class="card-header">Comentarios
            <span class="float-right">
               <span  v-if="!isCreatingNewComment" @click="writeComment()">
                    <i class="mdi mdi-message-plus"></i>
               </span>
                 <span class="ml-3" v-if="isCreatingNewComment" @click="saveComment()">
                    <i class="mdi mdi-content-save-outline" ></i>
                </span>
                <span class="ml-3" v-if="isCreatingNewComment"  @click="abortComment()">
                    <i class="mdi mdi-cancel" ></i>
                </span>
            </span>
        </div>
        <div class="card-body">
            <div class="p-3" v-if="isCreatingNewComment">
                <textarea  class="form-control" v-model="newComment" rows="3" placeholder="Comment here..."></textarea>
            </div>
                    <div class="list-unstyled">
                        <div v-if="this.$store.getters.user_comments.length === 0">
                            <h4>No comments</h4>
                        </div>
                        <div class="media" v-for="(comment,index) in this.$store.getters.user_comments" :key="comment.id">
                            <div class="avatar mr-3  avatar-sm">
                                <img :src="`https://api.adorable.io/avatars/285/${comment.id}@adorable.io.png`" alt="..." class="avatar-img rounded-circle">
                            </div>
                            <div class="media-body">
                                <h6 class="mt-0 mb-1"> Semiha Yerman <span class="text-muted ml-3 small">2hrs ago</span>
                                    <span class="ml-3" v-if="(comment.user_id === 1 ) && comment.id !== commentId" @click.prevent="editComment(comment.id)">
                                        <i class="mdi mdi-pencil" ></i>
                                    </span>
                                    <span class="ml-3" v-if="comment.user_id === 1 &&  comment.id === commentId && edit" @click.prevent="updateComment(comment)">
                                        <i class="mdi mdi-content-save-outline" ></i>
                                    </span>
                                    <span class="ml-3" v-if="comment.user_id === 1 &&  comment.id === commentId && edit" @click.prevent="cancelEdition(comment.id)">
                                        <i class="mdi mdi-cancel" ></i>
                                    </span>
                                    <span class="ml-3" v-if="(comment.id !== commentId && comment.user_id === 1)" @click="deleteComment(comment.id, index)">
                                        <i class="mdi mdi-trash-can-outline" ></i>
                                    </span>
                                </h6>
                                <p  v-if="comment.id !== commentId">
                                    {{comment.text}}
                                </p>
                                <textarea v-if="(comment.id === commentId) && edit" class="form-control" id="text" v-model="comment.text" rows="10"></textarea>
                            </div>
                        </div>


            </div>
            <!--                <button type="submit" class="btn btn-success btn-cta">Save changes</button>-->

        </div>
    </div>
</template>

<script>
    export default {
        name: "Comments",
        data(){
            return {
                comments:[],
                edit:false,
                isCreatingNewComment:false,
                newComment:"",
                commentId: null,
            }
        },
        props:{
            contactId:{
                type: Number,
                required:true
            }
        },
        mounted(){
            this.loadUserComments()
        },
        methods:{
            loadUserComments(){
               this.$store.dispatch("LOAD_USER_COMMENTS", this.$props.contactId)
            },

         async editComment(id){
               const comment = this.$store.getters.user_comments.find(comment =>{
                   return comment.id === id
               })
               await this.$store.dispatch("EDIT_COMMENT", comment);
               this.edit = true
               this.commentId = comment.id
            },
            cancelEdition(){
                this.edit = false
                this.commentId = 0
                this.$store.dispatch("LOAD_USER_COMMENTS", this.$props.contactId);
            },
            updateComment(comment){
                this.edit = false
                this.commentId = 0
                console.log('update', comment)
                this.$store.dispatch("UPDATE_COMMENT", comment)
            },
            writeComment(){
                this.isCreatingNewComment = true
            },
             saveComment(){
               const comment = {
                   text: this.newComment,
                   user_id: 1,
                   contact_id: this.$props.contactId
               }
               this.$store.dispatch("SAVE_COMMENT", comment)
                this.isCreatingNewComment = false
                this.newComment = ""
            },
            abortComment(){
                this.newComment=""
                this.isCreatingNewComment = false
                this.$store.dispatch("LOAD_USER_COMMENTS", this.$props.contactId);
            },
            deleteComment(id,index){

                this.$store.dispatch("DELETE_COMMENT",{id, index});
            },


        }
    }
</script>

<style scoped>

</style>