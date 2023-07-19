var btn=document.getElementById('btn');
        var audio=document.getElementById('myaudio');
        var tag = false;
        btn.onclick = function(){
            if(tag){
                audio.pause();
                tag = false;
            }else{
                audio.play();
                tag = true;
            }
        }