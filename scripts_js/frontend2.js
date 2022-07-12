
   
var objetivosfodase = [];

function findItPlz(){
	var textofodase = document.getElementById("objetivoProposto");
	if (textofodase != null){
      return textofodase.textContent;
	}

}


function AddObjetivo() {
	
	setobjv = document.getElementById("objN").value;
    novoobjev = document.getElementById("classobj");

	var no = document.createElement("p");
    var texto = document.createTextNode(setobjv); 
    no.appendChild(texto);
    no.setAttribute("id","objetivoProposto");
    objetivosfodase.push(no.innerText);
    //callTheAmbulance();
    

    
    no.addEventListener("mouseenter",function(){
    	var theindex;
    	
	
	no.addEventListener("click", function(){
		   callTheAmbulance();
	       var esseindex = this.getAttribute("data-index");
	       console.log(esseindex);       
	       objetivosfodase.splice(esseindex,1);
	       DeixaoArrayCarregar();
	       //console.log(controle);
	       this.remove();
	   });
      
      });
    
    if (novoobjev != null){
    novoobjev.append(no);
    } 
    else {
    	listagem_objv = document.getElementById("listadeobjetivos");
    	cria_div_objv = document.createElement("div");
    	cria_div_objv.setAttribute("id","classobj");
    	cria_div_objv.setAttribute("class","Obj");
    	listagem_objv.append(cria_div_objv);

    	cria_div_objv.append(no);


    };
    	
	document.getElementById("objN").value = " Digite algo aqui...";
   }


function RemoverTelaObjetivos(){
	var tela = document.getElementById("objN");
	var labelobjetivo = document.getElementById("labelu"); 
	var objetivos = document.getElementsByClassName("Obj");
	var botaoobjv = document.getElementById("adicionarobjvs");
    if (tela == null){
        return false;
    }
    else if (labelobjetivo == null) {
        return false;
    }
	else{
    tela.remove();
	objetivos[0].remove();
	labelobjetivo.textContent = "";
    botaoobjv.setAttribute("disabled", true);
}
};

function RemoverTelaObjetivosII(){
	var tela = document.getElementById("objN");
	var labelobjetivo = document.getElementById("labelu"); 
	var objetivos = document.getElementsByClassName("Obj");
	var botaoobjv = document.getElementById("adicionarobjvs");
    if (tela == null){
        return false;
    }
    else if (labelobjetivo == null) {
        return false;
    }
	else{
    
	objetivos[0].remove();
	
    }
    
    var i;
    for (i = 0; i <= objetivosfodase.length; i++){
            objetivosfodase.splice(0, i);
    };

};

function CriarTelaObjetivos(){
	var ogObj = document.getElementById("objN");
	if (ogObj != null){
		return false;
	}else{
	var divObj = document.getElementById("listadeobjetivos"); 
	var telaObj = document.createElement("textarea");
	var botaoobjv = document.getElementById("adicionarobjvs");
	telaObj.setAttribute("id","objN");
	telaObj.setAttribute("name","message");
    telaObj.setAttribute("rows","5");
    telaObj.setAttribute("cols","30");
    var labelu = document.getElementById("labelu");
    var creatediv = document.createElement("div");
    creatediv.setAttribute("id","classobj");
    creatediv.setAttribute("class","Obj");
	
	botaoobjv.removeAttribute("disabled");
	labelu.textContent = "Objetivos: ";
	labelu.appendChild(telaObj);
	divObj.append(creatediv);
    };
};

function ListarObjetivos(){
	    
	    RemoverTelaObjetivos();
        
		var listafinal = document.getElementById("listadeobjetivos");
		var listafinal2 = document.createElement("div");
		listafinal2.setAttribute("id","Listagem");
		listafinal.append(listafinal2);
        
		for (i=0; i < objetivosfodase.length; i++) {
        tagpe = document.createElement("p");
        tagpe.setAttribute("class","objvmarcadosfodase");
        tagpe.innerText = objetivosfodase[i];    
        listafinal2.append(tagpe);	
        }
		

}

function RemoverObjetivos(){
	const tagpe2 = document.getElementById("Listagem");
	if (tagpe2 == null){
	return false;
	}
	else{
		tagpe2.remove();
	}
}

//var zuado = document.getElementById("zuado");
var fodase = document.getElementById("b_teste");
var listadeobjetivospronta = document.getElementById("listadeobjetivospronta");

//zuado.addEventListener("click",RemoverTelaObjetivos);
//zuado.addEventListener("click",RemoverTelaObjetivosII);
//zuado.addEventListener("click",RemoverObjetivos);
fodase.addEventListener("click",CriarTelaObjetivos);
fodase.addEventListener("click",RemoverTelaObjetivosII);
fodase.addEventListener("click",RemoverObjetivos);
listadeobjetivospronta.addEventListener("click", ListarObjetivos);


function callTheAmbulance(){
   var objetivoslistados = document.getElementsByClassName('Obj')[0];
   var i;
 for (i = 0; i < objetivoslistados.children.length; i++) {
  objetivoslistados.children[i].setAttribute('data-index', i);
  };
};
 

function DeixaoArrayCarregar(){
	
	var botao = document.getElementById("listadeobjetivospronta");
	var nomebotao = "Listar Objetivos!";
	botao.setAttribute("disabled", true);
	botao.value = "Aguarde...";
	setTimeout(function(){
          botao.value = nomebotao;
          botao.removeAttribute("disabled");
	}, 3000);

}

