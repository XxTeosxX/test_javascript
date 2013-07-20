Object.defineProperty( Object.prototype, "trying", {
    value: function(hierarquia){
    	var cadeia = hierarquia.split('.');
       	var proximo = this[cadeia[0]];     
    	for (var i=1; i<cadeia.length;i++){
   		
    		try{
    			proximo = proximo[cadeia[i]];
         	}catch(err){
				return proximo;
			}
		}
  
       	return proximo;
}})