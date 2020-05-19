$.ajax({
	url: "product_list_json.json",//json檔案位置
	type: "GET",//請求方式為get
	dataType: "json", //返回資料格式為json
	success: function (data) {//請求成功完成後要執行的方法
//each迴圈 使用$.each方法遍歷返回的資料date

		let product_list = $(".product_list").children()
		for (let i = 0; i < 4; i++) {
			let class_name = '.' + product_list[i].className
			$(class_name).click(function () {
					let p_class_t = ['p_class0']
					let products = $(".products").children() //獲取所有圖片的div 產品
					products[0].style.backgroundImage = "url('" + data[i].image_url_0 + "') "
					products[1].style.backgroundImage = "url('" + data[i].image_url_1 + "') "
					products[2].style.backgroundImage = "url('" + data[i].image_url_2 + "') "
					products[3].style.backgroundImage = "url('" + data[i].image_url_3 + "') "
					products[0].innerHTML = `<div id="fonts1" class="fonts_a">${data[i].product_name_0}<br>${data[i].product_price_0}</div>`
					products[1].innerHTML = `<div id="fonts2" class="fonts_b">${data[i].product_name_1}<br>${data[i].product_price_1}</div>`
					products[2].innerHTML = `<div id="fonts3" class="fonts_c">${data[i].product_name_2}<br>${data[i].product_price_2}</div>`
					products[3].innerHTML = `<div id="fonts4" class="fonts_d">${data[i].product_name_3}<br>${data[i].product_price_3}</div>`
					if (class_name === '.product_list_2') { //判斷類別 增加ID
						products[0].id = 'c_2_1'
						products[1].id = 'c_2_2'
						products[2].id = 'c_2_3'
						products[3].id = 'c_2_4'
					} else if (class_name === '.product_list_3') {
						products[0].id = 'c_3_1'
						products[1].id = 'c_3_2'
						products[2].id = 'c_3_3'
						products[3].id = 'c_3_4'
					} else if (class_name === '.product_list_4') {
						products[0].id = 'c_4_1'
						products[1].id = 'c_4_2'
						products[2].id = 'c_4_3'
						products[3].id = 'c_4_4'
					} else {
						products[0].id = 'c_1_1'
						products[1].id = 'c_1_2'
						products[2].id = 'c_1_3'
						products[3].id = 'c_1_4'
					}


				}
			);

		}
		$.ajax({
			url: "product_json.json",//json檔案位置
			type: "GET",//請求方式為get
			dataType: "json", //返回資料格式為json
			success: function (datas) {//請求成功完成後要執行的方法
				let product = $(".products").children()
				let product_list = $(".product_list").children()
				for (let i = 0; i < 4; i++) {
					let class_name = '.' + product_list[i].className

					console.log(product[i].id)
					$('#' + product[i].id).click(function () {
						$('#pd_list').hide()
						$('.detail').html(`
    <div class="product_top row  m-0 justify-content-left   product_list ">
                        
                        <div class="imgbox">

                            <div class="detail_product row  product_list" style="background-image: url(${datas[product[i].id].image_url}) ">
                            </div>
                        </div>
                        <div class="productText">

                            <h2 class='margin-bottom'>${datas[product[i].id].title}</h2>
                            <div class="blueline">
                                <h3 class='h3between'>${datas[product[i].id].text}
                            </div>
                            <h2>${datas[product[i].id].price}</h2>
                        </div>
                    </div>
                    <div class="detail_pd_img mx-auto" style="background-image: url(${datas[product[i].id].image_url2})">
                    </div>
                    <div class="detail_pd_text d-flex">

                        <div class='textMarginLeftAndTop'>
                            <h3 class='mb67'>產品內容物與規格說明 / 保固資訊</h3>
                            <h3>
                            ${datas[product[i].id].about.name}
                            
                            <br>成分：茶葉
                            <br>${datas[product[i].id].about.loc}
                            <br>${datas[product[i].id].about.spe}
                            <br>${datas[product[i].id].about.weight}
                            <br>有效日期：如包裝所示（年/月/日）
                            <br>保存期限：2年保存條件
                            <br>保存條件：置於乾燥陰涼處，開封後請儘快沖泡飲用。
                            <br>安心宣言：本產品已投保三千萬產品責任險，並通過SGS檢驗合格。
                            </h3>
                        </div>

                    </div>
    </div>
                        
                        
                        `)
						$('.detail').show()
					})
					$(class_name).click(function () {
						$('.detail').hide()
						$('#pd_list').show()
					})
				}


			}
		})

	},
	error: function (error) {
		alert('error; ' + eval(error));
	}
})