
new Vue({
   el: '.form',
   data: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z]{2,20}$/,
                inputClass: '',
                progressBar: 0
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,12}$/,
                inputClass: '',
                progressBar: 0
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+[0]/,
                inputClass: '',
                progressBar: 0
            }
        ],
       controls: [],
       form: false
   },
    beforeMount(){
       for(let i = 0; i < this.info.length; i++){
           this.controls.push({
               error: true,
               activated: false
           })
       }
    },
    methods: {
       onInput(index, value){
           let data = this.info[index];
           let control = this.controls[index];

           data.value = value;
           control.error = !data.pattern.test(value);
           control.activated = true;
       }
    },
    computed: {
       done(){
           let done = 0;
           for(let i = 0; i < this.controls.length; i++){
               if(!this.controls[i].error){
                   done++;
               }
           }
           return done;
       },
        progressWidth(){
           return{
               width: (this.done / this.info.length * 100) + '%',
               // backgroundColor: 'red'
           }
        }
    }
});