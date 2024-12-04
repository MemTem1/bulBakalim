var hak  = document.getElementById("hak");
var durum = document.getElementById("degerlendirme");
var sayi = document.getElementById("sayi");
var verilenHak = 3;
hak.textContent = verilenHak;

sayi.focus();


    
    function gonder(){
        if(sayi.value == " "){
            alert("lütfen boş bırakmayın");
        }
            let uretilenSayi = Math.floor(Math.random() * 10);
        if(sayi.value == uretilenSayi){
            durum.textContent  = ("tebrikler tahminzin doğru");
            sayi.value = " ";
        }
        else{
            verilenHak--;
            durum.textContent  ="tutuğunuz sayı yanlış";
            durum.style.color = "red";
            durum.style.fontWeight = "bolder";
            sayi.value = " ";
            sayi.focus();
            if(verilenHak <= 0){
               var e = confirm("oyun bitti yeniden başlamak istermisin ?");
                verilenHak = 0;
                if(e){
                    verilenHak = 3;
                    durum = "sonuç";
                    sayi.value = " ";
                    sayi.focus();
                }
                else{
                    window.close();
                }
            }
            hak.textContent = verilenHak;        
        }
        
        
    }
function yenidenbasla(){
    verilenHak = 3;
    durum = "sonuç";
    sayi.value = " ";
    hak.textContent = verilenHak;
    sayi.focus();
}