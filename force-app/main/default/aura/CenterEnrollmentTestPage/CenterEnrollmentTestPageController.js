({
	myAction : function(component, event, helper) {
		var action = component.get("c.getContacts");
        action.setCallback(this, function(data) {
        	component.set("v.contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);
	},
    
    createContact : function(cmp) {
    	var action = cmp.get("c.createContact");
        action.setParams({
    		fName:cmp.find("pFirstName").get("v.value"),
    		lName:cmp.find("pLastName").get("v.value"),
    		phone:cmp.find("pPhone").get("v.value"),
    		email:cmp.find("pEmail").get("v.value")
    	});
        action.setCallback(this,function(data){
        	component.set("v.outMessage",data.getReturnValue());
   		});
		$A.enqueueAction(action);
	}
})