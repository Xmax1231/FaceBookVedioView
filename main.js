javascript:(function () { 
	/* FaceBook Vedio View */ 
	t=document.body.innerHTML; 
	t1=/hd_src:"(.*?)"/.exec(document.body.innerHTML); 
	if(t1){window.open(t1[1]);return 1;} 
	t2=/sd_src:"(.*?)"/.exec(document.body.innerHTML); 
	if(t2){window.open(t2[1]);return 2;} 
	return 0; 
})();
