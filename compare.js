for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
      <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
      <option value="${i}">${product[i].title}</option>
    `;
  }
  
  function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
      document.getElementById("img1").src = product[a].image;
      document.getElementById("qs1").innerHTML = product[a].qs;
      document.getElementById("price1").innerHTML = "$" + product[a].price;
      document.getElementById("tprice1").innerHTML = "$" + product[a].totalprice;
      document.getElementById("ocl1").innerHTML = product[a].oncampusliving;
      document.getElementById("ar1").innerHTML = product[a].acceptancerate;
      document.getElementById("ea1").innerHTML = product[a].earlyaction;
      document.getElementById("ed1").innerHTML = product[a].earlydecision;
      document.getElementById("gpa1").innerHTML = product[a].gpa;
      document.getElementById("satm1").innerHTML = product[a].satmath;
      document.getElementById("satebrw1").innerHTML = product[a].sate;
      document.getElementById("rad1").innerHTML = product[a].rad;
      document.getElementById("act1").innerHTML = product[a].act;
      document.getElementById("is1").innerHTML = product[a].is;
      document.getElementById("l1").innerHTML = product[a].location;
      document.getElementById("p1").innerHTML = product[a].p;
    } else {
      document.getElementById("select1").selectedIndex = 0;
      document.getElementById("img1").src = product[0].image;
      document.getElementById("qs1").innerHTML = "";
      document.getElementById("price1").innerHTML = "";
      document.getElementById("tprice1").innerHTML = "";
      document.getElementById("ocl1").innerHTML = "";
      document.getElementById("ar1").innerHTML = "";
      document.getElementById("ea1").innerHTML = "";
      document.getElementById("ed1").innerHTML = "";
      document.getElementById("gpa1").innerHTML = "";
      document.getElementById("satm1").innerHTML = "";
      document.getElementById("rad1").innerHTML = "";
      document.getElementById("act1").innerHTML = "";
      document.getElementById("is1").innerHTML = "";
      document.getElementById("l1").innerHTML = "";
      document.getElementById("p1").innerHTML = "";
    }
  }
  
  function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
      document.getElementById("img2").src = product[a].image;
      document.getElementById("qs2").innerHTML = product[a].qs;
      document.getElementById("price2").innerHTML = "$" + product[a].price;
      document.getElementById("tprice2").innerHTML = "$" + product[a].totalprice;
      document.getElementById("ocl2").innerHTML = product[a].oncampusliving;
      document.getElementById("ar2").innerHTML = product[a].acceptancerate;
      document.getElementById("ea2").innerHTML = product[a].earlyaction;
      document.getElementById("ed2").innerHTML = product[a].earlydecision;
      document.getElementById("gpa2").innerHTML = product[a].gpa;
      document.getElementById("satm2").innerHTML = product[a].satmath;
      document.getElementById("satebrw2").innerHTML = product[a].sate;
      document.getElementById("rad2").innerHTML = product[a].rad;
      document.getElementById("act2").innerHTML = product[a].act;
      document.getElementById("is2").innerHTML = product[a].is;
      document.getElementById("l2").innerHTML = product[a].location;
      document.getElementById("p2").innerHTML = product[a].p;
    } else {
      document.getElementById("select2").selectedIndex = 0;
      document.getElementById("img2").src = product[0].image;
      document.getElementById("qs2").innerHTML = "";
      document.getElementById("price2").innerHTML = "";
      document.getElementById("tprice2").innerHTML = "";
      document.getElementById("ocl2").innerHTML = "";
      document.getElementById("ar2").innerHTML = "";
      document.getElementById("ea2").innerHTML = "";
      document.getElementById("ed2").innerHTML = "";
      document.getElementById("gpa2").innerHTML = "";
      document.getElementById("satm2").innerHTML = "";
      document.getElementById("satebrw2").innerHTML = "";
      document.getElementById("rad2").innerHTML = "";
      document.getElementById("act2").innerHTML = "";
      document.getElementById("is2").innerHTML = "";
      document.getElementById("l2").innerHTML = "";
      document.getElementById("p2").innerHTML = "";
    }
  }
  
  // Function to read URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  
  // On page load, check if there's a 'college' parameter in the URL
  window.onload = function() {
    const collegeId = getUrlParameter('college');
    if (collegeId) {
      item1(collegeId);
      document.getElementById('select1').value = collegeId;
    }
  };
  