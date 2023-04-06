
     
     function segitiga(){
      const alas = document.getElementById('alas').value;
      const tinggi =document.getElementById('tinggi').value;

      luas = 0.5 * alas * tinggi;
      const output = "L = " +luas;
      document.getElementById("output").textContent = output;
      return false;

     }

     function kelilingsegitiga(){
      const sisiA = parseFloat( document.getElementById('sisiA').value);
      const sisiB = parseFloat( document.getElementById('sisiB').value);
      const sisiC = parseFloat( document.getElementById('sisiC').value);
     

      keliling =  sisiA + sisiB + sisiC;
      const hasil = "K = " + keliling;
      document.getElementById("hasil").textContent = hasil;
      return false;

     }

     function jajargenjang(){
      const alas =( document.getElementById('alas').value);
      const tinggi =( document.getElementById('tinggi').value);

      luasjajar =  alas * tinggi;
      const hasilluas = "L = " + luasjajar;
      document.getElementById("hasilluas").textContent = hasilluas;
      return false;

     }

     function kelilingjajargenjang(){
     
      const panjang =document.getElementById('panjang').value;
      const tinggi = document.getElementById('tinggi').value;

      keliling =  2 * (panjang + tinggi);
      const hasiljajar = "K = " + keliling;
      document.getElementById("hasiljajar").textContent = hasiljajar;
      return false;

     }
     
