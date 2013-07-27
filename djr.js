TeamsController = function(){DJR.call(this);}; TeamsController.prototype.routes = {};

TeamsController.prototype.routes['index'] = {url: "/teams(.:format)", method: "GET" }; 
TeamsController.prototype.routes['create'] = {url: "/teams(.:format)", method: "POST" }; 
TeamsController.prototype.routes['new'] = {url: "/teams/new(.:format)", method: "GET" }; 
TeamsController.prototype.routes['edit'] = {url: "/teams/:id/edit(.:format)", method: "GET" }; 
TeamsController.prototype.routes['show'] = {url: "/teams/:id(.:format)", method: "GET" }; 
TeamsController.prototype.routes['update'] = {url: "/teams/:id(.:format)", method: "PUT" }; 
TeamsController.prototype.routes['destroy'] = {url: "/teams/:id(.:format)", method: "DELETE" }; 

function DJR(){
	function sucess(){
		alert('oia');
	}
	function error(){
		alert('eita errou');
	}

	for (var action in this.routes){

		this[action] = function(json,sucess, error){
			$.ajax({
				url:this.routes[action].url,
				data: json,
				type:this.routes[action].method,
				sucess: sucess,
				error: error
			});
		}
	}
}