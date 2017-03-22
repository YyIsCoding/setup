import Vue from 'vue';

console.log('...');
const vm = new Vue({
	ele: '#app',
	template: '<p>{{message}}</P>',
	data: {
		message: 'hello vue'
	}
})