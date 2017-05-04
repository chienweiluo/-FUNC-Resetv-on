 new Vue({
  el: '#app',
  directives:{
  	'myon':{bind(el,binding,vnode){
		const type = binding.arg;
		const fn = binding.value;

		el.addEventListener(type, fn);
		}
	}
  },
  methods:{
  	clicked(){
  		console.log('clicked~')
  	}
  }
})