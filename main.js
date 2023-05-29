window.addEventListener("load", function() {
    function changetext(text,elem) {
        var place = document.querySelector("#placetext");
        elem.textContent = place.textContent
        place.textContent = text;
    }
    document.querySelector("#moscow").onclick = function(){
        changetext(this.textContent,this);
      }
    document.querySelector("#krasnodar").onclick = function(){
        changetext(this.textContent,this);
    }
    document.querySelector("#rostov").onclick = function(){
        changetext(this.textContent,this);
    }
    document.querySelector("#kaliningrad").onclick = function(){
        changetext(this.textContent,this);
    }
    document.querySelector("#sochi").onclick = function(){
        changetext(this.textContent,this);
    }
    document.querySelector("#kazan").onclick = function(){
        changetext(this.textContent,this);
    }
    document.querySelector("#novosib").onclick = function(){
        changetext(this.textContent,this);
    }
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
      });
      document.querySelector('[href="#close"]').addEventListener('click',function(){
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
      });
});