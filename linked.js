var array_1=[5,15];
var array_2=[10,20];
var array_f=[];
var a=0;
function show() {
    var x= JSON.stringify(document.getElementById("arrayf").value);
    for(i=1;i< x.length-1;i++) {
        if(x[i]!=" ") {
            a*=10;
            b= parseInt(x[i]);
            a=a+b;
        }
        else {
            array_1.push(a);
            a=0;
        }
    }
    array_1.push(a);
    a=0;
}
function create_null(v){
    const g=document.getElementById(v);
    const a= document.createElement("div");
    a.className="Null";
    const b=document.createElement("span");
    const num=document.createTextNode("Null");
    b.appendChild(num);
    a.appendChild(b);
    g.appendChild(a);
}
function create_node11(){
    array_1.splice(0, array_1.length);
    show();
    const g=document.getElementById("linked_list1");
    while (g.firstChild) {
        g.removeChild(g.firstChild);
    }
    let len=array_1.length;
    for(i=0;i<len;i++){
        if(i==0) {
            create_node(array_1[i],"node_whole1","linked_list1",i);
        }
        else {
            create_node(array_1[i],"node_whole","linked_list1",i);
        } 
    }
    create_null("linked_list1");
}
function create_node(v,nc,na,i){
    const g=document.getElementById(na);
    const a= document.createElement("div");
    a.className=nc;
    a.setAttribute("id",na+i);
    const b=document.createElement("div");
    b.className="value";
    const c=document.createElement("p");
    c.setAttribute("id",na+"node_value"+i);
    const num=document.createTextNode(v);
    c.appendChild(num);
    b.appendChild(c);
    a.appendChild(b);
    const d=document.createElement("div");
    d.className="pointer";
    const e=document.createElement("div");
    e.className="dot";
    const f=document.createElement("div");
    f.className="icon_arrow";
    e.appendChild(f);
    d.appendChild(e);
    a.appendChild(d);
    g.appendChild(a);
}
async function Bubble_Sort1() {
    if(array_1.length > 1) {
        for(var i = 0; i < array_1.length; i++){
            await new Promise((resolve) =>
	            setTimeout(() => {
		            resolve();
	            }, 350)
	        );
            for(var j = 0; j < ( array_1.length - i -1 ); j++){
                await new Promise((resolve) =>
	                setTimeout(() => {
		                resolve();
	                }, 350)
	            );
                document.getElementById("linked_list1"+j).style.boxShadow="5px 5px 5px blue";
                document.getElementById("linked_list1"+(j+1)).style.boxShadow="5px 5px 5px blue";
                await new Promise((resolve) =>
	                setTimeout(() => {
		                resolve();
	                }, 350)
	            );
                if(array_1[j] > array_1[j+1]){
                    var temp = array_1[j];
                    array_1[j] =array_1[j + 1];
                    document.getElementById("linked_list1"+j).style.boxShadow="5px 5px 5px red";
                    document.getElementById("linked_list1"+(j+1)).style.boxShadow="5px 5px 5px red";
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 350)
	                );
                    document.getElementById("linked_list1node_value"+j).innerHTML=array_1[j];
                    array_1[j+1] = temp;
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 250)
	                );
                    document.getElementById("linked_list1node_value"+(j+1)).innerHTML=array_1[j+1];
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 250)
	                );
                    document.getElementById("linked_list1"+j).style.boxShadow="5px 5px 5px yellow";
                    document.getElementById("linked_list1"+(j+1)).style.boxShadow="5px 5px 5px yellow";
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 350)
	                );
                }
                document.getElementById("linked_list1"+j).style.boxShadow="";
                document.getElementById("linked_list1"+(j+1)).style.boxShadow="";
            }
            document.getElementById("linked_list1"+j).style.boxShadow="5px 5px 5px green"; //correct
        }
    }
    else{
        document.getElementById("linked_list1"+0).style.boxShadow="5px 5px 5px green";
    }
    await new Promise((resolve) =>
	    setTimeout(() => {
            resolve();
        }, 1000)
    );
    for(var i = 0; i < array_1.length; i++){
        document.getElementById("linked_list1"+i).style.boxShadow="";
    }
}
async function Bubble_Sort2() {
    if(array_2.length > 1) {
        for(var i = 0; i < array_2.length; i++){
            await new Promise((resolve) =>
	            setTimeout(() => {
		            resolve();
	            }, 350)
	        );
            for(var j = 0; j < ( array_2.length - i -1 ); j++){
                await new Promise((resolve) =>
	                setTimeout(() => {
		                resolve();
	                }, 350)
	            );
                document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px blue";
                document.getElementById("linked_list2"+(j+1)).style.boxShadow="5px 5px 5px blue";
                await new Promise((resolve) =>
	                setTimeout(() => {
		                resolve();
	                }, 350)
	            );
                if(array_2[j] > array_2[j+1]){
                    var temp = array_2[j];
                    array_2[j] =array_2[j + 1];
                    document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px red";
                    document.getElementById("linked_list2"+(j+1)).style.boxShadow="5px 5px 5px red";
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 350)
	                );
                    document.getElementById("linked_list2node_value"+j).innerHTML=array_2[j];
                    array_2[j+1] = temp;
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 250)
	                );
                    document.getElementById("linked_list2node_value"+(j+1)).innerHTML=array_2[j+1];
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 250)
	                );
                    document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px yellow";
                    document.getElementById("linked_list2"+(j+1)).style.boxShadow="5px 5px 5px yellow";
                    await new Promise((resolve) =>
	                    setTimeout(() => {
		                    resolve();
	                    }, 350)
	                );
                }
                document.getElementById("linked_list2"+j).style.boxShadow="";
                document.getElementById("linked_list2"+(j+1)).style.boxShadow="";
            }
            document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px green"; //correct
        }
    }
    else{
        document.getElementById("linked_list2"+0).style.boxShadow="5px 5px 5px green";
    }
    await new Promise((resolve) =>
	    setTimeout(() => {
            resolve();
        }, 1000)
    );
    for(var i = 0; i < array_2.length; i++){
        document.getElementById("linked_list2"+i).style.boxShadow="";
    }
}
function show1() {
    const x= JSON.stringify(document.getElementById("arrays").value);
    for(i=1;i< x.length-1;i++) {
        if(x[i]!=" ") {
            a*=10;
            b= parseInt(x[i]);
            a=a+b;
        }
        else {
            array_2.push(a);
            a=0;
        }
    }
    array_2.push(a);
    a=0;
}
function create_node12(){
    array_2.splice(0, array_2.length);
    show1();
    const g=document.getElementById("linked_list2");
    while (g.firstChild) {
        g.removeChild(g.firstChild);
    }
    let len=array_2.length;
    for(i=0;i<len;i++){
        if(i==0) {
            create_node(array_2[i],"node_whole1","linked_list2",i);
        }
        else {
            create_node(array_2[i],"node_whole","linked_list2",i);
            }  
    }
    create_null("linked_list2");
}
async function merge(){
    const res = [];
    const g=document.getElementById("linked_listf");
    while (g.firstChild) {
        g.removeChild(g.firstChild);
    }
    let i = 0;
    let j = 0;
    let k=0;
    document.getElementById("linked_list1"+i).style.boxShadow="5px 5px 5px blue";
    document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px yellow";
    while(i < array_1.length && j < array_2.length){
        if(array_1[i] < array_2[j]){
            await new Promise((resolve) =>
	            setTimeout(() => {
		            resolve();
	            }, 700)
	        );
        document.getElementById("linked_list1"+i).style.boxShadow="5px 5px 5px green";
        res.push(array_1[i]);
        await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
        create_node(array_1[i],"node_whole","linked_listf",k);
        document.getElementById("linked_list1"+i).style.boxShadow="5px 5px 5px orange";
        i++;
        if(i != array_1.length){
            console.log(k);
            await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
            document.getElementById("linked_list1"+i).style.boxShadow="5px 5px 5px blue";
        }
        k++;
        console.log(k);
    }
    else {
        await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
        document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px green";
        await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
        res.push(array_2[j]);
        create_node(array_2[j],"node_whole","linked_listf",k);
        document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px orange";
        j++;
        if(j != array_2.length){
            console.log(k);
            await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
            document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px yellow";
        }
        k++;
        console.log(k);
      }
    };
    while(i < array_1.length){
        await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
        document.getElementById("linked_list1"+i).style.boxShadow="5px 5px 5px green";
        await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
        document.getElementById("linked_list1"+i).style.boxShadow="5px 5px 5px orange";
        create_node(array_1[i],"node_whole","linked_listf",k);
        res.push(array_1[i]);
        i++;
        k++;
    };
    while(j < array_2.length){
        await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
        document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px green";
        await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 700)
	    );
        document.getElementById("linked_list2"+j).style.boxShadow="5px 5px 5px orange";
        create_node(array_2[j],"node_whole","linked_listf",k);
        res.push(array_2[j]);
        j++;
        k++
    };
    create_null("linked_listf");
    await new Promise((resolve) =>
	        setTimeout(() => {
		        resolve();
	        }, 1000)
	    );
    array_f=res;
    console.log(res);
    console.log(array_f);
};
function random_ll1(){
    array_1.splice(0, array_1.length);
    const g=document.getElementById("linked_list1");
    while (g.firstChild) {
        g.removeChild(g.firstChild);
    }
    for(i=0;i<5;i++){
        if(i==0){
            const value = Math.floor(Math.random() * 100) + 1;
            array_1.push(value);
            create_node(value,"node_whole1","linked_list1",i);
        }
        else{
        const value = Math.floor(Math.random() * 100) + 1;
        array_1.push(value);
        create_node(value,"node_whole","linked_list1",i);
        }
    }
    create_null("linked_list1");
}
function random_ll2(){
    array_2.splice(0, array_2.length);
    const g=document.getElementById("linked_list2");
    while (g.firstChild) {
        g.removeChild(g.firstChild);
    }
    for(i=0;i<5;i++){
        if(i==0) {
            const value = Math.floor(Math.random() * 100) + 1;
            array_2.push(value);
            create_node(value,"node_whole1","linked_list2",i);
        }
        else{
        const value = Math.floor(Math.random() * 100) + 1;
        array_2.push(value);
        create_node(value,"node_whole","linked_list2",i);
        }
    }
    create_null("linked_list2");
}
