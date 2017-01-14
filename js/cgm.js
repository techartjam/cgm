$(document).ready(function(){

	var random_num = Math.round(Math.random()*3)
	
	var projects = [' character animation', ' iOS Apps', ' websites', ' video games', ' interactions', ' experiences']
    var i = 0 
 
    function infolist(){
        $('#output').text(projects[i])
    }
      
        function rotate(){
            var delay = setInterval(function(){ 
                if(i<=5){
                     
                    $('#output').animate({
                        top: '-2px'
                        , opacity:'0'
                    },{
                        duration : 100
                        , easing : 'swing'
                        ,complete : function(){
                            infolist(); 
                             
                        }
                    })
                    .animate({
                        top: '0px'
                        ,opacity:'1'
                    },{
                        duration : 1000
                        ,easing :'linear'
                        , complete : function(){
 
                            i+=1;
                        }
                         
                    })
                } else{
                    clearInterval(delay)
                }   
            }
                ,2000)
        }
         
        setTimeout(rotate(), 3000)

	// $(function() {
	// 	$('#headline, #intro, #projects, #contact, #links').each(function(i){
	// 		$(this).hide().delay(2000*i).fadeTo( 2000, 1.0 );	
	// 	})
	// })

})