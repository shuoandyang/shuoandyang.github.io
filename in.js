//表格添加数据与上面删除用同样的一个函数
	
			function quanXuan(){
				//获取每个选择框对象
				var fuXuanKuang = document.getElementsByName("chk");
					// console.log(fuXuanKuang);
					
					// var a= fuXuanKuang[0].checked;
					// console.log(a);
				for(var i = 0; i < fuXuanKuang.length; i++ ){
					
				//判断第一个值为false 还是 true	
					if(fuXuanKuang[0].checked){
						fuXuanKuang[i].checked = true;
					}else{
						fuXuanKuang[i].checked = false;
						
					}
				}
			}
			
//删除
				function shanChu(x){
					//获取删除行
					var tr= x.parentNode.parentNode;
					// console.log(tr);
					//隐藏获取的行
					tr.style.display = 'none';
				}
				
//修改 			
			function xiuGai(x){
				//获取修改行
				var tr =x.parentNode.parentNode
				//获取修改列
				var td = tr.cells[2];
				td.innerHTML = "<input type = 'text' id = 'inp' onblur = 'neiRong(this)'/>"
				
			}
			
			function neiRong(x){
		
				//获取修改行
				var tr =x.parentNode.parentNode;
				//获取列
				var td = tr.cells[2];
				//获取列并改变列 为传参x的value值	
				td.innerText = x.value;
				//改变商品总价
				var td04 = tr.cells[4];
				//获取单价于数量进行相乘 
				var td03 = tr.cells[3].innerText;
				
				td04.innerText =(x.value * td03) 
				
			}
//添加内容
			function tianJia(){
				var name = document.getElementById("shanpin").value;
				var shu = document.getElementById("geshu").value;
				var danJia = document.getElementById("danJia").value;

				// 判断输入的内容是否为空
				if(name != "" , shu !="" , danJia !=""){
					
					console.log(name);
					
				//开始加入行
					var tr = document.getElementById("tab");
					//插入第一行
					var td = tr.insertRow(1);
					
				// 第一列复选框
					var td00 = td.insertCell(0);
					td00.innerHTML =" <input type='checkbox' name = 'chk' style='width: 20px;height: 20px;'/> ";
				// 第一列商品名称
					var td01 = td.insertCell(1);
					td01.innerHTML = name;
				// 第一列购买个数
					var td02 = td.insertCell(2);
					td02.innerHTML = shu;
				// 商品单价
					var td03 = td.insertCell(3);
					td03.innerHTML = danJia;
				// 商品总价
					var td04 = td.insertCell(4);
					td04.innerHTML = (shu * danJia);
				// 操作按钮
					var td05 = td.insertCell(5)
					td05.innerHTML = "  <input type='button' onclick='xiuGai(this)' value='修改'><input type='button' onclick='shanChu(this)' value='删除'/>            ";
					
				}else{
				
					alert("请输入正确的内容");
				}
		
			}
// 删除选项框
			function shanChuKuang(){
				//获取表格
				var ta = document.getElementById("tab");
				//获取全部复选框
				var kuang = document.getElementsByName("chk");
				// console.log(kuang);
				
			
				//便利所有
				for(var i=1;i<kuang.length;i++){ //因为0是第一行的单元格
					
					if(kuang[i].checked){ 						 // 那个i的值等于true 就传进去
						
						ta.deleteRow(i);
						i--;
						
					}	
				}
	
			}
//计算总价
			function zoJia(){
				
				var b = 0
				
				//获取表格
				var ta = document.getElementById("tab");
				var tr = ta.rows;
				    
				for(var i=1;i<tr.length;i++){
					shuL = tr[i].cells[2].innerText;
					danJ= tr[i].cells[3].innerText;
					
					var a = (shuL * danJ);
					var b= b+a;
					console.log(a);
					
					
				}
				// console.log(b);
				document.getElementById("neirrr").innerHTML = "当前金额" +  b;
					
			}