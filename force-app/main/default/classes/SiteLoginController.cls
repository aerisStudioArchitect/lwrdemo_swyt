/**
 * An apex page controller that exposes the site login functionality
 */
global with sharing class SiteLoginController {
    global String username {get; set;}
    global String password {get; set;}

    global PageReference login() {
        String startUrl = System.currentPageReference().getParameters().get('startURL');
        String crnParam = System.currentPageReference().getParameters().get('crn');
        System.debug(crnParam);
        return Site.login(username, password, startUrl);
    }
    
   	global SiteLoginController () {}
}