window.onload=function(){
	let arr1=localStorage.arr1?localStorage.arr1.split(","):[];
	let arr2=localStorage.arr2?localStorage.arr2.split(","):[];
	let box1=document.querySelectorAll("section .con")[0];
	let box2=document.querySelectorAll("section .con")[1];
	let num1=document.querySelector(".box1 h3 span:nth-of-type(2)");
	let num2=document.querySelector(".box2 h3 span:nth-of-type(2)");

	function update(){
		localStorage.arr1=arr1.join(",");
		box1.innerText="";
		num1.innerText=arr1.length;

		arr1.forEach(function(item,index){
			let main=document.createElement("main");
			let check=document.createElement("input");
			check.classList.add("checkbox");
			check.type="checkbox";
			check.checked="";
			let text=document.createElement("div");
			text.classList.add("text");
			text.innerText=item;
			let del=document.createElement("div");
			del.classList.add("del");

			box1.appendChild(main);
			main.appendChild(check);

			main.appendChild(text);
			main.appendChild(del);
		})
		let cons1=box1.querySelectorAll("main");
		cons1.forEach(function(elements,index){
			let checkbox=elements.querySelector(".checkbox");
			let textbox=elements.querySelector(".text");
			let delbox=elements.querySelector(".del");
			checkbox.onclick=function(){
				arr1.forEach(function(v,i){
					if(v==textbox.innerText){
						arr1.splice(i,1);
						update();
						arr2.unshift(v);
						delet();
					}
				})
			}
			delbox.onclick=function(){
				arr1.forEach(function(v,i){
					if(v==textbox.innerText){
						arr1.splice(i,1);
						update();
					}
				})
			}
			textbox.ondblclick=function(){
				let input1=document.createElement("input");
				let con=textbox.innerText;
				textbox.innerText="";
				input1.value=con;
				textbox.appendChild(input1);
				input1.onkeydown=function(e){
					if(e.keyCode==13 && input1.value!=""){
						arr1[index]=input1.value;
						update();
					}
				}
				input1.onblur=function(){
					if(input1.value!=""){
						arr1[index]=input1.value;
						update();
					}
				}
			}
		})

	}
	function delet(){
		localStorage.arr2=arr2.join(",");
		box2.innerText="";
		num2.innerText=arr2.length;
		arr2.forEach(function(item){
			let main=document.createElement("main");
			let check=document.createElement("input");
			check.classList.add("checkbox");
			check.type="checkbox";
			check.checked="checked";
			let text=document.createElement("div");
			text.classList.add("text");
			text.innerText=item;
			let del=document.createElement("div");
			del.classList.add("del");

			box2.appendChild(main);
			main.appendChild(check);
			main.appendChild(text);
			main.appendChild(del);
		})

		let cons2=box2.querySelectorAll("main");
		cons2.forEach(function(elements,index){
			let checkbox=elements.querySelector(".checkbox");
			let textbox=elements.querySelector(".text");
			let delbox=elements.querySelector(".del");
			checkbox.onclick=function(){
				arr2.forEach(function(v,i){
					if(v==textbox.innerText){
						arr2.splice(i,1);
						delet();
						arr1.unshift(v);
						update();
					}
				})
			}
			delbox.onclick=function(){
				arr2.forEach(function(v,i){
					if(v==textbox.innerText){
						arr2.splice(i,1);
						delet();
					}
				})
			}

			textbox.ondblclick=function(){
				let input1=document.createElement("input");
				let con=textbox.innerText;
				textbox.innerText="";
				input1.value=con;
				// input1.focus();
				textbox.appendChild(input1);
				input1.onkeydown=function(e){
					if(e.keyCode==13 && input1.value!=""){
						arr2[index]=input1.value;
						delet();
					}
				}
				input1.onblur=function(){
					if(input1.value!=""){
						arr2[index]=input1.value;
						delet();
					}
				}
			}
		})
	}


	let input=document.querySelector(".header input");
	input.onkeydown=function(e){
		if (e.keyCode==13 && input.value!=""){
			arr1.unshift(input.value);
			input.value="";
			update();
		}
	}

	update();
	delet();

}